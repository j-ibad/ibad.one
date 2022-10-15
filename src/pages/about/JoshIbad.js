import React, {Fragment} from 'react';
import {Helmet} from "react-helmet-async";

import ENV from '@/util/env.js'
import ContactFormComponent from '@/component/ContactFormComponent';
import Tab, {TabContent, TabSection} from '@/component/Tab';
import TagList from '@/component/TagList';
import CardGrid, { Card } from '@/component/CardGrid';


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
            <p> Today, I'm lucky to be working as a full stack software engineer at <a className="ib-link-light" href="https://paratusllc.org/">Paratus LLC</a>. Here, I develop & maintain in-house web apps aimed at supporting & streamlining the company's workflow. I also liaise with high-level executives regularly to discuss projects or fullfil requests. </p>
            <p> I'm currently looking for ways to grow and advance in the field, actively working on personal projects and studying up on technologies & best practices.</p>
          </div>
        </div>
	
        <div className="ib-card ib-none" id="experience">
          <h3 className="section-header"> Professional Experience</h3>
          <Tab ver>
            <TabContent label="Paratus">
              <TabSection header={"Full Stack Software Engineer"} right={"'21 Aug - Present"}
                subheader={"Paratus Partners LLC"}>
                <ul className="ib-bullets">
                  <li> Developing and maintaining full-stack web applications through the full agile software lifecycle from requirements engineering through to successful deployment. </li>
                  <li> Liaising with high level executives and other stakeholders regularly to communicate project requirements and design. </li>
                  {/*<!--li> Contributed to the formalization of a software development process with structured iteration plans, requirements analysis, and design documentation. </li-->*/}
                </ul>
              </TabSection>
              <TabSection header={"Software Engineering Intern"} right={"'21 Jun - '21 Aug"}
                subheader={<Fragment>Paratus Partners LLC</Fragment>}>
                <ul className="ib-bullets">
                  <li> Designed and developed full-stack web components, APIs, and database tables. </li>
                  <li> Optimized and refactored core applications by cleaning-up the codebase, removing redundancies, and analyzing traffic bottlenecks. </li>
                  <li> Created Business Intelligence reports used regularly by high level executives to monitor the business's operational performance and cash flow. Was able to detect various issues such as client payment issues and process bottlenecks. </li>
                </ul>
              </TabSection>
            </TabContent>
          </Tab>
        </div>
	
        <div className="ib-card" id="projects">
          <h3 className="section-header"> Projects </h3>
          {/*<!--p> Insert summary of the projects section </p-->*/}
          <CardGrid>
            <Card link={`${ENV.url.prot}://${ENV.url.root}`} title="ibad.one"
              desc="This website. Hosts this portfolio as well as various valuable services, tools, and software products. Work in progress"/>
            <Card link="https://havenchat.ibad.one" title="HavenChat"
              desc="A Secure Live Chatting web app. Uses AES-256-CBC w/ secure key distribution via RSA, and RSA / DSA digital signatures. Built in React, Express, NodeJS, & MySQL."/>
          </CardGrid>
          <div className="center-container segment-link" style={{marginTop: '2em', marginBottom: '0.25em'}}>
            <a className="ib-link-btn" href={`${ENV.url.prot}://soft.${ENV.url.root}`}>See all</a> 
          </div>
        </div>
        
        <div className="ib-card ib-none" id="other-experiences">
          <h3 className="section-header"> Other Experiences: Industry Projects & Competitions</h3>
          <Tab>
            <TabContent label="Industry Projects">
              <TabSection header={"Industry Market Trend Analyzer"} right={"'21 Mar - '21 May"} 
                subheader={<Fragment>Tiblio Inc. <span className="label">sponsored project @</span> CSUF</Fragment>} >
                <ul className="ib-bullets">
                  <li> Acted as <b>Team Lead</b>, developed parts of both front end and back end of a Web-based desktop application to collect and analyze stock data through the Yahoo Finance API, to display trends and correlations in market industries. </li>
                  <li> Used NodeJS, ElectronJS, ExpressJS, Yahoo Finance API, and SQLite. </li>
                </ul>
              </TabSection>
              <TabSection header={"Security Operations Center (SOC) in a Box"} right={"'21 Oct - '21 May"}
                subheader={<Fragment>Disney <span className="label">sponsored project @</span> CSUF</Fragment>}>
                <ul className="ib-bullets">
                  <li> Aided in planning and implementing a student prototype of a standalone detection and SIM mechanism for investigations through the setup of a Docker environment to emulate a Security Operations Center. </li>
                </ul>
              </TabSection>
            </TabContent>
            <TabContent label="Competitions">
              <TabSection header={"'22 Winter Student Cluster Invitational"} right={"'22 Winter"}>
                <ul className="ib-bullets">
                  <li> Ran parallel / distributed payload such as benchmarks and CFD applications on NASA and HPE supercomputers. </li>
                  <li> Optimized distributed applications through profiling and the usage of compiler flags and task configurations. </li>
                </ul>
              </TabSection>
              <TabSection header={"National Finalist @ Collegiate Penetration Testing Competition (CPTC)"} right={"'20 Fall"}
                subheader={<Fragment><span className="label">Role:</span> Risk & Compliance Specialist</Fragment>}>
                <ul className="ib-bullets">
                  <li> Coordinated the creation of the penetration testing report written as a result of the security assessment performed. </li>
                  <li> Aided the penetration testing team in finding vulnerabilities in Windows machines and front-facing Web interfaces. </li>
                </ul>
              </TabSection>
              <TabSection header={"National Finalist @ Cyberpatriots XI Competition"} right={"'18 Fall - '19 Spring"}
                subheader={<Fragment><span className="label">Role:</span> Networking Specialist</Fragment>}>
                <ul>
                  <li> Troubleshooted routing and VPN misconfigurations. Configured logging, authentication, and network switching. </li>
                  <li> Supported in Windows System Administration in simple workstation configuration and security hardening. </li>
                </ul>
              </TabSection>
            </TabContent>
          </Tab>
        </div>
        
        <div className="ib-card ib-none" id="skills">
          <h3 className="section-header"> Skills & Technologies</h3>
          <TagList header="Programming Languages:" tags={['C', 'C++', 'Java', 'Python', 'HTML/CSS/JS', 'NodeJS', 'PHP', 'Visual Basic', 'C#', 'x86 Assembly', 'Bash']}/>
          <TagList header="Front-end Frameworks:" tags={['Vue.js', 'React', 'Jinja (Flask)', 'Mustache']}/>
          <TagList header="Databases:" tags={['MS SQL (T-SQL)', 'MySQL', 'SQLite']}/>
          <TagList header="Operating Systems:" tags={['Windows', 'Linux (Debian, Ubuntu, Kali)', 'CiscoIOS']}/>
          <TagList header="Other Technologies:" tags={['GCP and Azure Basics', 'Git', 'Docker', 'PowerBI', 'SSRS', 'Microsoft Office', 'Google Docs Suite']}/>
        </div>
        
        <div className="ib-card" id="education">
          <h3 className="section-header"> Education </h3>
          <Tab>
            <TabContent label="BS &mdash; CS">
              <TabSection header={<Fragment>California State University, Fullerton <span className="label">&mdash; Fullerton, CA</span></Fragment>}
                right={"'19 Fall - '22 Spring"}
                subheaders={[
                  (<Fragment>
                    B.S. <span className="label"> in </span> Computer Science
                    <span className="label"> &mdash; Graduated </span> Magna Cum Laude
                  </Fragment>),
                  (<Fragment> GPA: 3.89 </Fragment>),
                ]}>
                <ul className="ib-bullets">
                  <li> Dean's List ['19 Fall - '21 Fall], Graduated Magna Cum Laude </li>
                  <li> Member of the Phi Kappa Phi Honors Society ('20 Apr - '22 Mar) </li>
                  <li> CPTC Team Competitor (202), CCDC Team Captain (2021 Season) </li>
                </ul>
              </TabSection>
            </TabContent>
            <TabContent label="HS">
              <TabSection header={<Fragment>Troy High School <span className="label">&mdash; Fullerton, CA</span></Fragment>} right={"2015-2019"}>
                <ul className="ib-bullets">
                  <li> National AP Scholar &mdash; "Granted to students in the United States who receive an average score of at least 4 on all AP Exams taken, and scores of 4 or higher on eight or more of these exams." </li>
                  <li>Principal's Honor Roll</li>
                  <li>California Scholarship Federation (CSF) Sealbearer</li>
                  <li>Golden State Seal Merit Diploma</li>
                </ul>
              </TabSection>
            </TabContent>
          </Tab>
        </div>

        <ContactFormComponent />
      </div>
    </div>);
  }
}