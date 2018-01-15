import React ,{Component} from 'react'
import {Router,Route,IndexRoute, Link} from 'react-router'
import {
  Home,
  Invest,
  InvestDetail,
  Find,
  My,
  AboutUs,
  RiskManagement,
  PlatformAdvantage,
  NoviceWelfare
}  from './containers'

export default (
  <Router path='/'>
    <IndexRoute component={Home}></IndexRoute>
    <Route path='/home' component={Home}></Route>
    <Route path='/invest' component={Invest}></Route>
    <Route path='/investDetail' component={InvestDetail}></Route>
    <Route path='/find' component={Find}></Route>
    <Route path='/my' component={My}></Route>
    <Route path='/aboutUs' component={AboutUs}></Route>
    <Route path='/riskManagement' component={RiskManagement}></Route>
    <Route path='/platformAdvantage' component={PlatformAdvantage}></Route>
    <Route path='/noviceWelfare' component={NoviceWelfare}></Route>
  </Router>
)
