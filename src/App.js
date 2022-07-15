import React, {Suspense} from 'react';
import {BrowserRouter as Router, Routes as Switch, Route, Link} from "react-router-dom";

import ENV from '@/util/env.js';
const PageNotFoundPage = React.lazy(()=>import('@/pages/errors/PageNotFound.js'));
const ContactFormComponent = React.lazy(()=>import('@/component/ContactFormComponent.js'));
const HomePage = React.lazy(()=>import('@/pages/Home.js'));
const JoshIbadPage = React.lazy(()=>import('@/pages/about/JoshIbad.js'));
const SoftwareLandingPage = React.lazy(()=>import('@/pages/soft/SoftwareLandingPage.js'));
const DocsLandingPage = React.lazy(()=>import('@/pages/docs/DocsLandingPage.js'));
const ToolsSwitch = React.lazy(()=>import('@/pages/tools/ToolsSwitch.js'));


export default class App extends React.Component {
	constructor(props){
		super(props);
    this.state = {}
  }

  subdomain(){
    var host = (window.location.host || '').split('.');
    return (host.length > 2) ? host[0].toLowerCase() : 'www';
  }

  renderRoutes(){
    switch(this.subdomain()){
      case 'docs':
        return (<React.Fragment>
          <Route path="/" element={<DocsLandingPage />}> </Route>
        </React.Fragment>);
      case 'soft':
        return (<React.Fragment>
          <Route path="/" element={<SoftwareLandingPage />}> </Route>
        </React.Fragment>);
      case 'tools':
        return (<React.Fragment>
          <Route path="*" element={<ToolsSwitch/>}> </Route>
        </React.Fragment>);
      case 'josh':
        return (<React.Fragment>
          <Route path="/" element={<JoshIbadPage />}> </Route>
        </React.Fragment>);
      case 'www':
        return (<React.Fragment>
          <Route path="/" element={<HomePage />}> </Route>
        </React.Fragment>);
    }
  }

  renderNavBar(){
    let strSubdomain = this.subdomain();
    return (<nav className="ib-topnav ib-tabs ib-tabs-hor ib-solid"> <ul>
      <li>
        {(strSubdomain === 'www')
          ? (<Link to="/" className='logo' style={{'paddingLeft': '32px', 'paddingRight': '32px'}}>
            <img src="/img/logo192.png" alt="ibad.one logo" width="40" height="40"/>
            <p> ibad.one </p>
          </Link>)
          : (<a href={`${ENV.url.prot}://${ENV.url.root}`} className='logo' style={{'paddingLeft': '32px', 'paddingRight': '32px'}}>
            <img src="/img/logo192.png" alt="ibad.one logo" width="40" height="40"/>
            <p> ibad.one </p>
        </a>)}
      </li>
      <li>
        {(strSubdomain === 'josh')
          ? (<Link to="/" className='active'>About</Link>)
          : (<a href={`${ENV.url.prot}://josh.${ENV.url.root}`}>About</a>)}
      </li>
      <li>
        {(strSubdomain === 'tools')
          ? (<Link to="/" className='active'>Tools</Link>)
          : (<a href={`${ENV.url.prot}://tools.${ENV.url.root}`}>Tools</a>)}
      </li>
      <li>
        {(strSubdomain === 'soft')
          ? (<Link to="/" className='active'>Software</Link>)
          : (<a href={`${ENV.url.prot}://soft.${ENV.url.root}`}>Software</a>)}
      </li>
      <li>
        {(strSubdomain === 'docs')
          ? (<Link to="/" className='active'>Docs</Link>)
          : (<a href={`${ENV.url.prot}://docs.${ENV.url.root}`}>Docs</a>)}
      </li>
    </ul></nav>);
  }

  render() {
    return (
      <div className="App">
        <Router>
          {this.renderNavBar()}

          <main>
            <Suspense fallback={null}>
              <Switch>
                {this.renderRoutes()}
                <Route path="/contactUs" element={<ContactFormComponent singlePage={true}/>}> </Route>
                <Route path="*" element={<PageNotFoundPage />} />
              </Switch>
            </Suspense>
          </main>
        </Router>

        <footer>
          <p className="copyright">Copyright &copy; {(new Date().getFullYear()).toString()} Josh Ibad, 
            <span className="subtext"> creator of ibad.one. </span>
            All Rights Reserved.
          </p>
        </footer>
      </div>
    );
  }
}