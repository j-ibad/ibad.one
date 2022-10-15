import React from 'react';
import {Routes as Switch, Route} from "react-router-dom";

import DocsComponent from '@/component/DocsComponent.js';

const FinanceLinks = React.lazy(()=>import('@/pages/docs/Finance/FinanceLinks.js'));
const PageNotFoundPage = React.lazy(()=>import('@/pages/errors/PageNotFound.js'));



export default class FinanceSwitch extends React.Component {
	render(){
    return (<Switch>
      <Route path="links" element={<DocsComponent component={<FinanceLinks />} title={'Finance Links'}/>} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Switch>);
  }
}