/**
 * Project: ibad.one
 * Author: Josh Ibad
 *
 * Copyright © 2022 Josh Ibad, creator of ibad.one. All Rights Reserved.
 * 
 * Filename: /model/Mailbox.js
 * Description: The Mailbox model, meant to serve as a persistence interface with the
 * 	Mailbox and MailboxCategory tables.
 */

import DB_Conn from './DB_Conn.js';
import Sanitizer from '#util/Sanitize.js';

class MailboxModel {
	constructor(){
		this.conn = new DB_Conn();
		
	}
	
	/* [===== MailboxCategory =====] */
	async getCategories(){
		let sqlQuery = 'SELECT id, name FROM MailboxCategory;';
		
		let res = await this.conn.queryAsync(sqlQuery);
		return {
			status: res.status && res.data.length > 0,
			data: res.data || []
		};
	}
	
	async addCategory(category, priority){
		category = Sanitizer.sqlSanitizeString(category);
		priority = Number(priority) || 99;
		
		let sqlQuery = `INSERT INTO MailboxCategory(name, priority) SELECT '${category}', ${priority} `;
		sqlQuery += `WHERE '${category}' NOT IN (SELECT name FROM MailboxCategory);`;
		
		let res = await this.conn.queryAsync(sqlQuery);
		return {status: (res.status && res.data.affectedRows > 0)};
	}
	
	async deleteCategory(id){
		id = Number(id);
		
		let sqlQuery = `DELETE FROM MailboxCategory WHERE id=${id};`;
		return {status: (res.status && res.data.affectedRows > 0)};
	}
	
	
	/* [===== Mailbox =====] */
	async postMail(args){
		Sanitizer.sqlSanitize(args);
		args.categoryId = Number(args.categoryId);
		
		if(!Sanitizer.validateNonempty(args) || args.categoryId <= 0){
			return {status: false, msg: 'Invalid args'};
		}
		
		let sqlQuery = `INSERT INTO Mailbox(email, category, subject, msg, ip) `
		sqlQuery += `SELECT '${args.email}', ${args.categoryId}, '${args.subject}', `;
		sqlQuery += `'${args.msg}', '${args.ip}';`
		
		let res = await this.conn.queryAsync(sqlQuery);
		let retVal = {status: (res.status && res.data.affectedRows > 0)};
		if(retVal.status){
			retVal.msg = 'Thank you for reaching out to me! :)';
		}else{
			retVal.msg = 'An error has occured, please try again later';
		}
		return retVal;
	}
}

export default new MailboxModel();