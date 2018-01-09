import React ,{Component} from 'react'
import {Link} from 'react-router'
import { Carousel } from 'antd-mobile'
import './index.scss'
let response = require('../../../../mock/home.json')
let news = require('../../../../mock/news.json')
export default class Banner extends Component {
  state = {
    data: {
      "app_pop_up":[],
      "discover_menu":[],
      "offline_invest_protocal":[],
      "app_bankauth_tips":[],
      "app_top_menu":[],
      "open_protocol":[],
      "app_open_page":[],
      "app_block_menu":[],
      "app_cgbank_name":[],
      "app_new_exclusive":[],
      "app_banner":[],
      "xjd_invest_protocal":[],
      "month_tips":[],
      "ncp_invest_proctoal":[],
      "register_protocol":[]
    },
    newsData:[]
    // imgHeight: 80,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: response.data,
        newsData:news
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <Carousel
          dots={false}
          autoplay={true}
          infinite
          selectedIndex={1}
        >
          {this.state.data.app_banner.map(ii => (
            <a
              key={ii}
              href={`${ii.jumpUrl}`}
              style={{ display: 'inline-block', width: '100%' }}
            >
              <img
                src={`${ii.iconUrl}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <Top></Top>
       <Carousel className="my-carousel"
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
        >
          <div className="v-item">carousel 1</div>
          <div className="v-item">carousel 2</div>
          <div className="v-item">carousel 3</div>
        </Carousel>
      </div>
    );
  }
}

class Top extends Component {
    state = {
    data: {
      "app_pop_up":[],
      "discover_menu":[],
      "offline_invest_protocal":[],
      "app_bankauth_tips":[],
      "app_top_menu":[],
      "open_protocol":[],
      "app_open_page":[],
      "app_block_menu":[],
      "app_cgbank_name":[],
      "app_new_exclusive":[],
      "app_banner":[],
      "xjd_invest_protocal":[],
      "month_tips":[],
      "ncp_invest_proctoal":[],
      "register_protocol":[]
    },
    newsData:[]
    // imgHeight: 80,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: response.data,
        newsData:news
      });
    }, 100);
  }
  render() {
    return(
      <div className="top">
        {this.state.data.app_top_menu.map(index=>(
          <a
          key={Math.random()}
          href={`${index.jumpUrl}`}
          >
          <img src={`${index.iconUrl}`} alt=""/>
          <p>{`${index.name}`}</p>
          </a>
        ))}
      </div>
    )
  }
}
