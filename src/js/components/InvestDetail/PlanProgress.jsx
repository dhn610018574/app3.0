import React ,{Component} from 'react'
import './index.scss'
export default class PlanProgress extends Component {
  render(){
    return(
      <div className="task-progress">
        <h4 className="title">计划进度</h4>
        <div className="task">
          <li>
            <div className="bg"><img src="../../images/start.png" alt=""/></div>
            <p>开始认购</p>
            <p>2017-06-20</p>
          </li>
          <li>
            <div className="bg"><img src="../../images/match.png" alt=""/></div>
            <p>匹配债权</p>
            <p>2017-06-21</p>
          </li>
          <li>
            <div className="bg"><img src="../../images/end.png" alt=""/></div>
            <p>到期结算</p>
            <p>2017-07-21</p>
          </li>
        
        </div>

      </div>
    )
  }
}