/**
 * Project: ibad.one
 * Author: Josh Ibad
 *
 * Copyright © 2022 Josh Ibad, creator of ibad.one. All Rights Reserved.
 * 
 * Filename: /public/js/tools/cs_calculator/expression.js
 * Description: CS Calculator's expression tree. The parser represent terms and operators
 *	of the expression as nodes, and is responsible for evaluating and printing expression.
 */
 
export const InFlag = {
	norm: 0, IEEE754_32: 1, IEEE754_64: 2
}


/**
 *	Simple Node class
 */
class Node{
	constructor(key){
		this.key = key;
		this.parent = null;
		this.left = null;
		this.right = null;
		this.latex = key;
	}
}


/**
 *	Calculator Token Tree implemented as a binary tree.
 */
export class CalculatorTokenTree{
	/**
	 *	Default constructor
	 */
	constructor(inputFlags=0){
		this.root = null;
		this.currNode = null;
		this.subScope = null;
		this.isFloat = false;
		this.latex = false;
		this.inputFlags = inputFlags || 0;
		this.isNeg = false;
	}
	
	/** Evaluate the entire tree */
	evaluate(){return this.evaluateHelp(this.root);}
	
	/**
	 *	Evaluate the tree specified by the inputted node
	 *	@param node - Root node of the subtree to be evaluted
	 */
	evaluateHelp(node){
		if(!node) return node;
		if(node.left == null && node.right == null){
			return node.key;
		}else{
			switch(node.key){
				case "+":
					return this.evaluateHelp(node.left) + this.evaluateHelp(node.right);
				case "-":
					return this.evaluateHelp(node.left) - this.evaluateHelp(node.right);
				case "*":
					return this.evaluateHelp(node.left) * this.evaluateHelp(node.right);
				case "/":
					return this.evaluateHelp(node.left) / this.evaluateHelp(node.right);
				case "%":
					return this.evaluateHelp(node.left) % this.evaluateHelp(node.right);
				case "**":
					return Math.pow( this.evaluateHelp(node.left), this.evaluateHelp(node.right) );
				case "^":
					return this.evaluateHelp(node.left) ^ this.evaluateHelp(node.right);
				case "&":
					return this.evaluateHelp(node.left) & this.evaluateHelp(node.right);
				case "|":
					return this.evaluateHelp(node.left) | this.evaluateHelp(node.right);
				default:
					return node.key;
			}
		}
	}
	
	
	toLaTeX(){return this.root && this.toLaTeXHelper(this.root);}
	toLaTeXHelper(node){
		if(node.left == null && node.right == null){
			return node.latex || "";
		}else{
			let tmp_left = this.toLaTeXHelper(node.left);
			let tmp_right = this.toLaTeXHelper(node.right);
			switch(node.key){
				case "/":
					if( (typeof(tmp_left) == "string" && tmp_left.endsWith(")")) ||
							(typeof(tmp_right) == "string" && tmp_right.startsWith("("))){
						return `\\frac{${tmp_left}}{${tmp_right}}`;
					}else{
						return `${tmp_left}\\div${tmp_right}`;
					}
				case "%":
					return `(${tmp_left}\\mod${tmp_right})`;
				case "*": 
					return `${tmp_left}\\cdot${tmp_right}`;
				case "+": case "-":
					return `${tmp_left}${node.latex}${tmp_right}`;
				case "**":
					return `${tmp_left}^{${tmp_right}}`;
					
				case "^":
					return `${tmp_left}\\oplus{${tmp_right}}`;
				case "&":
					return `${tmp_left}\\land{${tmp_right}}`;
				case "|":
					return `${tmp_left}\\lor{${tmp_right}}`;
				default:
					return node.latex || "";
			}
		}
	}
	
	
	/** Print all nodes */
	printAll(){ this.print(this.root); }
	/** Print all nodes */
	print(node){
		if(node != null){
			this.print(node.left);
			console.log(node.key);
			this.print(node.right);
		}
	}
	
	
	/**
	 * Return the priority of the operation
	 */
	priority(op){
		switch(op){
			case "+": case "-": return 30;
			case "*": case "/": case "%": return 20;
			case "**": return 10;
			case "^": case "&": case "|": return 5;
			default: return 0;
		}
	}
	
	
	/**
	 *	Evaluates an immediate numerical token
	 *	@param key - Numerical token being evaluated
	 *	#ret - The numerical value of the token passed
	 */
	evalNum(key){
		let sign = (this.isNeg) ? -1 : 1;
		this.isNeg = false;
		if(this.latex){return key;}
		if( typeof(key) == "number") {return key;}
		if(key.includes(".")){ //Is float
			this.isFloat = true;
			if(key.startsWith("0x")){
				return sign*parseInt(key, 16); //Change
			}else if(key.startsWith("0b")){
				return sign*parseInt(key, 2); //Change
			}else if(key.startsWith("0o")){
				return sign*parseInt(key, 8);
			}else{
				return sign*parseFloat(key);
			}
		}else{ 
			if(key.startsWith("0x")){
				if( (this.inputFlags == InFlag.IEEE754_32) && (key.length==10) ){
					/* Interpret as IEEE754 32-bit */
					return sign*this.evalIEEE754_32(key.substring(2));
				}else if( (this.inputFlags == InFlag.IEEE754_64) && (key.length==18) ){
					/* Interpret as IEEE754 64-bit */
					return sign*this.evalIEEE754_64(key.substring(2));
				}else{
					return sign*parseInt(key, 16);
				}
			}else if(key.startsWith('0b')){
				key = key.slice(2);
				if( (this.inputFlags == InFlag.IEEE754_32) && (key.length==32) ){
					/* Interpret as IEEE754 32-bit */
					return sign*this.evalIEEE754_32bin(key);
				}else if( (this.inputFlags == InFlag.IEEE754_64) && (key.length==64) ){
					/* Interpret as IEEE754 64-bit */
					return sign*this.evalIEEE754_64bin(key);
				}else{
					return sign*parseInt(key, 2);
				}
			}else if(key.startsWith("0o")){
				return sign*parseInt(key.slice(2), 8);
			}else{
				return sign*parseInt(key);
			}
		}
	}
	
