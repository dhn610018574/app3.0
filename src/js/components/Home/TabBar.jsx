import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class TabBar extends Component {
  render(){
    return(
      <div className='tabBar'>
        <Link to='AppHome'><div className='tab'><img src="../../images/index.png" alt=""/><p>首页</p></div></Link>
        <Link to='investDetail'><div className='tab'><img src="../../images/invest.png" alt=""/><p>投资</p></div></Link>
        <Link to='find'><div className='tab'><img src="../../images/find.png" alt=""/><p>发现</p></div></Link>
        <Link to='my'><div className='tab'><img src="../../images/my.png" alt=""/><p>我的</p></div></Link>
      </div>
    )
  }
}