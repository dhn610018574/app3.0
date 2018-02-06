import React, {Component} from 'react'
import { Link } from 'react-router'
import {Toast} from 'antd-mobile'
import './index.scss'
export default class NcpProduct extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  componentDidMount(){
    document.body.scrollTop = 0
    this.getInitialData()
  }
  async getInitialData() {
    const params = {
      productListType:0,
      pageSize:1000,
      pageNumber:1
    }
    const headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "version-code":"49",
      "packageName":"com.crfchina.purseTest",
      "mobileOs":"IOS",
      "deviceno":"",
      "clientId":"",
      "mchntNo":"",
      "accessToken":""
    }
    const ncpProductPath = `${CONFIGS.investmentPath}/product/newlist`
    // const ncpProductPath = `${CONFIGS.investmentPath}/product/list`
    try{
      const fetchPromise = CRFFetch.Post(ncpProductPath,JSON.stringify(params),headers)
      // const fetchPromise = CRFFetch.Post(ncpProductPath)
      const result = await fetchPromise
      if(result && !result.response){
        this.setState(result.data)
      }

    }catch(error){
      CRFFetch.handleError(error,Toast,()=>{
        if(error.status === 400) {
          error.body.then(data => {
            Toast.info(data.message)
          })
        }
      })
    }
  }
  setStatus(result) {
    this.setState(result)
  }
  render(){
    let linkUrl = "/investDetail"
    return(
      <div className='ncpProduct'>
        <ul>
        {
          this.state.lsProductType
          &&
          this.state.lsProductType.map((element,index)=>    
          element.lsProduct && 
          element.lsProduct.map((e,i)=> 
          <li key={i}>
            <Link to={{pathname:linkUrl,query:{contractPrefix:e.contractPrefix}}}>
              <div className='product-introl'>
                <div>
                {
                  e.tipsStart  && <span>{ e.tipsStart }</span>
                }
                {
                  e.tipsEnd && <span>{e.tipsEnd}</span>
                }
                  <p>{e.yInterestRate}<i>%</i></p>
                  <p>期望年化收益率</p>
                </div>
                <div>
                  <p>{e.productName}{e.isNewBie && e.isNewBie =='3' && <i>荐</i>}</p>
                  <p>
                    <span>{e.investunit/1}元起投</span>
                    <span>剩余天数{e.remainDays}天</span>
                  </p>
                </div>   
              </div>
            </Link>
          </li>
        )  
        )
        }
        </ul>
      </div>       

    )
  }
}