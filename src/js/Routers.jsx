import React ,{Component} from 'react'
import {Router,Route,IndexRoute, Link} from 'react-router'
import {
  App,
  Banner
}  from './components'

export default (
  <Router path='/'>
    <IndexRoute component={App}></IndexRoute>
    <Route path='/home' component={Banner}></Route>

  </Router>
)
