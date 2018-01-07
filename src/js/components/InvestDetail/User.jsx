import React ,{Component} from 'react'
import './index.scss'
export default class User extends Component {
  render () {
    return (
      <a className='userNum' href='#'>
        <span>已有<i>53</i>人投资</span>
        <img src="../../images/more.png" alt=""/>
      </a>
    )
  }
}