import React ,{Component} from 'react'
import {Router,Route,IndexRoute, Link} from 'react-router'
import {
  Home,
  Invest,
  Find,
  My,
  AboutUs
}  from './containers'

export default (
  <Router path='/'>
    <IndexRoute component={Home}></IndexRoute>
    <Route path='/home' component={Home}></Route>
    <Route path='/invest' component={Invest}></Route>
    <Route path='/find' component={Find}></Route>
    <Route path='/my' component={My}></Route>
    <Route path='/aboutUs' component={AboutUs}></Route>
  </Router>
)
