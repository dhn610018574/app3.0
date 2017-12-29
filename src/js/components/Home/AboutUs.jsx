import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class AboutUs extends Component {
  render(){
    return(
      <div className='about'>
        <Link to='' className='aboutus'>关于信而富</Link>
      </div>
    )
  }
}