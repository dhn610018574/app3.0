import React ,{Component} from 'react'
import {Router,Route,IndexRoute, Link} from 'react-router'
import {
  App
}  from './components'

export default (
  <Router path='/' component={App}>
    <Route path='home' component={App}></Route>

  </Router>
)
