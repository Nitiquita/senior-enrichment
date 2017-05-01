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
import Student from './components/Student'
import AddCampus from './components/AddCampus'

import { browserHistory, hashHistory } from "react-router"


import axios from "axios"

import { fetchCampuses, fetchStudents, fetchCampusById, fetchStudentById } from './redux'


//onAppEnter fetch all campuses and students and add to store 

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

const onCampusEnter = function (nextRouterState) {
  const campusId = nextRouterState.params.id;
  const students = axios.get('/api/students');
  store.dispatch(fetchCampusById(campusId));
  store.dispatch(fetchStudents(students))
};

const onStudentEnter = function (nextRouterState) {
  const studentId = nextRouterState.params.id;
  const campuses = axios.get('/api/campuses');
  store.dispatch(fetchStudentById(studentId));
  store.dispatch(fetchCampuses(campuses));

};


render(
  <Provider store={store}>
    <Router history={hashHistory} >
      <Route path="/" component={Home} onEnter={onAppEnter} />
      <Route path="/campuses" component={Campuses} />
      <Route path="/campuses/:id" component={Campus} onEnter={onCampusEnter} />
      <Route path="/students" component={Students} />
      <Route path="/students/:id" component={Student} onEnter={onStudentEnter} />
      <Route path="/campuses/new" component={AddCampus} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

