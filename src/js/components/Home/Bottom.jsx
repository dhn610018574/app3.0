import React, {Component} from 'react'
import { Link } from 'react-router'
export default class Bottom extends Component {
  render(){
    return(
      <div className='bottomBtn'>
        <Link to=''>关于信而富</Link>
      </div>       
    )
  }
}