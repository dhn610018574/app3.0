import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class NewProduct extends Component {
  render(){
    return(
      <div className='oldProduct'>
        <h4>老用户专享理财产品</h4>
        <ul>
          <li>
            <div className='product-introl'>
              <div>
                <span>高回报</span>
                <p>8.90<i>%</i></p>
                <p>期望年化收益率</p>
              </div>
              <div>
                <p>新手共盈计划3MC</p>
                <p>
                  <span><i>500</i>元起投</span>
                  <span>出借期<i>90</i>天</span>
                  <span>已投<i>25.3%</i></span>
                </p>
              </div>   
            </div>
          </li>
          <li>
            <div className='product-introl'>
              <div>
                <span>高收益</span>
                <p>8.90<i>%</i></p>
                <p>期望年化收益率</p>
              </div>
              <div>
                <p>新手共盈计划3MC</p>
                <p>
                  <span><i>500</i>元起投</span>
                  <span>出借期<i>90</i>天</span>
                  <span>已投<i>25.3%</i></span>
                </p>
              </div>   
            </div>
          </li>
          <li>
            <div className='product-introl'>
              <div>
                <span>新手专享</span>
                <p>8.90<i>%</i></p>
                <p>期望年化收益率</p>
              </div>
              <div>
                <p>新手共盈计划3MC</p>
                <p>
                  <span><i>500</i>元起投</span>
                  <span>出借期<i>90</i>天</span>
                  <span>已投<i>25.3%</i></span>
                </p>
              </div>   
            </div>
          </li>
        </ul>
      </div>       

    )
  }
}