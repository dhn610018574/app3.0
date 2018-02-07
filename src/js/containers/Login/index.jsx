import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import './index.scss'
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      value:"请输入手机号",
      pswVal:"请输入密码"
    }
  }
  componentDidMount(){
    document.body.scrollTop = 0
  }
  handleChange(event){
    this.setState({
      value:event.target.value
    })
  }
  clearInputVal(){
    this.setState({
      value:''
    })
  }
  onfocus(){
    this.setState({
      placeValue:"",
    })
  }
  onPswFocus(){
    this.setState({
      pswVal:"",
    })
  }
  onblur(event){
    if(event.target.value ===""){
      this.setState({
        value:"请输入手机号"
      })
    }
  }
  onPswBlur(event){
    if(event.target.value === ''){
      this.setState({
        pswVal:"请输入密码"
      })
    }
  }
  render() {
    let value = this.state.value
    let pswValue = this.state.pswVal
    return (
      <div className="login">
        <header className='topBanner'>
          <div className='logo'></div>
          <div className='backBtn'></div>
        </header>
        <form className='userInfo'>
          <input type="tel" 
          className='name' 
          ref="telVal" 
          onChange={this.handleChange} 
          value={value} 
          onFocus={this.onfocus.bind(this)}
          onBlur={this.onblur.bind(this)}
          />
          <input type="text" 
          className='psw' 
          value={pswValue} 
          onFocus={this.onPswFocus.bind(this)}
          onBlur={this.onPswBlur.bind(this)}
          />
          <div className="hiddenBtn" onClick={this.clearInputVal.bind(this)}></div>
          <button className='loginBtn'>登录</button>
          <div className='userSet'>
            <Link to='forgetPassword'>忘记密码</Link>
            <Link to='register'>快速注册</Link>
          </div>
          <div className="logo"></div>
        </form>
      </div>
    )
  }
}