	evalIEEE754_32(key){
		let tmp_arr = [];
		let tmp_ind = 0;
		for(tmp_ind = 0; tmp_ind<key.length; tmp_ind++){
			switch(key.charAt(tmp_ind)){
				case "a": case "A": tmp_arr.push(10); break;
				case "b": case "B": tmp_arr.push(11); break;
				case "c": case "C": tmp_arr.push(12); break;
				case "d": case "D": tmp_arr.push(13); break;
				case "e": case "E": tmp_arr.push(14); break;
				case "f": case "F": tmp_arr.push(15); break;
				default: tmp_arr.push( key.charCodeAt(tmp_ind) - 48 );
			}
		}
		
		let tmp_exp = (tmp_arr[0] & 7) * 32 + tmp_arr[1]*2;
		if(tmp_arr[2] & 8){ tmp_exp += 1; }
		tmp_exp -= 127; /*Subtract bias to get unbiased exponent*/
		let tmp_significand = (tmp_arr[2] & 7) * 1048576.0 + tmp_arr[3] * 65536.0 + tmp_arr[4] * 4096 +
			tmp_arr[5] * 256 + tmp_arr[6] * 16 + tmp_arr[7];
		
		let tmp_result = 1.0 + (tmp_significand / 8388608.0);
		tmp_result *= Math.pow(2, tmp_exp);
		if(tmp_arr[0] & 8){ //Check sign
			tmp_result *= -1;
		}
		return tmp_result;
	}
	evalIEEE754_32bin(key){
		return this.evalIEEE754_32( parseInt(key, 2).toString(16) );
	}
	
	
	evalIEEE754_64(key){
		let tmp_arr = [];
		let tmp_ind = 0;
		for(tmp_ind = 0; tmp_ind<key.length; tmp_ind++){
			switch(key.charAt(tmp_ind)){
				case "a": case "A": tmp_arr.push(10); break;
				case "b": case "B": tmp_arr.push(11); break;
				case "c": case "C": tmp_arr.push(12); break;
				case "d": case "D": tmp_arr.push(13); break;
				case "e": case "E": tmp_arr.push(14); break;
				case "f": case "F": tmp_arr.push(15); break;
				default: tmp_arr.push( key.charCodeAt(tmp_ind) - 48 );
			}
		}
		
		let tmp_exp = (tmp_arr[0] & 7) * 256 + tmp_arr[1]*16 + tmp_arr[2];
		tmp_exp -= 1023; /*Subtract bias to get unbiased exponent*/
		let tmp_significand = 0.0;
		
		for(tmp_ind = 15; tmp_ind >= 3; tmp_ind--){
			tmp_significand += tmp_arr[tmp_ind] * Math.pow(16, 15-tmp_ind);
		}
		let tmp_result = 1.0 + (tmp_significand / 4503599627370496.0);
		tmp_result *= Math.pow(2, tmp_exp);
		if(tmp_arr[0] & 8){ //Check sign
			tmp_result *= -1;
		}
		return tmp_result;
	}
	evalIEEE754_64bin(key){
		return this.evalIEEE754_64( parseInt(key, 2).toString(16) );
	}
	
