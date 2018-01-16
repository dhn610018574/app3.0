import React ,{Component} from 'react'
import {Link} from 'react-router'
import './index.scss'
export default class ProductDetails extends Component {
  render(){
    return(
      <div className='productDetails'>
        <div className='timeAndTips'>
          <h6 className='closeTime'>截止日期：2017-06-20</h6>
          <div className='tips'>
            <span>新手福利</span>
            <span>高收益</span>
          </div>
        </div>
        <p className='hopeYearRate'><i className='left'></i>期望年化收益率<i className='right'></i></p>
        <p className='yearRate'>7.00<e>%</e></p>
        <div className='investLimit'>
          <div>
            <p>起投金额</p>
            <p>500元</p>
          </div>
          <div>
            <p>锁定出借期</p>
            <p>30天</p>
          </div>
          <div>
            <p>计划金额</p>
            <p>50万元</p>
          </div>

        </div>
        <div className='progress'>
          <p className='speed'>
            <span>进度 65%</span>
            <span>剩余可投20万元</span>
          </p>
          <div className='progressBar'>
            <div className='finished'></div>
          </div>
        </div>
        <Link to='investLog' className='investNum'>已有<i>53</i>人投资<span></span></Link>
      </div>
    )
  }
}