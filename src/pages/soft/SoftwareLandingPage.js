import React from 'react';
import {Link} from "react-router-dom";

import ENV from '@/util/env.js';


export default class SoftwareLandingPage extends React.Component {
	constructor(props){
		super(props);
    this.state = {}
  }

  render(){
    return (<React.Fragment>
      <div className="ib-header ib-sparse">
        <h1>Software</h1>
        {/*<!--p>
          <i>"The best investment is in the tools of one's own trade."</i><br/>
          <i style="display: inline-block; font-size: 0.75em; margin-top: 1em;">&mdash; Benjamin Franklin</i>
        </p-->
        */}
      </div>

      <div className="ib-body ib-sparse">
        <div className="ib-card ib-none" id="desc" style={{fontSize: '0.9em', marginTop: '-3em', marginBottom: '2em'}}>
          <p> Ranging from services, to downloadable software, and libraries. These digital solutions have been carefully build with good design and efficiency in mind, without compromise for our own convenience or time. </p>
        </div>

        <div className="ib-card" id="featured">
          <h3>Featured</h3>
          <div className="ib-grid">
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
        </div>
        {/*
        <!--div className="ib-card">
          <h3>All</h3>
        </div-->
        */}
        
        
        <div className="ib-card ib-none" id="contact-us" style={{marginTop: '-2em', fontSize: '0.9em'}}>
          <p> We value your feedback. If you have any suggestions of new functionalities or tools, or find anything wrong with the tools listed above, please let us know here:   </p>
          <div className="center-container segment-link">
            <Link className="ib-link-btn" to="/contactUs">Contact Us</Link> 
          </div>
        </div>
      </div>
    </React.Fragment>);
  }
}