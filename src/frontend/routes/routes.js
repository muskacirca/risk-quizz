import React from 'react';
import { IndexRoute, Route } from 'react-router';

import ViewerQuery from '../queries/ViewerQueries'

import MainApp from '../components/MainApp'
import Map from '../components/Map'
import Profile from '../components/Profile'

export default  <Route path="/" component={MainApp} queries={ViewerQuery}>
                    <IndexRoute component={MainApp} queries={ViewerQuery}/>
                    <Route path="map" component={Map} queries={ViewerQuery} />
                    <Route path="profile" component={Profile} queries={ViewerQuery} />
                </Route>