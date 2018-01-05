import React ,{Component} from 'react'
import {Router,Route,IndexRoute, Link} from 'react-router'
import {
  NavBar
}  from './containers'

export default (
  <Router path='/'>
    <IndexRoute component={NavBar}></IndexRoute>
  </Router>
)
