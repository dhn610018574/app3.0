import React ,{Component} from 'react'
import {Link} from 'react-router'
import './index.scss'
export default class ProductDescription extends Component {
  render(){
    return(
      <div className='description'>
        <ul>
          <li><Link to='productDetail'><span></span>方案详情<e></e></Link></li>
          <li><Link to='productFeatures'><span></span>方案特色<e></e></Link></li>
          <li><Link to='commonProblem'><span></span>常见问题<e></e></Link></li>
        </ul>
        <p>--资金由上海银行存管--</p>
        <div className='investBtn'>马上投资</div>
      </div>
    )
  }
}