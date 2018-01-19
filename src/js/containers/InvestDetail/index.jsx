import React ,{Component} from 'react'
import { Link } from 'react-router'
import './index.scss'
import {
  InvestDetailTitle,
  ProductDetails,
  PlanProgress,
  Safety,
  ProductDescription
} from '../../components'
export default class InvestDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShow:false
    }
  }
  show() {
    this.setState({
      isShow:true
    })
  }
  hide() {
    this.setState({
      isShow:false
    })
  }

  render() {
    const overFlow = this.state.isShow==true ? "hidden" : ""
    const display = this.state.isShow == true ? "block" : "none"
    return(
      <div style={{overflowY:overFlow}}>
        <InvestDetailTitle url='home'/>
        <ProductDetails/>
        <PlanProgress/>
        <Safety/>
        <ProductDescription/>
        <div className='investBtn' onClick={this.show.bind(this)}>马上投资</div>
        <div className='popup' style={{display:display}}>
          <div className='mask'>
            <div className='mask_title'>投资<i onClick={this.hide.bind(this)}></i></div>
            <div className='popContent'>
              <p className='hope'>
                <span>期望年化收益率<i>7.00%</i></span>
                <span>锁定出借期<i>30天</i></span>
              </p>
              <p className='residue'>投资可用余额:<i>3666</i>元</p>
              <div className='add'>
                <input type="button" className='minus'/>
                <input type="tel" className='num' placeholder='500'/>
                <input type="button" className='add'/>
              </div>
              <p className='expected'>预期收益:<i>150</i>元 (同期银行活期收益为1.3元)</p>
              <Link className='chooseSpot' to=''>
                  <div className='icon'></div>
                  <p>选择返现券</p>
                  <div className='goSpot'></div>
              </Link>
              <div className='agreement'>
                <span className='active'></span>
                <span>
                  我已阅读并同意
                  <Link to=''>《现金贷出借人服务协议》、</Link>
                  <Link to=''>委托信而匹配富借款人</Link>
                </span>
              </div>
            </div>
            <div className='investBtn1'>马上加入</div>
          </div>
        </div>
      </div>
    )
  }
}