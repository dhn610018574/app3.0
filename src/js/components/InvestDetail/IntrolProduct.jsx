import React ,{Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class Safe extends Component {
  constructor(props,context) {
    super(props);
    this.state = {
      isShow:false
    }
  }
  handleProDetail(){
    browserHistory.push('userAuthority')
  }
  render(){
    return(
      <ul className='introProduct'>
        <li>
          <a href="#" onClick={this.handleProDetail.bind(this)}>
            <span>产品详情</span>
            <img src="../../images/more.png" alt=""/>
          </a>
        </li>
        <li>
          <a href="#">
            <span>产品特色</span>
            <img src="../../images/more.png" alt=""/>
          </a>               
        </li>
        <li>
          <a href="#">
            <span>常见问题</span>
            <img src="../../images/more.png" alt=""/>
          </a>        
        </li>
        <div className='foot'>
          <p>--资金由恒丰银行存管--</p>
        </div>
      </ul>
    )
  }
}