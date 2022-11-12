/**
 * Project: ibad.one
 * Author: Josh Ibad
 *
 * Copyright © 2022 Josh Ibad, creator of ibad.one. All Rights Reserved.
 * 
 * Filename: /model/init.js
 * Description: Driver script to interface with a SQL database and run all 
 *	sql scripts in the sql folder.
 */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import DB_Conn from './DB_Conn.js';

const fileFormat = 'utf8';

let conn = new DB_Conn();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dirPath = path.join(__dirname, 'sql');

fs.readdir(dirPath, (e, dllFiles)=>{
	for(let dllFile of dllFiles){
		console.log(`[==== Running file: ${dllFile} ====]`);
		
		let sqlQueries = fs.readFileSync(path.join(dirPath, dllFile), fileFormat);
		
		sqlQueries.split(';').forEach((sqlQuery)=>{
			if(sqlQuery){
				conn.query(sqlQuery, (e, res)=>{
					console.log(sqlQuery);
					if(e) console.log(e);
					if(res) console.log(res);
				});
			}
		});
	}
});