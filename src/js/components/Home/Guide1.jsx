import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class Guide1 extends Component {
  render() {
    return(
      <div className='items1'>
        <div><Link to='#'><img src="../../images/ptjs_menu.png" alt=""/><p>平台介绍</p></Link></div>
        <div><Link to='#'><img src="../../images/riskgg_menu.png" alt=""/><p>风控宣传</p></Link></div>
        <div><Link to='#'><img src="../../images/zjcg_menu.png" alt=""/><p>资金存管</p></Link></div>
      </div>
    )
  }
}