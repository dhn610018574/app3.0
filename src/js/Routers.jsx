import React ,{Component} from 'react'
import {Router,Route,IndexRoute, Link} from 'react-router'
import {
  Home
}  from './containers'

export default (
  <Router path='/'>
    <IndexRoute component={Home}></IndexRoute>
    

  </Router>
)
