import React from 'react';
import {Link} from "react-router-dom";

import ENV from '@/util/env.js';


export default class ToolsLandingPage extends React.Component {
	constructor(props){
		super(props);
    this.state = {}
  }

  render(){
    return (<React.Fragment>
      <div className="ib-header ib-sparse">
        <h1>Tools</h1>
        <p>
          <i>"The best investment is in the tools of one's own trade."</i><br/>
          <i style={{display: 'inline-block', fontSize: '0.75em', marginTop: '1em'}}>&mdash; Benjamin Franklin</i>
        </p>
      </div>

      <div className="ib-body ib-sparse">
        <div className="ib-card ib-none" id="desc" style={{fontSize: '0.9em', marginTop: '-3em', marginBottom: '2em'}}>
          <p> A series of handy tools for your everyday use. Tools run in-browser, geared towards fulfilling lighter tasks compared to full-blown software solutions. </p>
        </div>

        <div className="ib-card" id="featured">
          <h3>Featured</h3>
          <div className="ib-grid">
            <div className="grid-entry">
              <h4 className="entry-title">CS Calculator</h4>
              <p className="entry-desc">A calculator geared towards CS calculations. Support binary, hex, variable bidwidth calculations.</p>
              <Link className="entry-link" to="/cs_calculator">Visit here</Link>
            </div>
          </div>
        </div>
        {/*}
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