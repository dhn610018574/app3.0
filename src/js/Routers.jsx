import React ,{Component} from 'react'
import {Router,Route,IndexRoute, Link} from 'react-router'
import {
  App
}  from './components'
// export default class Routers extends Component {
//   render () {
//     return (
//       <Router history={browserHistory} >
//         <Route path='/' component={App}></Route>

//       </Router>
//     )
//   }
// }

export default (
  <Router path='/' component={App}>
    <Route path='home' component={App}></Route>

  </Router>
)
