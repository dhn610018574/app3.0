import React ,{Component} from 'react'
import {Link} from 'react-router'
import './index.scss'
export default class ProductDescription extends Component {
  render(){
    return(
      <div className='description'>
        <ul>
          <li><span></span>产品详情<Link to=''></Link></li>
          <li><span></span>产品特色<Link to=''></Link></li>
          <li><span></span>常见问题<Link to=''></Link></li>
        </ul>
        <p>--资金由上海银行存管--</p>
        <div className='investBtn'>马上投资</div>
      </div>
    )
  }
}