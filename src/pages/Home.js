import React from 'react';

import ENV from '@/util/env.js';
import styles from '@/css/pages/Home.module.css'
import ContactFormComponent from '@/component/ContactFormComponent';


export default class HomePage extends React.Component {
	constructor(props){
		super(props);
    this.state = {}
  }

  render(){
    return (<div>
      <div className="ib-header ib-sparse">
        <div style={{margin: '2em'}}>
          <h1 className="company-name">ibad.one</h1>
          <p className="fade-in">Digital Solutions with a Purpose &mdash; Providing Value to You</p>
        </div>
      </div>

      <div className={`ib-body ib-sparse ${styles['ib-body']} ${styles['ib-sparse']}`}>
        <div className={`ib-card ib-none`} id={styles.intro}>
          <p> We at <b>ibad.one</b> aim to provide you with valuable services, solutions, and tools that can help you in your everyday processes. </p>
        </div>
        
        <div className="ib-segment split left" id={styles['tools-segment']}>
          <div className={`contrast ${styles.contrast}`}></div>
          <div className={`segment-body ${styles['segment-body']}`}>
            <div className="ib-card ib-none" id={styles['tools']}>
              <h3>Tools</h3>
              <p> A series of handy tools for everyday use, such as specialized calculators. </p>
            </div>
            <div className={`ib-grid ${styles['ib-grid']}`}>
              <div className="grid-entry">
                <h4 className="entry-title">CS Calculator</h4>
                <p className="entry-desc">A calculator geared towards CS calculations. Support binary, hex, variable bidwidth calculations.</p>
                <a className="entry-link" href={`${ENV.url.prot}://tools.${ENV.url.root}/cs_calculator`}>Visit here</a>
              </div>
            </div>
            <div className={`center-container segment-link ${styles['segment-link']}`}>
              <a className="ib-link-btn" href={`${ENV.url.prot}://tools.${ENV.url.root}`}>See all</a> 
            </div>
          </div>
        </div>

        <div className="ib-segment split right" id={styles['software-segment']}>
          <div className={`contrast ${styles.contrast}`}></div>
          <div className={`segment-body ${styles['segment-body']}`}>
            <div className="ib-card ib-none right" id={styles['software']}>
              <div className="right-container"> <h3>Software</h3> </div>
              <p> Digital solutions, carefully built with good design and efficiency in mind &mdash; not our own convenience or time. Ranging from services, to downloadable software, and libraries. </p>
            </div>
            <div className={`ib-grid ${styles['ib-grid']}`}>
              <div className="grid-entry">
                <h4 className="entry-title">ibad.one</h4>
                <p className="entry-desc">This website. Hosts this portfolio as well as various valuable services, tools, and software products. Work in progress</p>
                <a className="entry-link" href={`${ENV.url.prot}://${ENV.url.root}`}>Visit here</a>
              </div>
              <div className="grid-entry">
                <h4 className="entry-title">HavenChat</h4>
                <p className="entry-desc">A Secure Live Chatting web app. Uses AES-256-CBC w/ secure key distribution via RSA, and RSA / DSA digital signatures. Built in React, Express, NodeJS, & MySQL.
                </p>
                <a className="entry-link" href="https://havenchat.ibad.one">Visit here</a>
              </div>
            </div>
            <div className={`center-container segment-link ${styles['segment-link']}`}>
              <a className="ib-link-btn" href={`${ENV.url.prot}://soft.${ENV.url.root}`}>See all</a> 
            </div>
          </div>
        </div>
        
        <div className="ib-segment split left" id={styles['article-segment']}>
          <div className={`contrast ${styles.contrast}`}></div>
          <div className={`segment-body ${styles['segment-body']}`}>
            <div className="ib-card ib-none" id={styles['article']}>
              <h3>Articles</h3>
              <p> Articles, guides, and documentation on software processes and technologies. </p>
            </div>
            {/*<div className={`ib-grid ${styles['ib-grid']}`}>
              <div className="grid-entry">
                <h4 className="entry-title">CS Calculator</h4>
                <p className="entry-desc">A calculator geared towards CS calculations. Support binary, hex, variable bidwidth calculations.</p>
                <a className="entry-link" href={`${ENV.url.prot}://tools.${ENV.url.root}/cs_calculator`}>Visit here</a>
              </div>
            </div>*/}
            <div className={`center-container segment-link ${styles['segment-link']}`}>
              <a className="ib-link-btn" href={`${ENV.url.prot}://${ENV.url.root}`}>Coming soon</a> 
              {/*<!--a className="ib-link-btn" href={`${ENV.url.prot}://docs.${ENV.url.root}`}>See all</a--> */}
            </div>
          </div>
        </div>

        <div className="ib-card ib-none" id={styles.about}>
          <div className="center-container"> <h3>About Us</h3> </div>
          <p> <b>ibad.one</b> was created by Josh Ibad as a platform to expose and deliver various software services, solutions, and tools to the public. Josh Ibad is a software engineer with experience in full stack applications development, as well as systems programming, and cybersecurity. </p>
          <div className={`center-container segment-link ${styles['segment-link']}`}>
            <a className="ib-link-btn" href={`${ENV.url.prot}://josh.${ENV.url.root}`}>Learn more about Josh Ibad</a> 
          </div>
        </div>

        <ContactFormComponent />
      </div>
    </div>);
  }
}