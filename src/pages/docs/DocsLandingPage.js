import React from 'react';

import CardGrid, { Card } from '@/component/CardGrid';
import { ContactUsLink } from '@/component/ContactFormComponent';


export default class SoftwareLandingPage extends React.Component {
  render(){
    return (<React.Fragment>
      <div className="ib-header ib-sparse">
        <h1>Articles & Docs</h1>
        {/*
        <!--p>
          <i>Insert quote</i><br/>
          <i style="display: inline-block; font-size: 0.75em; margin-top: 1em;">&mdash; Insert citation</i>
        </p-->
        */}
      </div>

      <div className="ib-body ib-sparse">
        <div className="ib-card ib-none" id="desc" style={{fontSize: '0.9em', marginTop: '-3em', marginBottom: '2em'}}>
          <p> We're still working on these pages and putting some final touches. Please come back and check us out again later :) </p>
        </div>

        <div className="ib-card" id="featured">
          <h3>Featured</h3>
          <CardGrid>
            <Card route="/ds/1/" title="Data Structures I"
            desc="Learn about the various data structures such as lists, trees, and hash maps, as well as some algorithms based around these data structures. A work in progress."/>
            <Card route="/swe/oop" title="Object Oriented Programming"
              desc="Learn the concepts behind the Object Oriented Programming paradigm, as well as SOLID Principles and UML Class Diagrams."/>
            <Card route="/Finance/links" title="Finance Links"
              desc="Collection of links for Finance. From links to watch the equity markets, to fixed income securities, as well as derivitives markets. To be updated as we increase our Finance activities."/>
          </CardGrid>
        </div>
        
        <ContactUsLink />
      </div>
    </React.Fragment>);
  }
}