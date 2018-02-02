import React ,{Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class InvestDetailTitle extends Component {
  constructor(props){
    super(props)
    this.state={
      classNo:this.props.classNo
    }
    console.log(this.state)
  }
  goback(){
    browserHistory.push(this.props.url)
  }
  componentDidMount(){

  }
  render(){
    return(
      <div className='investDetailTitle'>
        <div className='back' onClick={this.goback.bind(this)}></div>
        <div className='product_title'>
          <p className='pro_name'>新手共盈计划3MB</p>
          <p className='prefix'>（编号：{this.state.classNo}）</p>
        </div>
        <div className='share'></div>
      </div>
    )
  }
}