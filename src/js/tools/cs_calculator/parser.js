/**
 * Project: ibad.one
 * Author: Josh Ibad
 *
 * Copyright © 2022 Josh Ibad, creator of ibad.one. All Rights Reserved.
 * 
 * Filename: /public/js/tools/cs_calculator/parser.js
 * Description: CS Calculator's parser. The parser is responsible for parsing
 *	the expression and inserting tokens into an expression tree for evalution
 */
 
const functions = ['log', 'ceil', 'floor'];
const systemVars = ['$res'];
const varPrefix = '$';
const historyPrefix = /\$res\d+/;
function isAlpha(iStr){return (iStr>=65 && iStr<=90) || (iStr>=97 && iStr<=122);}
function isDig(iStr){return (iStr>=48 && iStr<=57);}

function charBuffer(iStr){
	return isDig(iStr) || (iStr === varPrefix.charCodeAt(0)) || (iStr === 46) || isAlpha(iStr);
}

export default class Parser{
	constructor(tree, calc=null){
		this.tree = tree;
		this.calc = calc;
		this.buffer = "";
	}
	
	/**
	 * Parses and preprocesses and expression string. Functions and variables are
	 * evaluated first, before inserting tokens into the expression tree for evaluation.
	 * @param expr - Expression string
	 * @param tree - Expression tree to insert expression tokens into
	 */
	parse(expr){
		let i = -1;
		expr = expr.replace(/\s/g,'');  // Get rid of all whitespace
		
		while(++i < expr.length){
			let charVal = expr.charCodeAt(i);
			
			if(charBuffer(charVal)){  // Ints, floats, vars, functions
				this.buffer += expr.charAt(i);
			}else {
				this.flushBuffer();
				
				if(expr.charAt(i) === '*' && (i < expr.length-1 && expr.charAt(i+1) === '*')){  // Exponentiation
					this.tree.insert('**');
					i++;
				}else{
					this.tree.insert(expr.charAt(i));
				}
			}
		}
		this.flushBuffer();
	}
	
	flushBuffer(){
		if(this.buffer !== ""){
			if(this.buffer.startsWith(varPrefix)){
				let buffLatex = `\\${this.buffer}`;
				if(historyPrefix.test(this.buffer)){  // Check if history variable
					let index = this.buffer.match(/\d+/i)[0];
					let res = this.calc.getHistory(index-1);
					this.tree.insert(res.out.valueOf(), buffLatex);
				}else if(systemVars.includes(this.buffer)){  // Check if system variable call
					switch(this.buffer){
						case "$res": {
							let res = this.calc.getHistory(this.calc.history.length-1);
							this.tree.insert(res.out.valueOf(), buffLatex);
							break;
						}
						default: break;
					}
				}else{  // Retrieve memory, or use default of 0
					this.tree.insert(this.calc.mem[this.buffer] || 0, buffLatex);
				}
			}else if(functions.includes(this.buffer)){
				// console.log('Evaluate Functions');  // TODO: Evaluate function
			}else{
				this.tree.insert(this.buffer);
			}
			this.buffer = "";
		}
	}
}