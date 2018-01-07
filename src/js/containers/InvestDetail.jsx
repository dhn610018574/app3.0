import React ,{Component} from 'react'
import { Link } from 'react-router'
import {
  IconTitle,
  IntrolProduct,
  NewPerson,
  PlanProgress,
  Progress,
  Safe,
  User,
  YearRale
} from '../components'
export default class InvestDetail extends Component {
  render() {
    return(
      <div>
        <IconTitle/>
        <YearRale/>
        <Progress/>
        <User/>        
        <PlanProgress/>
        <NewPerson/>        
        <Safe/>
        <IntrolProduct/>
      </div>
    )
  }
}