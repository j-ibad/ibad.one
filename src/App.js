import React, {Suspense} from 'react';
import {BrowserRouter as Router, Routes as Switch, Route, Link} from "react-router-dom";

import ENV from '@/util/env.js';
import styles from '@/css/app.module.css'
import HamburgerIcon from '@/icons/HamburgerIcon';
import DomHelper from '@/util/domHelper';
const PageNotFoundPage = React.lazy(()=>import('@/pages/errors/PageNotFound.js'));
const ContactFormComponent = React.lazy(()=>import('@/component/ContactFormComponent.js'));
const HomePage = React.lazy(()=>import('@/pages/Home.js'));
const JoshIbadPage = React.lazy(()=>import('@/pages/about/JoshIbad.js'));
const SoftwareLandingPage = React.lazy(()=>import('@/pages/soft/SoftwareLandingPage.js'));
const DocsSwitch = React.lazy(()=>import('@/pages/docs/DocsSwitch.js'));
const ToolsSwitch = React.lazy(()=>import('@/pages/tools/ToolsSwitch.js'));


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSidebar: false
    };
  }

  toggleSidebarVisibility(){
    this.setState({showSidebar: !this.state.showSidebar});
  }

  renderNavLinks(subdomain){
    return (<React.Fragment>
      <li>
        {(subdomain === 'josh')
          ? (<Link to="/" className='active' onClick={DomHelper.scrollToTop}>About</Link>)
          : (<a href={`${ENV.url.prot}://josh.${ENV.url.root}`}>About</a>)}
      </li>
      <li>
        {(subdomain === 'tools')
          ? (<Link to="/" className='active' onClick={DomHelper.scrollToTop}>Tools</Link>)
          : (<a href={`${ENV.url.prot}://tools.${ENV.url.root}`}>Tools</a>)}
      </li>
      <li>
        {(subdomain === 'soft')
          ? (<Link to="/" className='active' onClick={DomHelper.scrollToTop}>Software</Link>)
          : (<a href={`${ENV.url.prot}://soft.${ENV.url.root}`}>Software</a>)}
      </li>
      <li>
        {(subdomain === 'docs')
          ? (<Link to="/" className='active' onClick={DomHelper.scrollToTop}>Docs</Link>)
          : (<a href={`${ENV.url.prot}://docs.${ENV.url.root}`}>Docs</a>)}
      </li>
    </React.Fragment>);
  }

  render(){
    const subdomain = this.props.subdomain;
    return (<React.Fragment>
      <nav className={`${styles.mainNavBar} ib-tabs ib-tabs-hor ib-solid`}><ul>
        <li>
          {(subdomain === 'www')
            ? (<Link to="/" className={`${styles.logo} logo`}
                style={{'paddingLeft': '32px', 'paddingRight': '32px'}}
                onClick={DomHelper.scrollToTop}>
              <img src="/img/logo192.png" alt="ibad.one logo" width="40" height="40"/>
              <h1> ibad.one </h1>
            </Link>)
            : (<a href={`${ENV.url.prot}://${ENV.url.root}`} className={`${styles.logo} logo`} style={{'paddingLeft': '32px', 'paddingRight': '32px'}}>
              <img src="/img/logo192.png" alt="ibad.one logo" width="40" height="40"/>
              <h1> ibad.one </h1>
          </a>)}
        </li>
        {this.renderNavLinks(subdomain)}
      </ul></nav>
      <div>
        
      </div>
      <div className={styles.mainNavBarMobile}>
        <div className={styles.mainNavBarMobileHeader}>
          <HamburgerIcon 
            style={{position: 'absolute', right: '6px', top: '6px'}} 
            onClick={()=>{this.toggleSidebarVisibility()}}/>
        </div>
        <div className={`${styles.mainNavBarMobileBody} ${this.state.showSidebar ? styles.show : ''}`}>
          <ul>
            {this.renderNavLinks(subdomain)}
          </ul>
          <div className={styles.mainNavBarMobileFooter}></div>
        </div>
      </div>
    </React.Fragment>);
  }
}


function Footer(){
  return (<footer>
    <p className={styles.copyright}>Copyright &copy; {(new Date().getFullYear()).toString()} Josh Ibad, 
      <span className={styles.subtext}> creator of ibad.one. </span>
      All Rights Reserved.
    </p>
  </footer>);
}


/* TODO: Implement loader with animation of website logo */


export default class App extends React.Component {
	constructor(props){
		super(props);
    this.state = {}
  }

  subdomain(){
    var host = (window.location.host || '').split('.');
    return (host.length > 2) ? host[0].toLowerCase() : 'www';
  }

  renderRoutes(subdomain){
    switch(subdomain){
      case 'docs':
        return (<React.Fragment>
          <Route path="*" element={<DocsSwitch />} />
        </React.Fragment>);
      case 'soft':
        return (<React.Fragment>
          <Route path="/" element={<SoftwareLandingPage />} />
        </React.Fragment>);
      case 'tools':
        return (<React.Fragment>
          <Route path="*" element={<ToolsSwitch/>} />
        </React.Fragment>);
      case 'josh':
        return (<React.Fragment>
          <Route path="/" element={<JoshIbadPage />} />
        </React.Fragment>);
      case 'www':
        return (<React.Fragment>
          <Route path="/" element={<HomePage />} />
        </React.Fragment>);
      default:
        return (<React.Fragment></React.Fragment>)
    }
  }

  render() {
    const subdomain = this.subdomain();
    return (
      <div className="App">
        <Router>
          <NavBar subdomain={subdomain}/>
          <main>
            <Suspense fallback={null}>
              <Switch>
                {this.renderRoutes(subdomain)}
                <Route path="/contactUs" element={<ContactFormComponent singlePage={true}/>} />
                <Route path="*" element={<PageNotFoundPage />} />
              </Switch>
            </Suspense>
          </main>
        </Router>
        <Footer />
      </div>
    );
  }
}