import React from 'react';
import {Routes as Switch, Route} from "react-router-dom";

import DocsComponent from '@/component/DocsComponent.js';

const OOPConcepts = React.lazy(()=>import('@/pages/docs/SWE/Design/OOPConcepts.js'));
const PageNotFoundPage = React.lazy(()=>import('@/pages/errors/PageNotFound.js'));



export default class SWESwitch extends React.Component {
	render(){
    return (<Switch>
      <Route path="oop" element={<DocsComponent component={<OOPConcepts />} title={'Object Oriented Programming'}/>} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Switch>);
  }
}