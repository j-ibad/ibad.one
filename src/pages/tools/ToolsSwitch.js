import React from 'react';
import {Routes as Switch, Route} from "react-router-dom";

import ENV from '@/util/env.js';
const PageNotFoundPage = React.lazy(()=>import('@/pages/errors/PageNotFound.js'));
const ToolsLandingPage = React.lazy(()=>import('@/pages/tools/ToolsLandingPage.js'));
const Tool_CSCalculator = React.lazy(()=>import('@/pages/tools/Tool_CSCalculator.js'));


export default class ToolsSwitch extends React.Component {
	render(){
    return (<Switch>
      <Route path="/" element={<ToolsLandingPage />}> </Route>
      <Route path="/cs_calculator" element={<Tool_CSCalculator />}> </Route>
      <Route path="*" element={<PageNotFoundPage />} />
    </Switch>);
  }
}