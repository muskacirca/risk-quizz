import React from 'react';
import { IndexRoute, Route } from 'react-router';

import ViewerQuery from '../queries/ViewerQueries'

import MainApp from '../components/MainApp'

export default  <Route path="/" component={MainApp} queries={ViewerQuery}>
                    <IndexRoute component={MainApp} queries={ViewerQuery}/>
                </Route>