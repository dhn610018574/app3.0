import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class Guide1 extends Component {
  render() {
    return(
      <div className='items2'>
        <div className='item'><Link to='#'><img src="../../images/ptjs_menu.png" alt=""/><div><p>邀请有礼</p><p>现金红包</p></div></Link></div>
        <div className='item'><Link to='#'><img src="../../images/riskgg_menu.png" alt=""/><div><p>投资返现</p><p>收益看的见</p></div></Link></div>
      </div>
    )
  }
}