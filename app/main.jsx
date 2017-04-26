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
import { browserHistory } from "react-router"

import axios from "axios"

import { fetchCampuses } from './redux'



// const onMainEnter = () => {
//   axios.get('/api/campuses')
//     .then(res => {
//       const campuses = res.data
//     })
// }

const onCampusesEnter = () => {
    store.dispatch(fetchCampuses())
}


render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Home}  />
      <Route path="/campuses" component={Campuses} onCampusesEnter={onCampusesEnter}/>
      <Route path="/campuses/:id" component={Campus} />
      <Route path="/students" component={Students} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

