import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

// pages
import Home from '../pages/home.js'
import NoMatch from '../pages/404.js'

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
         <Route path="/" component={Home}>
         </Route>
         <Route path="*" component={NoMatch}/>
       </Router>
    );
  }
}

export default Routes;
