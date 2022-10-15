import React from 'react';
import {Routes as Switch, Route, Link} from "react-router-dom";

import DomHelper from '@/util/domHelper';
import styles from '@/css/components/DocsComponent.module.css'
import HamburgerIcon from '@/icons/HamburgerIcon';


function TOCLinkSubsection(props){
  let ctr = 1;
  function onLinkClick(){
    DomHelper.scrollToTop();
    props.onLinkClick && props.onLinkClick();
  }

  return (<React.Fragment>
    <ol>
      {props.sections.map((e)=>{
        return (e.sections)
          ? (<React.Fragment key={'frag'+e.route}>
              <li key={e.route}> <span className={styles.navCtr}>{props.preCtr}{ctr}.</span> 
                <Link to={e.route} onClick={onLinkClick}>{e.label || ''}</Link>
              </li>
              <TOCLinkSubsection preCtr={(props.preCtr || '')+(ctr++)+'.'} sections={e.sections} onLinkClick={props.onLinkClick}/>
            </React.Fragment>)
          : (<li key={e.route}> <span className={styles.navCtr}>{props.preCtr}{ctr++}.</span>
             <Link to={e.route} onClick={onLinkClick}>{e.label || ''}</Link>
            </li>);
      })}
    </ol>
  </React.Fragment>);
}

function TOCLink(props){
  return (<React.Fragment>
    {props.title && <h2 className={styles.title}>{props.title}</h2>}
    <div className={styles.navBarBody}>
      <TOCLinkSubsection sections={props.sections} onLinkClick={props.onLinkClick}/>
    </div>
    <div className={styles.navBarFooter}></div>
  </React.Fragment>);
}



function TOCSubcontent(sections, preCtr=''){
  let ctr = 1;
  return (<React.Fragment>
      {sections.map((e)=>{
        return (e.sections)
          ? (<React.Fragment key={'frag'+e.route}>
              <Route key={'rt_' + (e.path || e.route)} path={e.path || e.route} element={React.createElement(e.component, {ctr: (preCtr)+(ctr)+'.'})} />
              {TOCSubcontent(e.sections, preCtr+(ctr++)+'.')}
            </React.Fragment>)
          : (<Route key={'rt_' + (e.path || e.route)} path={e.path || e.route} element={React.createElement(e.component, {ctr: (preCtr)+(ctr++)+'.'})} />);
      })}
  </React.Fragment>);
}

function TOCContent(props){
  return (<React.Fragment>
    <Switch>
      {TOCSubcontent(props.sections)}
    </Switch>
  </React.Fragment>);
}


export default class DocsComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showTOC: true
    };
  }

  toggleTOCVisibility(){
    this.setState({showTOC: !this.state.showTOC});
  }

  render(){
    if(this.props.sections){
      return (<div className={styles.docsPane}>
        <div className={styles.navbar +  (this.state.showTOC ? ` ${styles.show}` : '')}>
          <HamburgerIcon sz={32} padding={6} gap={4}
            style={{width: '32px', height: '32px', position: 'absolute', right: '-34px', }} 
            onClick={()=>{this.toggleTOCVisibility()}}/>
          <TOCLink sections={this.props.sections} title={this.props.title} onLinkClick={/*()=>{this.toggleTOCVisibility()}*/null}/>
        </div>
        <div className={styles.content + (this.state.showTOC ? ` ${styles.show}` : '')}>
          <TOCContent sections={this.props.sections}/>
        </div>
      </div> );
    }else if(this.props.component){
      return (<div className={styles.docsPane}>
        <div className={styles.content}>
          {this.props.component}
        </div>
      </div> );
    }else{
      return (<div></div>);
    }
  }
}