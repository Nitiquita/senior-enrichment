'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'

import store from './store'
import Root from './components/Root'
import Home from './components/Home'
import Campuses from './components/Campuses'
import Students from './components/Students'
import Campus from './components/Campus'
import {browserHistory} from "react-router"

 

render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Home} />
      <Route path="/campuses" component={Campuses} />
        <Route path="/campus" component={Campus} />
      <Route path="/students" component={Students} />
    </Router>
  </Provider>,
  document.getElementById('main')
)