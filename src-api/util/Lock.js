/**
 * Project: ibad.one
 * Author: Josh Ibad
 *
 * Copyright © 2022 Josh Ibad, creator of ibad.one. All Rights Reserved.
 * 
 * Filename: /util/Lock.js
 * Description: A simple Lock class meant to act as a Mutex to assure mutual exclusion
 *	to a resource and allow others to queue up to access the resource. Simple wait, lock
 *	and unlock functions are provided. Wait is a promise, and may therefore be synchronized
 *	on async functions.
 */

import EventEmitter from 'events';

export default class Lock {
	constructor(enabled = true){
		this.bus = new EventEmitter();
		this.locked = false;
		this.enabled = enabled;
		this.queue = 0;
	}
	
	wait(useLock=false){
		return new Promise((res, rej)=>{
			this.queue++;
			if(this.locked && this.enabled){
				this.bus.once('unlock', ()=>{
					this.queue--;
					res('Success');
				});
			}else{
				if(useLock){
					this.lock();
				}
				this.queue--;
				res('Success');
			}
		});
	}
	
	lock(){
		this.locked = true;
	}
	
	unlock(){
		this.bus.emit('unlock');
		this.locked = false;
	}
}