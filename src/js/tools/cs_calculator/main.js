/**
 * Project: ibad.one
 * Author: Josh Ibad
 *
 * Copyright © 2022 Josh Ibad, creator of ibad.one. All Rights Reserved.
 * 
 * Filename: /public/js/tools/cs_calculator/main.js
 * Description: Driver script for the CS Calculator Tool. Responsible for loading
 * 	listeners for inputs and buttons, as well as for interfacing with the Calculator
 *	parser for expression parsing and evaluation.
 */
import katex from 'katex';
import CS_Calculator, {OutFlag}  from '@/js/tools/cs_calculator/cs_calculator.js';

const CalcInstance = new CS_Calculator();

const inButtonIDs = ["btnInNorm", "btnInIEEE754_32", "btnInIEEE754_64"];
const outButtonIDs = ["btnOutDec", "btnOutBin", "btnOutHex", "btnOutCustom"];
const outSpecButtonIDs = ["btnOutNorm", "btnOutIEEE754_32", "btnOutIEEE754_64"];

/**
 *	Evaluates the input from the input tag in the user interface and
 *	print the results in the correct sections of the winter page.
 */
async function evaluateInput({latex=true, save=false}={}){
	let user_input = document.getElementById("user_input")?.value || "";
	user_input = user_input.replace(/\s/g,'');
	let results = CalcInstance.evaluate(user_input, latex, save) || {};
	document.getElementById("results").innerHTML = results.val || 0;
	results.latex && katex.render(results.latex, document.getElementById("latexInput"), {
		throwOnError: false
	});
}

function pushHistory(){
	evaluateInput({latex: true, save: true}).then(()=>{
		let inputField = document.getElementById("user_input");
		let user_input = inputField?.value || "";
		if(user_input.length > 0){
			user_input = user_input.replace(/\s/g,'');
			let output = Number(document.getElementById("results").innerHTML || 0);
			CalcInstance.pushHistory(user_input, output);
			inputField.value = "";
		}
	});
}

function nxtHistory(){
	let historyEntry = CalcInstance.nxtHistory();
	document.getElementById("user_input").value = historyEntry.in;
	evaluateInput();
}

function prevHistory(){
	let historyEntry = CalcInstance.prevHistory();
	document.getElementById("user_input").value = historyEntry.in;
	evaluateInput();
}



/**
 *	Toggle out the output format flag w/ the flag inputted.
 *	@param flag - Output format flag
 */
function toggleOutFlag(flag){
	let tmp_specOps = document.getElementById("specialOutOps");
	outButtonIDs.forEach((key)=>{
		let tmp_button = document.getElementById(key);
		tmp_button && tmp_button.classList.remove('active');
	});
	
	document.getElementById(outButtonIDs[flag]).classList.add('active');
	tmp_specOps.style.display = (flag === OutFlag.dec || flag === OutFlag.custom) ? 'none' : 'block'
	CalcInstance.config.outputFlags = flag;
	evaluateInput();
}

/**
 *	Toggle out the output format flag w/ the flag inputted.
 *	@param flag - Output format flag
 */
function toggleOutSpecFlag(flag){
	outSpecButtonIDs.forEach((key)=>{
		let tmp_button = document.getElementById(key);
		tmp_button && tmp_button.classList.remove('active');
	});
	
	document.getElementById(outSpecButtonIDs[flag]).classList.add('active');
	CalcInstance.config.outSpecFlags = flag;
	evaluateInput();
}

/**
 *	Toggle out the input format flag w/ the flag inputted.
 *	@param flag - Input format flag
 */
function toggleInFlag(flag){
	inButtonIDs.forEach((key)=>{
		let tmp_button = document.getElementById(key);
		tmp_button && tmp_button.classList.remove('active');
	});
	
	document.getElementById(inButtonIDs[flag]).classList.add('active');
	CalcInstance.config.inputFlags = flag;
	evaluateInput();
}


export default function main(){
	document.getElementById("results").innerHTML = '0';
	document.getElementById("user_input").addEventListener("keyup", function(event){
		switch(event.keyCode){
			case 13:  // Enter button -- store in history
				event.preventDefault(); pushHistory(); break;
			// Up & Down -- navigate history
			case 38:
				event.preventDefault(); prevHistory(); break;
			case 40:
				event.preventDefault(); nxtHistory(); break;
			case 37: case 39:  // Left, right button
				event.preventDefault(); break;
			default:
				evaluateInput(); break;
		}
	});
	
	outButtonIDs.forEach((outBtnID, flag)=>{
		document.getElementById(outBtnID).onclick = (e)=>{toggleOutFlag(flag);};
	});
	
	inButtonIDs.forEach((inBtnID, flag)=>{
		document.getElementById(inBtnID).onclick = (e)=>{toggleInFlag(flag);};
	});
	
	outSpecButtonIDs.forEach((outSpecBtnID, flag)=>{
		document.getElementById(outSpecBtnID).onclick = (e)=>{toggleOutSpecFlag(flag);};
	});
}