import React ,{Component} from 'react'
import {
  Router,
  Route,
  IndexRoute, 
  Link,
  browserHistory
} from 'react-router'
import {
  App
}  from './components'
export default class Routers extends Component {
  render () {
    return (
      <Router history={browserHistory} >
        <Route path='/' component={App}></Route>

      </Router>
    )
  }
}

