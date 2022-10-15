import React from 'react';
import {Routes as Switch, Route} from "react-router-dom";

const DocsLandingPage = React.lazy(()=>import('@/pages/docs/DocsLandingPage.js'));
const DS1Switch = React.lazy(()=>import('@/pages/docs/DS/DS1Switch.js'));
const FinanceSwitch = React.lazy(()=>import('@/pages/docs/Finance/FinanceSwitch.js'));
const PageNotFoundPage = React.lazy(()=>import('@/pages/errors/PageNotFound.js'));
const SWESwitch = React.lazy(()=>import('@/pages/docs/SWE/SWESwitch.js'));


export default class DocsSwitch extends React.Component {
	render(){
    return (<Switch>
      <Route path="/" element={<DocsLandingPage />} />
      <Route path="/ds/1/*" element={<DS1Switch />} />
      <Route path="/swe/*" element={<SWESwitch />} />
      <Route path="/finance/*" element={<FinanceSwitch />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Switch>);
  }
}