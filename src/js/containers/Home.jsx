import React ,{Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import {
  Banner,
  Guide1,
  Guide2,
  News,
  NewPersonFits,
  NewProduct,
  OldProduct,
  Bottom,
  AboutUs,
  TabBar
} from '../components'
export default class AppHome extends Component {
  render() {
    return(
      <div className='appHome'>
        <div className='titleBox'><div className='title'><img src="../images/ic_mine_normal.png" alt=""/><span>信而富理财</span><img src="" alt="" className='add'/></div></div>
        <Banner/>
        <Guide1/>
        {/*<Guide2/>*/}
        {/*<News/>*/}
        <NewPersonFits/>
        <NewProduct/>
        <OldProduct/>
        <div className='addProduct'>查看更多理财产品 ></div>
        <Bottom/>
        <AboutUs/>
        <div className='footer'><img src="" alt=""/></div>
        <TabBar/>
      </div>
    )
  }
}