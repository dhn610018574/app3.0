import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import {CommonHeader} from '../../components'
import './index.scss'
export default class Register extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div className="register">
        <CommonHeader title='快速注册'></CommonHeader>
      </div>
    )
  }
}