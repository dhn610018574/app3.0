import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
// import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile'
import './index.scss'
export default class News extends Component {
    // state = {
    //   data : ['','']
    // }
    // componentDidMount() {
    //   this.setState(
    //     {data : ['carousel 1','carousel 2','carousel 3','carousel 4','carousel 5','carousel 6']}
    //   )
    // }
  render() {
    return(
      <div className='news'>
        <img src="../../images/ic_home_notice.png" alt=""/>
       {/* <p>信而富在美国纽交所成功上市啦！</p>
        <Carousel className="my-carousel"
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
          >
          {this.state.data.map(type=>(
            <div className="v-item" key={type}>{type}</div>
          ))}

        </Carousel>*/}
      </div>
    )
  }
}