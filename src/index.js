import React from 'react';
import ReactDom from 'react-dom';
import Routers from './js/Routers.jsx';
import './styles/normalize.scss'
import './styles/_base.scss'
import {Router,Route,IndexRoute, Link,browserHistory} from 'react-router'
ReactDom.render(
  <Router history={browserHistory} routes={Routers} />,
    document.getElementById('app')
);
