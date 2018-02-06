import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import './index.scss'
export default class Login extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div className="login">
        <header className='topBanner'>
          <div className='logo'></div>
          <div className='backBtn'></div>
        </header>
        <form className='userInfo'>
          <input type="tel" className='name' placeholder='请输入手机号'/>
          <input type="password" className='psw' placeholder='请输入密码'/>
          <button className='loginBtn'>登录</button>
          <div className='userSet'>
            <Link to=''>忘记密码</Link>
            <Link to='register'>快速注册</Link>
          </div>
          <div className="logo"></div>
        </form>
      </div>
    )
  }
}