import React ,{Component} from 'react'
import { Link } from 'react-router'
import {
  InvestHeader,
  InvestBar
} from '../components'
export default class Find extends Component {
  render() {
    return(
      <div>
        <InvestHeader/>
        <InvestBar/>
      </div>
    )
  }
}