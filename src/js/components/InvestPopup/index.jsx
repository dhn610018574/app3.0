import React ,{Component} from 'react'
import './index.scss'
export default class InvestPopup extends Component {
  render () {
    return(
      <div className='popup'>
        <div className='mask'>
          <div className='mask_title'>投资<i></i></div>
          <div className='popContent'>
            <p className='hope'>
              <span>期望年化收益率<i>7.00%</i></span>
              <span>锁定出借期<i>30天</i></span>
            </p>
            <p className='residue'>投资可用余额:<i>3666</i>元</p>
            <div className='add'>
              <input type="button" className='minus'/>
              <input type="number" className='num' placeholder='500'/>
              <input type="button" className='add'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}