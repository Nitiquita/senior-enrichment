import axios from 'axios'
import { connect } from 'react-redux'


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
        type: FETCH_STUDENTS_AT_CAMPUS, // I don't see this in use in your reducer; let's talk about your thoughts here -- KH
        students
    }
}

export const addCampus = campus => ({ // why is your format for this action creator different from the ones before? -- KH
  type: ADD_CAMPUS,
  campus
})

/* ------------       DISPATCHERS     ------------------ */

export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
    .then(res => {
        typeof res.data === 'object' ? dispatch(getCampuses(res.data)) : window.location.reload(); // this is the iffy you were mentioning. Your routes (use of `next`) are probably the reason this was probably having issues. -- KH
    })
} 

export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
    .then(res => {
        typeof res.data === 'object' ? dispatch(getStudents(res.data)) : window.location.reload();
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

