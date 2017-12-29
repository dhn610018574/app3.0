import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile'
import './index.scss'
export default class Banner extends Component {
  render(){
    return(
      <div className='banner'>
        <ul>
          <li>
            <Link to='#'><img src="../../../images/banner_1.png" alt=""/></Link>
          </li>
          <li>
            <Link to='#'><img src="../../../images/banner_2.png" alt=""/></Link>
          </li>
          <li>
            <Link to='#'><img src="../../../images/banner_3.png" alt=""/></Link>
          </li>
        </ul>
      </div>
    )
  }
}
