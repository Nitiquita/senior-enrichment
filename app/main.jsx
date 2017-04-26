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

import { fetchCampuses, fetchStudents } from './redux'






const onAppEnter = () => {

  const pCampuses = axios.get('/api/campuses');
  const pStudents = axios.get('/api/students');

  return Promise
    .all([pCampuses, pStudents])
    .then(responses => responses.map(r => r.data))
    .then(([campuses, students]) => {
      store.dispatch(fetchCampuses(campuses));
      store.dispatch(fetchStudents(students));
    });
};




render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Home} onEnter={onAppEnter} />
      <Route path="/campuses" component={Campuses} />
      <Route path="/campuses/:id" component={Campus} />
      <Route path="/students" component={Students} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

