import React ,{Component} from 'react'
import {Router,Route,IndexRoute, Link} from 'react-router'
import {CommonHeader} from '../../components'
import './index.scss'
export default class ProductFeatures extends Component {
  render() {
    return(
      <div className='productFeatures'>
        <CommonHeader title='方案特色'></CommonHeader>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}