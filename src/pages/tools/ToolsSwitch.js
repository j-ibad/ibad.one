import React from 'react';
import {Routes as Switch, Route} from "react-router-dom";

const PageNotFoundPage = React.lazy(()=>import('@/pages/errors/PageNotFound.js'));
const ToolsLandingPage = React.lazy(()=>import('@/pages/tools/ToolsLandingPage.js'));
const ToolCSCalculator = React.lazy(()=>import('@/pages/tools/Tool_CSCalculator.js'));
const ToolSubnetCalc = React.lazy(()=>import('@/pages/tools/Tool_SubnetCalc.js'));


export default class ToolsSwitch extends React.Component {
	render(){
    return (<Switch>
      <Route path="/" element={<ToolsLandingPage />} />
      <Route path="/cs_calculator" element={<ToolCSCalculator />} />
      <Route path="/subnet_calculator" element={<ToolSubnetCalc />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Switch>);
  }
}