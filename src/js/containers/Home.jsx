import React ,{Component} from 'react'
import { Link } from 'react-router'
import {
  Title,
  Banner,
  NewFits,
  NewProduct,
  OldProduct,
  BottomMenu,
  Bottom
} from '../components'
export default class Home extends Component {
  render() {
    return(
      <div>
        <Title/>
        <Banner/>
        <NewFits/>
        <NewProduct/>
        <OldProduct/>
        <BottomMenu/>
        <Bottom/>
      </div>
    )
  }
}