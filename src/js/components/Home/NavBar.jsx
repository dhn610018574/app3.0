import React, {Component} from 'react'
import { Link } from 'react-router'
import home_normal from  '../../../images/ic_home_normal.png'
import home_select from '../../../images/ic_home_select.png'
import invest_normal from '../../../images/ic_invest_normal.png'
import invest_select from'../../../images/ic_invest_select.png'
import discovery_normal from'../../../images/ic_discovery_normal.png'
import discovery_select from '../../../images/ic_discovery_select.png'
import mine_normal from '../../../images/ic_mine_normal.png'
import mine_select from '../../../images/ic_mine_select.png'

export default class NewProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[
        {iconUrl:home_normal,name:'首页',id:0},
        {iconUrl:invest_normal,name:'投资',id:1},
        {iconUrl:discovery_normal,name:'发现',id:2},
        {iconUrl:mine_normal,name:'我的',id:3}
      ],
      currentId:0
    }
  }
  componentDidMount(){
    this.setState({
      data:[
        {iconUrl:home_select,name:'首页',id:0},
        {iconUrl:invest_select,name:'投资',id:1},
        {iconUrl:discovery_select,name:'发现',id:2},
        {iconUrl:mine_select,name:'我的',id:3}    
      ]
    })
  }
  handleClick(id){
    this.id === this.state.data.id?home_normal:home_select
  }
  render(){
    return(
      <div className='navBar'>
        {this.state.data.map(i=>(
          <div key={`${i.id}`}><Link to=''><img src={`${i.iconUrl}`} alt=""/><p>{`${i.name}`}</p></Link></div>
        ))}
      </div>       
    )
  }
}