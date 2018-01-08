import React ,{Component} from 'react'
import { Link } from 'react-router'
import {
  MyHeader,
  RechargeCashIn,
  Panel,
  AppPanel,
  MyBar
} from '../components'
export default class Find extends Component {
  render() {
    return(
      <div>
        <MyHeader/>
        <RechargeCashIn/>
        <Panel/>
        <AppPanel/>
        <MyBar/>
      </div>
    )
  }
}