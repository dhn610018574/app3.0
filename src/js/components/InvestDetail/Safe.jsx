import React ,{Component} from 'react'
import './index.scss'
export default class Safe extends Component {
  render(){
    return(
      <div className="safe">
        <a href="javascript:;">
          <div className='safe_title'>
            <span>安全等级参考</span>
            <img src="../../images/star.png" alt=""/>
            <img src="../../images/star.png" alt=""/>
            <img src="../../images/star.png" alt=""/>
            <img src="../../images/star.png" alt=""/>
            <img src="../../images/stardec.png" alt=""/>
          </div>
          <p>本金、收益可能会有一定幅度的波动</p>
        </a>
        <a href="javascript:;">
          <div className='safe_title'>
            <span>投资人资格</span>
            <img src="../../images/more.png" alt="" className='more' />
          </div>
          <p>风险承受能力“平衡型”及以上</p>
        </a>
      </div>
    )
  }
}