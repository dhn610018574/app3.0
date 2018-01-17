import React ,{Component} from 'react'
import { Link } from 'react-router'
import './index.scss'
import {
  InvestDetailTitle,
  ProductDetails,
  PlanProgress,
  Safety,
  ProductDescription,
  InvestPopup
} from '../../components'
export default class InvestDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShow:false
    }
  }
  handleClick() {
    this.setState({
      isShow:true
    })
  }
  render() {
    const overFlow = this.state.isShow==true ? "hidden" : ""
    return(
      <div style={{overflowY:overFlow}}>
        <InvestDetailTitle />
        <ProductDetails/>
        <PlanProgress/>
        <Safety/>
        <ProductDescription/>
        <div className='investBtn' onClick={this.handleClick.bind(this)}>马上投资</div>
        {
          this.state.isShow && <InvestPopup show={this.state.isShow}/>
        }
      </div>
    )
  }
}