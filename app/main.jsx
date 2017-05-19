'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect } from 'react-router'

import store from './store'
import Root from './components/Root'





import Home from './components/Home'
import Campuses from './components/Campuses'
import Students from './components/Students'
import Campus from './components/Campus'
import Student from './components/Student'
import AddCampus from './components/AddCampus'
import EditStudent from './components/EditStudent'


import { browserHistory, hashHistory } from "react-router"


import axios from "axios"

import { fetchCampuses, fetchStudents, fetchCampusById, fetchStudentById } from './redux'




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

const onCampusesEnter = () => {
  const campuses = axios.get('/api/campuses');
  store.dispatch(fetchCampuses(campuses));
}

const onStudentsEnter = () => {
  const students = axios.get('/api/students');
  store.dispatch(fetchStudents(students))
}



const onCampusEnter = function (nextRouterState) {
  const campusId = nextRouterState.params.id;
  const students = axios.get('/api/students');
  const campuses = axios.get('/api/campuses');
  store.dispatch(fetchCampusById(campusId));
  store.dispatch(fetchStudents(students))
  store.dispatch(fetchCampuses(campuses));
};

const onStudentEnter = function (nextRouterState) {
  const studentId = nextRouterState.params.id;
  const campuses = axios.get('/api/campuses');
  store.dispatch(fetchStudentById(studentId));
  store.dispatch(fetchCampuses(campuses));

};


render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Home} onEnter={onAppEnter} />
      <Route path="/campuses" component={Campuses} onEnter={onCampusesEnter}/>
      <Route path="/campuses/:id" component={Campus} onEnter={onCampusEnter} />
      <Route path="/students" component={Students} onEnter={onStudentsEnter}/>
      <Route path="/students/newstudent" />
      <Route path="/students/:id" component={Student} onEnter={onStudentEnter} />
      <Route path="/students/:id/editstudent" component={EditStudent} />
      <Route path="/campuses/newcampuses" component={AddCampus} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

