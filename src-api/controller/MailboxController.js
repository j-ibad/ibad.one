/**
 * Project: ibad.one
 * Author: Josh Ibad
 *
 * Copyright © 2022 Josh Ibad, creator of ibad.one. All Rights Reserved.
 * 
 * Filename: /controller/MailboxController.js
 * Description: Controller providing an API Endpoint for the Mailbox model.
 */

import express from 'express';
import MailboxModel from '#model/Mailbox.js';

const router = express.Router();

router.post('/getCategories', (req, res)=>{
	MailboxModel.getCategories().then((retVal)=>{
		res.json(retVal || {status: false, msg: 'An error has occured'});
	});
});

router.post('/postMail', (req, res)=>{
	req.body.ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
	
	MailboxModel.postMail(req.body).then((retVal)=>{
		res.json(retVal || {status: false, msg: 'An error has occured'});
	});
});

export default router;