import React ,{Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class PlanProgress extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='planProgress'>
        <h4><i></i>计划进度</h4>
        <div className='planStep'>
          <div className='steps'>
            <div className='icon1'><div></div></div>
            <p>开始认购</p>
            <p>{Common.formatDate(this.props.progress.saleTime,"-").YMD}</p>
          </div>
          <div className='steps'>
            <div className='icon2'><div></div></div>
            <p>匹配债权</p>
            <p>{Common.formatDate(this.props.progress.saleTime,"-").YMD}</p>
          </div>
          <div className='steps'>
            <div className='icon3'><div></div></div>
            <p>到期结算</p>
            <p>{Common.formatDate(this.props.progress.saleTime,"-").YMD}</p>
          </div>
        </div>
      </div>
    )
  }
}