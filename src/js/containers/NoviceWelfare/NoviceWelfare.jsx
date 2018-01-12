import React ,{Component} from 'react'
import './index.scss'
export default class NoviceWelfare extends Component {
  render() {
    return(
      <div>
        <div className="banner"></div>
        <div className='fit_flow'>
          <div className='flow1'>
            <div className='flow_name'>完成注册</div>
            <p className='des'>送<i>100</i>元红包，适用于全部方案</p>
            <div className='flow_hb'>
              <div className='hb_je'>
                <p><e>80</e>元</p>
                <p>满5,000元返现</p>
              </div>
              <div className='hb_je'>
                <p><e>80</e>元</p>
                <p>满5,000元返现</p>
              </div>
            </div>
          </div>
          <div className='flow1'>
            <div className='flow_name'>完成注册</div>
            <p className='des'>送<i>100</i>元红包，适用于全部方案</p>
            <div className='flow_hb'>
              <div className='hb_je'>
                <p><e>80</e>元</p>
                <p>满5,000元返现</p>
              </div>
              <div className='hb_je'>
                <p><e>80</e>元</p>
                <p>满5,000元返现</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}