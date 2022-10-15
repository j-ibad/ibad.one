import React from 'react';

import ENV from '@/util/env.js';
import styles from '@/css/pages/Home.module.css'
import ContactFormComponent from '@/component/ContactFormComponent';
import CardGrid, {Card} from '@/component/CardGrid';


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
            <CardGrid className={styles.ibCardGrid}>
              <Card link={`${ENV.url.prot}://tools.${ENV.url.root}/cs_calculator`} title="CS Calculator"
                desc="A calculator geared towards CS calculations. Support binary, hex, variable bidwidth calculations."/>
              <Card link={`${ENV.url.prot}://tools.${ENV.url.root}/subnet_calculator`} title="Subnet Calculator"
              desc="Calculates Network ID, Host ID, Subnet Size, Usable Address Range, identifies special IPs, and more. Accepts decimal-dot notation (DDN), hex, binary, w/ subnet masks or CIDR."/>
            </CardGrid>
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
            <CardGrid className={styles.ibCardGrid}>
              <Card link={`${ENV.url.prot}://${ENV.url.root}`} title="ibad.one"
                desc="This website. Hosts this portfolio as well as various valuable services, tools, and software products. Work in progress"/>
              <Card link="https://havenchat.ibad.one" writeupLink={`${ENV.url.prot}://${ENV.url.root}/pdf/havenchat_project_report.pdf`} title="HavenChat"
                desc="A Secure Live Chatting web app. Uses AES-256-CBC w/ secure key distribution via RSA, and RSA / DSA digital signatures. Built in React, Express, NodeJS, & MySQL."/>
            </CardGrid>
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
            
            <CardGrid className={styles.ibCardGrid}>
              <Card link={`${ENV.url.prot}://docs.${ENV.url.root}/ds/1`} title="Data Structures I"
                desc="Learn about the various data structures such as lists, trees, and hash maps, as well as some algorithms based around these data structures. A work in progress."/>
              <Card link={`${ENV.url.prot}://docs.${ENV.url.root}/swe/oop`} title="Object Oriented Programming"
                desc="Learn the concepts behind the Object Oriented Programming paradigm, as well as SOLID Principles and UML Class Diagrams."/>
              <Card link={`${ENV.url.prot}://docs.${ENV.url.root}/Finance/links`} title="Finance Links"
                desc="Collection of links for Finance. From links to watch the equity markets, to fixed income securities, as well as derivitives markets. To be updated as we increase our Finance activities."/>
            </CardGrid>

            <div className={`center-container segment-link ${styles['segment-link']}`}>
              <a className="ib-link-btn" href={`${ENV.url.prot}://docs.${ENV.url.root}`}>See all</a>
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