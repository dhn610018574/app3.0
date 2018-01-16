import React ,{Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class PlanProgress extends Component {
  render(){
    return(
      <div className='planProgress'>
        <h4><i></i>计划进度</h4>
        <div className='planStep'>
          <div className='steps'>
            <div className='icon1'><div></div></div>
            <p>开始认购</p>
            <p>2017-06-20</p>
          </div>
          <div className='steps'>
            <div className='icon2'><div></div></div>
            <p>匹配债权</p>
            <p>2017-06-21</p>
          </div>
          <div className='steps'>
            <div className='icon3'><div></div></div>
            <p>到期结算</p>
            <p>2017-07-21</p>
          </div>
        </div>
      </div>
    )
  }
}