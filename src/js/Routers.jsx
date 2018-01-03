import React ,{Component} from 'react'
import {Router,Route,IndexRoute, Link} from 'react-router'
import {
  Home,
  Invest,
  Find,
  My
}  from './containers'

export default (
  <Router path='/'>
    <IndexRoute component={Home}></IndexRoute>
    <Route path='/invest' component={Invest}></Route>
    <Route path='/find' component={Find}></Route>
    <Route path='/my' component={My}></Route>

  </Router>
)
