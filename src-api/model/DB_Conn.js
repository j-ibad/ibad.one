/**
 * Project: ibad.one
 * Author: Josh Ibad
 *
 * Copyright © 2022 Josh Ibad, creator of ibad.one. All Rights Reserved.
 * 
 * Filename: /model/DB_Conn.js
 * Description: A DB Connection class providing an interface with SQL
 *	databases. The connection is configured according to config files and
 *	provides basic query interface functions.
 */

import mysql from 'mysql';
import Lock from '#util/Lock.js';

import { createRequire } from "module";
const require = createRequire(import.meta.url)

export default class DB_Conn {
	constructor(sync=true){
		let mysqlConnectionParams = require('#config/db_creds.secret.json');
		this.pool = mysql.createPool(mysqlConnectionParams);
		this.queryLock = new Lock(sync);
	}
	
	query(sql, handler){
		this.queryLock.wait(true).then(()=>{
			this.pool.getConnection(async(err, conn)=>{
				if(err){
					console.log(`DB CONNECTION ERROR: ${err}`);
					handler(err, {});
					this.queryLock.unlock();
					return;
				}
				await conn.query(sql, (err2, res)=>{
					if(err2){
						console.log(`DB QUERY ERROR: ${err2}`);
						handler(err2, {});
						this.queryLock.unlock();
						conn.release();
						return;
					}
					handler(err2, res);
					this.queryLock.unlock();
					conn.release();
				});
			});
		});
	}
	
	queryAsync(sql){
		let lock = new Lock();
		let retVal = {status: false, data: null};
		lock.lock();
		
		this.query(sql, (err, res)=>{
			if(err){
				retVal.err = err;
			}else{
				retVal.status = true;
				retVal.data = res;
			}
			lock.unlock();
		});
		return lock.wait().then(()=>{ return retVal; });
	}
}