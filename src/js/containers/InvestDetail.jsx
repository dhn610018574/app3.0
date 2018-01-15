import React ,{Component} from 'react'
import { Link } from 'react-router'
import {
  CommonHeader,
  IconTitle,
  YearRale,
  Progress,  
  User,
  NewPerson,
  PlanProgress,
  Safe,
  IntrolProduct
} from '../components'
export default class InvestDetail extends Component {
  render() {
    return(
      <div>
        <CommonHeader title='投资详情页'></CommonHeader>
        <IconTitle></IconTitle>
        <YearRale></YearRale>
        <Progress></Progress>
        <User></User>
        <NewPerson></NewPerson>
        <PlanProgress></PlanProgress>
        <Safe></Safe>
        <IntrolProduct></IntrolProduct>
      </div>
    )
  }
}