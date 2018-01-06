import React ,{Component} from 'react'
import { Link } from 'react-router'
import {
  Header,
  FindBanner,
  FinanceNews,
  NewList,
} from '../components'
export default class Find extends Component {
  render() {
    return(
      <div>
        <Header/>
        <FindBanner/>
        <FinanceNews/>
        <NewList/>
      </div>
    )
  }
}