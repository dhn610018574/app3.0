import React ,{Component} from 'react'
import './index.scss'
export default class YearRale extends Component {
  render(){
    return (
      <div className='rale_detail'>
        <h6 className='rale'>期望年化收益率</h6>
        <p className='yearRale'>7.00<e>%</e></p>
        <div className='list'>
          <p>起投金额</p>
          <p>500元</p>
        </div>
        <div className='list'>
          <p>锁定出借期</p>
          <p>30天</p>
        </div>
        <div className='list'>
          <p>计划金额</p>
          <p>50万元</p>
        </div>
      </div>
    )
  }
}