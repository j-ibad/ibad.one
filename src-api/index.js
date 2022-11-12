/**
 * Project: ibad.one
 * Author: Josh Ibad
 *
 * Copyright © 2022 Josh Ibad, creator of ibad.one. All Rights Reserved.
 * 
 * Filename: /index.js
 * Description: Driver file for the ibad.one website. Responsible for hosting various 
 *	subdomains which may render templates or redirect, based on the configuration
 *	files. Also exposes API endpoints, as well as WebSockets and other miscellaneous
 *	services.
 */
import fs from 'fs';
import path from 'path';

import express from 'express';
import subdomain from 'express-subdomain';
import http from 'http';
import https from 'https';
import httpProxy from 'http-proxy';
import cors from 'cors';
import compression from 'compression';

import * as RequestHelpers from '#util/RequestHelpers.js'
import JWT from '#util/JWT.js';
import MailboxRouter from '#controller/MailboxController.js';

import { createRequire } from "module";
const require = createRequire(import.meta.url)
const APP_CONFIG = require('#config/app.json');

const IS_PROD = (process.env['NODE_ENV'] || '').trim() !== 'development';
console.log(`Environment: '${(process.env['NODE_ENV'] || '').trim()}'`)
const PORT_HTTP = APP_CONFIG.app.http[(IS_PROD) ? "port" : "port_test"];



// Create app and use JSON middleware & CORS policiy
const app = express();
app.use(compression());
app.use(express.json());
app.use(cors());
IS_PROD && app.use(RequestHelpers.redirectHTTPS);  // Redirect HTTP to HTTPS in Production Environments



// [===== Subdomain-routing =====]
function proxyErrorHandler(err, req, res){
	req.socket.destroyed && err.code === "ECONNRESET" && req._proxyReq.abort();
}

// Set up subdomains
app.subdomains = {};
for(let [appSubdomain, sd_config] of Object.entries(APP_CONFIG.subdomains)){
	let sdRouter = express.Router();
	let sdEntry = {router: sdRouter};
	
	if(sd_config.redirect){
		sdRouter.get('*', (req, res)=>{
			res.redirect(sd_config.redirect);
		});
	}
	if(sd_config.proxy){
		let sdProxy = httpProxy.createProxyServer({});
		sdRouter.get('*', (req,res)=>{
			sdProxy.web(req, res, {target: sd_config.proxy.target}, (err)=>{});
		});
		sdProxy.on("error", proxyErrorHandler);
		sdProxy.on("proxyError", proxyErrorHandler);
		sdEntry.proxy = sdProxy
	}
	
	app.subdomains[appSubdomain] = sdEntry;
	app.use(subdomain(appSubdomain, sdRouter));
}

// HavenChat subdomain ('havenchat')
const proxyHavenchat = app.subdomains.havenchat.proxy;
proxyHavenchat.on("upgrade", (req, socket, head, error) => {
  socket.on('error', err => { });
  proxyHavenchat.ws(req, socket, head);
});



// [===== Top-level routing =====]
//  API Endpoints
app.use('/api/mailbox', MailboxRouter);

//	Static files
['static', 'img', 'pdf'].forEach((dir)=>{
	app.use(`/${dir}`, express.static(`dist/${dir}`));
})

const staticRoutes = { };
['favicon.ico', 'logo192.png', 'logo512.png', 'manifest.json', 'robots.txt', 'index.html'].forEach((file)=>{
	staticRoutes[`/${file}`] = path.resolve(`dist/${file}`);
})
const defaultRoute = staticRoutes['/index.html'];

app.get('*', (req, res)=>{
	res.sendFile(staticRoutes[req.url] || defaultRoute);
});


if(IS_PROD){
	const httpsServer = https.createServer({
		key: fs.readFileSync(APP_CONFIG.app.https.key_file),
		cert: fs.readFileSync(APP_CONFIG.app.https.cert_file)
	}, app);

	httpsServer.listen(APP_CONFIG.app.https.port, APP_CONFIG.app.ip, ()=>{
		console.log(`ibad.one HTTPS Server running on port ${APP_CONFIG.app.https.port}`);
	});
}

const httpServer = http.createServer(app);
httpServer.listen(PORT_HTTP, APP_CONFIG.app.ip, ()=>{
	console.log(`ibad.one HTTP Server running on port ${PORT_HTTP}`);
});