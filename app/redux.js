import axios from 'axios'
import { connect } from 'react-redux'
import Campuses from './components/Campuses'

/* -----------------    ACTIONS     ------------------ */

export const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
export const FETCH_CAMPUS = 'FETCH_CAMPUS';
export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export const FETCH_STUDENT = 'FETCH_STUDENT';
export const FETCH_STUDENTS_AT_CAMPUS = 'FETCH_STUDENTS_AT_CAMPUS';
export const ADD_CAMPUS = 'ADD_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */

export const getCampuses = (campuses) => {
    return {
        type: FETCH_CAMPUSES,
        campuses
    }
}

export const getCampus = (campus) => {
    return {
        type: FETCH_CAMPUS, 
        campus
    }
}

export const getStudents = (students) => {
    return { 
        type: FETCH_STUDENTS, 
        students
    }
}

export const getStudent = (student) => {
    return {
        type: FETCH_STUDENT, 
        student
    }
}

export const getStudentsAtCampus = (students) => {
    return {
        type: FETCH_STUDENTS_AT_CAMPUS, 
        students
    }
}

export const addCampus = campus => ({
  type: ADD_CAMPUS,
  campus
})


/* ------------       DISPATCHERS     ------------------ */

export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
    .then(res => {
        dispatch(getCampuses(res.data))
    })
} 

export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
    .then(res => {
        dispatch(getStudents(res.data))
    })
} 

export const fetchCampusById = (campusId) => dispatch => {
    axios.get(`/api/campuses/${campusId}`)
    .then(res => {
        dispatch(getCampus(res.data))
    })
}

export const fetchStudentById = (studentId) => dispatch => {
    axios.get(`/api/students/${studentId}`)
    .then(res => {
        dispatch(getStudent(res.data))
    })
}

