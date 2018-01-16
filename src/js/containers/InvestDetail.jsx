import React ,{Component} from 'react'
import { Link } from 'react-router'
import {
  InvestDetailTitle,
  ProductDetails,
  PlanProgress,
  Safety,
  ProductDescription,
  InvestPopup,
} from '../components'
export default class InvestDetail extends Component {
  render() {
    return(
      <div>
        <InvestDetailTitle />
        <ProductDetails/>
        <PlanProgress/>
        <Safety/>
        <ProductDescription/>
        <InvestPopup/>  
      </div>
    )
  }
}