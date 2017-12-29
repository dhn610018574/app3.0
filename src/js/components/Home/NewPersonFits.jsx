import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class NewPersonFits extends Component {
  render() {
    return(
      <div className='newPersonFits'>
        <h4>新手福利</h4>
        <Link to='#'><img src="../../images/ic_home_help.png" alt="" className='home_help'/></Link>
        <div className='fits'>
          <div>
            <div>1</div>
            <p>注册送</p>
            <p>9888元体验金</p>
          </div>
          <div>
            <div>2</div>
            <p>开户送</p>
            <p>2000积分</p>
          </div>
          <div>
            <div>3</div>
            <p>投资送</p>
            <p>100元优惠券</p>
          </div>
        </div>
        <Link to='#' className='regBtn'>立即注册</Link>
      </div>
    )
  }
}