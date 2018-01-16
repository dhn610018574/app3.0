import React ,{Component} from 'react'
import { Link } from 'react-router'
import {
  InvestDetailTitle,
  ProductDetails,
  PlanProgress,
  Safety,
  ProductDescription
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
      </div>
    )
  }
}