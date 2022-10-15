import React from 'react';

import ENV from '@/util/env.js';
import CardGrid, { Card } from '@/component/CardGrid';
import { ContactUsLink } from '@/component/ContactFormComponent';


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
          <CardGrid>
            <Card title="ibad.one" link={`${ENV.url.prot}://${ENV.url.root}`}
              desc="This website. Hosts this portfolio as well as various valuable services, tools, and software products. Work in progress"/>
            <Card title="HavenChat" link="https://havenchat.ibad.one" writeupLink="https://ibad.one/pdf/havenchat_project_report.pdf"
              desc="A Secure Live Chatting web app. Uses AES-256-CBC w/ secure key distribution via RSA, and RSA / DSA digital signatures. Built in React, Express, NodeJS, & MySQL."/>
          </CardGrid>
        </div>
        
        
        <ContactUsLink />
      </div>
    </React.Fragment>);
  }
}