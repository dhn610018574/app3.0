import React ,{Component} from 'react'
import './index.scss'
export default class Progress extends Component {
  render () {
    return (
      <div className='progress'>
        <div className='rest'>
          <span>进度 65%</span>
          <span>剩余可投20万元</span>
        </div>
        <div className='total'>
          <div className='finished'></div>
        </div>
        
      </div>
    )
  } 
}