	/**
	 *	Inserts a token into the tree
	 *	@param key - Token to enter into the tree
	 */
	insert(key, latex=null){
		if( this.subScope == null ){
			if(this.root == null){
				if( key == "(" || key == "[" || key == "{" ){
					this.subScope = new CalculatorTokenTree();
					this.subScope.latex = this.latex;
				}else{
					if( key === "-" ){
						this.isNeg = true;
					}else{
						this.root = new Node(this.evalNum(key));
						this.currNode = this.root;
					}
				}
			}else{
				 switch(key){
					case "(": case "[": case "{":
						if( this.priority(this.currNode.key) == 0){
							this.insert("*");
						}
						this.subScope = new CalculatorTokenTree();
						this.subScope.latex = this.latex;
						break;
					case "÷": this.insert("/"); break;
					case "×": this.insert("*"); break;
					case "-":
						if(this.priority(this.currNode.key) != 0 ){
							this.isNeg = true;
							break;
						}
					case "+":
					case "*": case "/": case "%":
					case "**":
					case "^": case "&": case "|":
						var newNode = new Node(key);
						while( this.currNode.parent != null && this.priority(key) >= this.priority(this.currNode.parent.key) ){
							this.currNode = this.currNode.parent;
						}
						if(this.currNode.parent == null){
							newNode.left = this.currNode;
							this.root = newNode;
							this.currNode = newNode;
						}else{
							newNode.left = this.currNode;
							newNode.parent = this.currNode.parent;
							if(newNode.parent == null){
								this.root = newNode;
							}else{
								if(this.currNode.parent.left == this.currNode){
									this.currNode.parent.left = newNode;
								}else{
									this.currNode.parent.right = newNode;
								}
							}
							this.currNode.parent = newNode;
							this.currNode = newNode;
						}
						break;
						
					default:
						//TODO: Check if 
						key = this.evalNum(key);
						var newNode = new Node(key);
						newNode.parent = this.currNode;
						if(this.currNode.left == null){
							this.currNode.left = newNode;
						}else{
							this.currNode.right = newNode;
						}
						this.currNode = newNode;
						break;
				}
			}
		}else{
			if( this.subScope.subScope == null && (key == ")" || key == "]" || key == "}") ){
				let tmp_term = "";
				if(this.latex){
					tmp_term = "(" + this.subScope.toLaTeX() + ")";
				}else{
					tmp_term = this.subScope.evaluate();
				}
				this.subScope = null;
				this.insert( tmp_term );
			}else{
				this.subScope.insert(key);
			}
		}
		this.currNode.latex = latex || key;
	}
}




