import React from 'react';

import CardGrid, { Card } from '@/component/CardGrid';
import { ContactUsLink } from '@/component/ContactFormComponent';


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
          <CardGrid>
            <Card route="/cs_calculator" title="CS Calculator"
              desc="A calculator geared towards CS calculations. Support binary, hex, variable bidwidth calculations."/>
            <Card route="/subnet_calculator" title="Subnet Calculator"
              desc="Calculates Network ID, Host ID, Subnet Size, Usable Address Range, identifies special IPs, and more. Accepts decimal-dot notation (DDN), hex, binary, w/ subnet masks or CIDR."/>
          </CardGrid>
        </div>
        
        <ContactUsLink />
      </div>
    </React.Fragment>);
  }
}