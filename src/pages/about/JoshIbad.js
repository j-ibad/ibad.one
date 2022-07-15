import React from 'react';
import {Helmet} from "react-helmet";

import ContactFormComponent from '@/component/ContactFormComponent';


export default class JoshIbadPage extends React.Component {
	constructor(props){
		super(props);
    this.state = {}
  }

  render(){
    return (<div>
      <Helmet>
        <title>Josh Ibad - Full Stack Engineer</title>
      </Helmet>

      <div className="ib-header ib-sparse">
        <h1>Josh Ibad</h1>
        <p> Full Stack Software Engineer </p>
      </div>

      <div className="ib-body ib-sparse">
        <div className="ib-card" id="intro">
          <h3 className="section-header"> About Me</h3>
          <div>
            <img className="ib-graphics-right" alt="Josh Ibad" src="/img/ji-headshot1-nobg.png"/>
            <p> Hello! I'm <b>Josh Ibad</b> and I enjoy building reliable digital solutions aiming to provide value to my clients / employers. My coding adventure started early in high school, since which time I've had experiences in full stack development, systems programming, and cybersecurity. </p>
            <p> Today, I'm lucky to be working as a full stack software engineer at <a className="ib-link-light" href="{{protocol}}paratusllc.org/">Paratus LLC</a>. Here, I develop & maintain in-house web apps aimed at supporting & streamlining the company's workflow. I also liaise with high-level executives regularly to discuss projects or fullfil requests. </p>
            <p> I'm currently looking for ways to grow and advance in the field, actively working on personal projects and studying up on technologies & best practices.</p>
          </div>
        </div>
	
        <div className="ib-card ib-none" id="experience">
          <h3 className="section-header"> Professional Experience</h3>
          <div className="ib-tab-container ib-tab-container-ver">
            <div className="ib-tabs ib-tabs-ver ib-light">
              <button className="active" data-tab="Paratus">Paratus</button>
              {/*<!--button data-tab="Other">Other</button--></div>*/}
            </div>
            <div className="ib-tab-pane">
              <div className="tab-content active" data-tab-content="Paratus"> 
                <div className="tab-section">
                  <h4 className="sec-header"> Full Stack Software Engineer</h4>
                  <h5 className="sec-right"> '21 Aug - Present </h5>
                  <h5 className="sec-subheader"> Paratus Partners LLC </h5>
                  
                  <ul className="ib-bullets">
                    <li> Developing and maintaining full-stack web applications through the full agile software lifecycle from requirements engineering through to successful deployment. </li>
                    <li> Liaising with high level executives and other stakeholders regularly to communicate project requirements and design. </li>
                    {/*<!--li> Contributed to the formalization of a software development process with structured iteration plans, requirements analysis, and design documentation. </li-->*/}
                  </ul>
                </div>
                <div className="tab-section"> 
                  <h4 className="sec-header"> Software Engineering Intern</h4>
                  <h5 className="sec-right"> '21 Jun - '21 Aug </h5>
                  <h5 className="sec-subheader"> Paratus Partners LLC </h5>
                  
                  <ul className="ib-bullets">
                    <li> Designed and developed full-stack web components, APIs, and database tables. </li>
                    <li> Optimized and refactored core applications by cleaning-up the codebase, removing redundancies, and analyzing traffic bottlenecks. </li>
                    <li> Created Business Intelligence reports used regularly by high level executives to monitor the business's operational performance and cash flow. Was able to detect various issues such as client payment issues and process bottlenecks. </li>
                  </ul>
                </div>
              </div>
              {/*<!--div className="tab-content" data-tab-content="Other"> 
                <div className="tab-section">
                  <h4 className="sec-header"> Position </h4>
                  <h5 className="sec-right"> Date range </h5>
                  <h5 className="sec-subheader"> Company </h5>
                  
                  <ul> <li> Bullet Points </li> </ul>
                </div>
              </div-->*/}
            </div>
          </div>
        </div>
	
        <div className="ib-card" id="projects">
          <h3 className="section-header"> Projects </h3>
          {/*<!--p> Insert summary of the projects section </p-->*/}
          <div className="ib-grid">
            <div className="grid-entry">
              <h4 className="entry-title">ibad.one</h4>
              <p className="entry-desc">This website. Hosts this portfolio as well as various valuable services, tools, and software products. Work in progress</p>
              <a className="entry-link" href="{{protocol}}{{root}}">Visit here</a>
            </div>
            <div className="grid-entry">
              <h4 className="entry-title">HavenChat</h4>
              <p className="entry-desc">A Secure Live Chatting web app. Uses AES-256-CBC w/ secure key distribution via RSA, and RSA / DSA digital signatures. Built in React, Express, NodeJS, & MySQL.
              </p>
              <a className="entry-link" href="https://havenchat.ibad.one">Visit here</a>
            </div>
          </div>
          <div className="center-container segment-link" style={{marginTop: '2em', marginBottom: '1em'}}>
            <a className="ib-link-btn" href="{{protocol}}soft.{{root}}">See all</a> 
          </div>
        </div>
        
        <div className="ib-card ib-none" id="other-experiences">
          <h3 className="section-header"> Other Experiences: Industry Projects & Competitions</h3>
          <div className="ib-tab-container ib-tab-container-hor">
            <div className="ib-tabs ib-tabs-hor ib-light">
              <button className="active" data-tab="industry_projects">Industry Projects</button>
              <button data-tab="competitions"> Competitions </button>
            </div>
            <div className="ib-tab-pane">
              <div className="tab-content active" data-tab-content="industry_projects"> 
                <div className="tab-section">
                  <h4 className="sec-header"> Industry Market Trend Analyzer</h4>
                  <h5 className="sec-right"> '21 March - '21 May </h5>
                  <h5 className="sec-subheader"> Tiblio Inc. <span className="label">sponsored project @</span> CSUF </h5>
                  <ul className="ib-bullets">
                    <li> Acted as <b>Team Lead</b>, developed parts of both front end and back end of a Web-based desktop application to collect and analyze stock data through the Yahoo Finance API, to display trends and correlations in market industries. </li>
                    <li> Used NodeJS, ElectronJS, ExpressJS, Yahoo Finance API, and SQLite. </li>
                  </ul>
                </div>
                <div className="tab-section"> 
                  <h4 className="sec-header"> Security Operations Center (SOC) in a Box</h4>
                  <h5 className="sec-right"> '21 Oct - '21 May </h5>
                  <h5 className="sec-subheader"> Disney <span className="label">sponsored project @</span> CSUF </h5>
                  <ul className="ib-bullets">
                    <li> Aided in planning and implementing a student prototype of a standalone detection and SIM mechanism for investigations through the setup of a Docker environment to emulate a Security Operations Center. </li>
                  </ul>
                </div>
              </div>
              
              <div className="tab-content" data-tab-content="competitions">
                <div className="tab-section"> 
                  <h4 className="sec-header"> '22 Winter Student Cluster Invitational</h4>
                  <h5 className="sec-right"> '22 Winter </h5>
                  <ul className="ib-bullets">
                    <li> Ran parallel / distributed payload such as benchmarks and CFD applications on NASA and HPE supercomputers. </li>
                    <li> Optimized distributed applications through profiling and the usage of compiler flags and task configurations. </li>
                  </ul>
                </div>
                <div className="tab-section"> 
                  <h4 className="sec-header"> National Finalist @ Collegiate Penetration Testing Competition (CPTC) </h4>
                  <h5 className="sec-right"> '20 Fall </h5>
                  <h5 className="sec-subheader"> <span className="label">Role:</span> Risk & Compliance Specialist </h5>
                  <ul className="ib-bullets">
                    <li> Coordinated the creation of the penetration testing report written as a result of the security assessment performed. </li>
                    <li> Aided the penetration testing team in finding vulnerabilities in Windows machines and front-facing Web interfaces. </li>
                  </ul>
                </div>
                <div className="tab-section">
                  <h4 className="sec-header"> National Finalist @ Cyberpatriots XI Competition</h4>
                  <h5 className="sec-right"> '18 Fall - '19 Spring </h5>
                  <h5 className="sec-subheader"> <span className="label">Role:</span> Networking Specialist </h5>
                  <ul>
                    <li> Troubleshooted routing and VPN misconfigurations. Configured logging, authentication, and network switching. </li>
                    <li> Supported in Windows System Administration in simple workstation configuration and security hardening. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="ib-card ib-none" id="skills">
          <h3 className="section-header"> Skills & Technologies</h3>
          
          <div>
            <h4 className="ib-tag-list-header">Programming Languages:</h4>
            <ul className="ib-tag-list">
              <li> C </li>
              <li> C++ </li>
              <li> Java </li>
              <li> Python </li>
              <li> HTML/CSS/JS </li>
              <li> NodeJS </li>
              <li> PHP </li>
              <li> Visual Basic </li>
              <li> C# </li>
              <li> x86 Assembly </li>
              <li> Bash </li>
            </ul>
          </div>
          
          <div>
            <h4 className="ib-tag-list-header">Front-end Frameworks:</h4>
            <ul className="ib-tag-list">
              <li> Vue.js </li>
              <li> React </li>
              <li> Jinja (Flask) </li>
              <li> Mustache </li>
            </ul>
          </div>
          
          <div>
            <h4 className="ib-tag-list-header">Databases:</h4>
            <ul className="ib-tag-list">
              <li> MS SQL (T-SQL) </li>
              <li> MySQL </li>
              <li> SQLite </li>
            </ul>
          </div>
          
          <div>
            <h4 className="ib-tag-list-header">Operating Systems:</h4>
            <ul className="ib-tag-list">
              <li> Windows </li>
              <li> Linux (Debian, Ubuntu, Kali) </li>
              <li> CiscoIOS </li>
            </ul>
          </div>
          
          <div>
            <h4 className="ib-tag-list-header">Other Technologies:</h4>
            <ul className="ib-tag-list">
              <li> GCP and Azure Basics </li>
              <li> Git </li>
              <li> Docker </li>
              <li> PowerBI </li>
              <li> SSRS </li>
              <li> Microsoft Office </li>
              <li> Google Docs Suite </li>
            </ul>
          </div>
        </div>
        
        <div className="ib-card" id="education">
          <h3 className="section-header"> Education </h3>
          <div className="ib-tab-container ib-tab-container-hor">
            <div className="ib-tabs ib-tabs-hor ib-light">
              <button className="active" data-tab="CSUF">BS &mdash; CS</button>
              <button data-tab="Troy"> HS </button>
            </div>
            <div className="ib-tab-pane">
              <div className="tab-content active" data-tab-content="CSUF"> 
                <div className="tab-section">
                  <h4 className="sec-header"> California State University, Fullerton <span className="label">&mdash; Fullerton, CA</span></h4>
                  <h5 className="sec-right"> '19 Fall - '22 Spring </h5>
                  <h5 className="sec-subheader">
                    B.S. <span className="label"> in </span> Computer Science
                    <span className="label"> &mdash; Graduated </span> Magna Cum Laude
                  </h5>
                  <h5 className="sec-subheader"> GPA: 3.89 </h5>
                  <ul className="ib-bullets">
                    <li> Dean's List ['19 Fall - '21 Fall], Graduated Magna Cum Laude </li>
                    <li> Member of the Phi Kappa Phi Honors Society ('20 Apr - '22 Mar) </li>
                    <li> CPTC Team Competitor (202), CCDC Team Captain (2021 Season) </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content" data-tab-content="Troy"> 
                <div className="tab-section"> 
                  <h4 className="sec-header">Troy High School <span className="label">&mdash; Fullerton, CA</span></h4>
                  <h5 className="sec-right"> 2015-2019 </h5>
                  <ul className="ib-bullets">
                    <li> National AP Scholar &mdash; "Granted to students in the United States who receive an average score of at least 4 on all AP Exams taken, and scores of 4 or higher on eight or more of these exams." </li>
                    <li>Principal's Honor Roll</li>
                    <li>California Scholarship Federation (CSF) Sealbearer</li>
                    <li>Golden State Seal Merit Diploma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactFormComponent />
      </div>
    </div>);
  }
}