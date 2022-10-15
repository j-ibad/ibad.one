/**
 * Project: ibad.one
 * Author: Josh Ibad
 *
 * Copyright © 2022 Josh Ibad, creator of ibad.one. All Rights Reserved.
 * 
 * Filename: /public/js/tools/cs_calculator/cs_calculator.js
 * Description: CS Calculator Class. Responsible for interfacing with the parser
 *	to feed in inputs or receive inputs. Also responsible for intermediary steps
 *	such as format or format interpretation, as well as other middle logic.
 */

import {CalculatorTokenTree} from "@/js/tools/cs_calculator/expression.js";
import Parser from "@/js/tools/cs_calculator/parser.js";

export const OutFlag = {dec: 0, bin: 1, hex: 2, custom: 3}
export const OutSpecFlag = {norm: 0, IEEE754_32: 1, IEEE754_64: 2}

const assignmentPrefix = /\$\w+=/i;

export default class CS_Calculator{
	constructor(){
		this.config = {
			outputFlags: 0,
			outSpecFlags: 0,
			inputFlags: 0
		};
		this.input = "";
		this.history = [];
		this.currHistInd = 0;
		this.mem = {};
		
		['toBin', 'toHex', 'toCustom'].forEach((func)=>{
			this[func] = this[func].bind(this);
		});
		
		this.formatOutputOp = {
			[OutFlag.dec]: (val)=>{return val;},
			[OutFlag.bin]: this.toBin,
			[OutFlag.hex]: this.toHex,
			[OutFlag.custom]: this.toCustom
		};
	}
		
	/**
	 *	Convert the decimal input value into a binary string representation.
	 *	@param value - Decimal input value
	 *	@ret - Binary string representation
	 */
	toBin(value){
		let tmp_sign = "0";
		if(value < 0){
			value *= -1;
			tmp_sign = "1";
		}
		let tmp_str = "";
		let tmp_exp = 0;
		switch(this.config.outSpecFlags){
			case OutSpecFlag.IEEE754_32:
				tmp_str = (value >>> 0).toString(2).substring(1);
				if(tmp_str.length > 23){
					tmp_str = tmp_str.substring(0, 23);
				}
				tmp_exp = Math.floor(Math.log2(value)) + 127;
				value = value % 1.0;
				while(tmp_str.length < 23){ //Number of significand bits
					value *= 2.0;
					if(value >= 1.0){
						tmp_str += "1";
						value -= 1.0;
					}else{
						tmp_str += "0";
					}
				}
				tmp_str = (tmp_exp >>> 0).toString(2) + tmp_str;
				while(tmp_str.length < 31){
					tmp_str = "0" + tmp_str;
				}
				return "0b" + tmp_sign  + tmp_str;
			case OutSpecFlag.IEEE754_64:
				tmp_str = (value >>> 0).toString(2).substring(1);
				if(tmp_str.length > 52){
					tmp_str = tmp_str.substring(0, 52);
				}
				tmp_exp = Math.floor(Math.log2(value)) + 1023;
				value = value % 1.0;
				while(tmp_str.length < 52){ //Number of significand bits
					value *= 2.0;
					if(value >= 1.0){
						tmp_str += "1";
						value -= 1.0;
					}else{
						tmp_str += "0";
					}
				}
				tmp_str = (tmp_exp >>> 0).toString(2) + tmp_str;
				while(tmp_str.length < 63){
					tmp_str = "0" + tmp_str;
				}
				return tmp_sign + "0b" + tmp_str;
			case OutSpecFlag.norm: default:
				// TODO: 2s Complement
				return "0b" + ((value >>> 0).toString(2));
		}
	}


	/**
	 *	Convert the decimal input value into a hexadeicmal string representation.
	 *	@param value - Decimal input value
	 *	@ret - Hexadecimal string representation
	 */
	toHex(value){
		let tmp_str = "";
		switch(this.config.outSpecFlags){
			case OutSpecFlag.IEEE754_32:
			case OutSpecFlag.IEEE754_64:
				let tmp_val = this.toBin(value);
				tmp_val = tmp_val.substring(0, tmp_val.length-1);
				let tmp_ind = 0;
				for(tmp_ind = 0; tmp_ind<tmp_val.length; tmp_ind+=4){
					tmp_str += parseInt(tmp_val.substring(tmp_ind, tmp_ind+4), 2).toString(16);
				}
				return "0x"+tmp_str;
			case OutSpecFlag.norm: default:
				// TODO: 2s Complement
				return "0x"+((value >>> 0).toString(16));
		}
	}


	/**
	 *	Convert the decimal input value into a string representation of custom base.
	 *	@param value - Decimal input value
	 *	@ret - String representation in the user-specified base.
	 */
	toCustom(value){
		try{
			return (value >>> 0).toString( parseInt(document.getElementById("out_custom_base").value) );
		}catch(err){
			// toggleOutFlag(OutFlag.dec);
		}
	}
	

	/**
	 *	Evaluates the string input, parsing through it and using a binary tree
	 *	to keep track of tokenized input, and finally evaluating the inputted
	 *	expression.
	 *	@param input - String expression
	 */
	evaluate(input, latex=false, save=false){
		const tree = new CalculatorTokenTree();
		const parser = new Parser(tree, this);
		let assignKey = null;
		
		let assignPref = input.match(assignmentPrefix);
		if(assignPref && input.length > assignPref[0].length){
			assignPref = assignPref[0];
			assignKey = assignPref.substring(0, assignPref.length-1);  // Extract variable by removing single = on right;
			input = input.substring(assignPref.length);
		}
		
		parser.parse(input);
		
		let value = tree.evaluate();
		let retVal = {val: this.formatOutput(value)};
		
		// Save to results to memory
		if(save && assignKey){this.mem[assignKey] = retVal.val;}
		
		try{
			retVal.latex = (assignKey) ? `\\${assignKey}=` : '';
			let strLatex = latex && tree.toLaTeX();
			retVal.latex += (strLatex) ? strLatex.toString() : '';
		}catch(err){}
		return retVal;
	}
	
	formatOutput(value){
		return this.formatOutputOp[this.config.outputFlags || 0](value);
	}
	
	pushHistory(input, output){
		this.history.push({in: input, out: output});
		this.currHistInd = this.history.length;
	}
	
	getHistory(i){
		return (i>=0 && i<this.history.length) ? this.history[i] : {in: '', out: 0};
	}
	
	prevHistory(){
		return (this.currHistInd>=0 && this.currHistInd<this.history.length+1) 
			? this.getHistory(--this.currHistInd) 
			: this.getHistory(-1);
	}
	
	nxtHistory(){
		return (this.currHistInd>=-1 && this.currHistInd<this.history.length) 
			? this.getHistory(++this.currHistInd) 
			: this.getHistory(-1);
	}
}