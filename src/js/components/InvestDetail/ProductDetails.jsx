import React, { Component } from 'react'
import { Link } from 'react-router'
import './index.scss'
export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let data = Object.assign({}, this.props.detailData);
    let float = parseFloat(data.finishAmount) / parseFloat(data.planAmount)
    let reset = data.planAmount - data.finishAmount
    if (!float) {
      float = 0
    }
    let width = float + "%"
    return (
      <div className='productDetails'>
        <div className='timeAndTips'>
          <h6 className='closeTime'>截止日期：{Common.formatDate(data.closeTime, "-").YMD}</h6>
          <div className='tips'>
            {
              data.tipsStart && <span>{data.tipsStart}</span>
            }
            {
              data.tipsEnd && <span>{data.tipsEnd}</span>
            }
          </div>
        </div>
        <p className='hopeYearRate'><i className='left'></i>期望年化收益率<i className='right'></i></p>
        <p className='yearRate'>{data.yInterestRate}<e>%</e></p>
        <div className='investLimit'>
          <div>
            <p>起投金额</p>
            <p>{data.lowestAmount}元</p>
          </div>
          <div>
            <p>锁定出借期</p>
            <p>{data.freezePeriod}天</p>
          </div>
          <div>
            <p>计划金额</p>
            <p>{data.planAmount / 10000}万元</p>
          </div>

        </div>
        <div className='progress'>
          <p className='speed'>
            <span>进度 {float}%</span>
            <span>剩余可投{reset / 10000}万元</span>
          </p>
          <div className='progressBar'>
            <div className='finished' style={{ width: width }}></div>
          </div>
        </div>
        <Link to='investLog' className='investNum'>已有<i>{this.props.count}</i>人投资<span></span></Link>
      </div>
    )
  }
}