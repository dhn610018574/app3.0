import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class Bottom extends Component {
  render(){
    return(
      <div className='bottom'>
        <div><img src="../../images/down_pic1.png" alt=""/></div>
        <div><img src="../../images/down_pic2.png" alt=""/></div>
        <div><img src="../../images/down_pic3.png" alt=""/></div>
      </div>
    )
  }
}