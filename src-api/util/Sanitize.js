/**
 * Project: ibad.one
 * Author: Josh Ibad
 *
 * Copyright © 2022 Josh Ibad, creator of ibad.one. All Rights Reserved.
 * 
 * Filename: /util/Sanitize.js
 * Description: Sanitizer and validator, to clean-up and filter out inputs as well
 *	as to validate the presence, type, and range of data inputs. Predominantly used
 *	to sanitize inputs for SQL queries.
 */

import {isStr} from './Helpers.js';

class Sanitize {
	constructor(){
		this.sqlBlacklist = /['";%_\0\b\t\\]/g;
	}
	
	sqlSanitizeString(inStr){
		return inStr.replace(this.sqlBlacklist, '');
	}
	
	sqlSanitize(obj){
		for(let key of Object.keys(obj)){
			if(isStr(obj[key])){
				obj[key] = this.sqlSanitizeString(obj[key]);
			}
		}
		return obj;
	}
	
	validateNonempty(args){
		for(const [k,v] of Object.entries(args)){
			if(!v || v.toString().length === 0) return false;
		}
		return true;
	}
}

export default new Sanitize();