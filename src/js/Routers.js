import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'

import {
  AppHome,
  Find,
  UserAuthority,
  Gyplan,
  Register,
  Wtmatch,
  DepAgreement,
  QualityPlan,
  Error404,
  Error500,
  Notice,
  BannerContent,
  Upgrade,
  InvestDetail
} from './containers'
export default class Routers extends Component {
  // 渲染方法
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/">
            <Route path="appHome" component={AppHome} />
            {/**
            * 协议部分页面
            */}
            <Route path="userAuthority" component={UserAuthority} />
            <Route path="gyplan" component={Gyplan} />
            <Route path="register" component={Register} />
            <Route path="wtmatch" component={Wtmatch} />
            <Route path="depAgreement" component={DepAgreement} />
            <Route path="qualityPlan" component={QualityPlan} />
            {/**
             * 错误页面
             */}
            <Route path="error404" component={Error404} />
            <Route path="error500" component={Error500} />
            {/**
             * 系统公告页
             */}
            <Route path="notice" component={Notice} />

            {/**
             * banner落地页面
             */}
            <Route path="bannerContent" component={BannerContent} />
            {/**
             * 升级领取福利页面
             */}
            <Route path="upgrade" component={Upgrade} />
            {/**
             * 产品详情页面
             */}
            <Route path="investDetail" component={InvestDetail} />

            <Route path='find' component={Find} />
          </Route>
        </Router>
    )
  }
}

