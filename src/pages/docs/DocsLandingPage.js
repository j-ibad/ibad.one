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
        <h1>Articles & Documentation</h1>
        {/*
        <!--p>
          <i>Insert quote</i><br/>
          <i style="display: inline-block; font-size: 0.75em; margin-top: 1em;">&mdash; Insert citation</i>
        </p-->
        */}
      </div>

      <div className="ib-body ib-sparse">
        <div className="ib-card ib-none" id="desc" style={{fontSize: '0.9em', marginTop: '-3em', marginBottom: '0'}}>
          <h2> Coming Soon ... </h2>
          <p> We're still working on these pages and putting some final touches. Please come back and check us out again later :) </p>
        </div>
        {/*
        <!--div className="ib-card" id="featured">
          <h3>Featured</h3>
          <div className="ib-grid">
            <div className="grid-entry">
              <h4 className="entry-title">CS Calculator</h4>
              <p className="entry-desc">A calculator geared towards CS calculations. Support binary, hex, variable bidwidth calculations.</p>
              <a className="entry-link" href="{{protocol}}tools.{{root}}/cs_calculator">Visit here</a>
            </div>
          </div>
        </div-->
        
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