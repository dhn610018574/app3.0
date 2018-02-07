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
    const uuid = 'e049889d4db04bcb83514035b8cea547'
    const params = {
      "uuid":"0087c61e6deba6eb56de4b73fb381f06",
    }
    const headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "version-code":"44",
      "packageName":"com.crfchina.crfpurse",
      "mobileOs":"IOS",
      "deviceno":"09AEF632-3F7D-4424-8843-8FA37A2B70CA",
      "clientId":"13165ffa4e3583190d8",
      "customerUid":"482436",
      "mchntNo":"CRFCHINA_FINANCIAL_WEBP2P",
      "accessToken":"39c6d5195474acf7144edff365dbef337609e10768dedaab5ddcaf1c43b353112afa35d79d0d456dc96930c91f9d2e5e229a6ed77c908b790af479708d59afafbb530d682bada44c7bfb4319f6f3dd7934f359666ac9ee6c5f3d614a30d5348fbc93442367c1038690a51b415f34573612513c36e44f440b4858434d9b3bba126b96914888915dfb1713d5b1f7ddec299c92348543c30bd857dbe92d1b7c4ab05313e752f5a8b732d9d1b010d9dbd603d3b5409f243245b5c1d621e3c4b6a5f1b0c46a365b9ae4f9b8493b95586c1480e51d141674bd05fbef69c4075c794f6727bbc7b2c12b0df8bbd7393644939b1c3370964d1295a4285ed4a92ba37ce593edfe73df760a0d0663a1c6ffcc1b464f28920aa4f2104df7aeb82ae61a0a8cec6d2e6ddb10dd3c597c89797fde60a758a5e948196c51f8e691c2c817b104d0c8b0a376f5ae5dfcf45cc69130cf2114f5"  
    }
    // const ncpProductPath = `${CONFIGS.investmentPath}/product/newlist`
    // const ncpProductPath = `${CONFIGS.investmentPath}/userinfo/${uuid}`
    const ncpProductPath = `${CONFIGS.investmentPath}/product/list`
    try{
      // const fetchPromise = CRFFetch.Post(ncpProductPath,(params),headers)
      const fetchPromise = CRFFetch.Post(ncpProductPath)
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