import axios from 'axios'
import { connect } from 'react-redux'
import Campuses from './components/Campuses'

/* -----------------    ACTIONS     ------------------ */

const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const FETCH_CAMPUS = 'FETCH_CAMPUS';
const FETCH_STUDENTS = 'FETCH_STUDENTS';
const FETCH_STUDENT = 'FETCH_STUDENT'


/* ------------   ACTION CREATORS     ------------------ */

const getCampuses = (campuses) => {
    return {
        type: FETCH_CAMPUSES,
        campuses
    }
}

const getCampusById = (campusId) => {
    return {
        type: FETCH_CAMPUS, 
        campus
    }
}

const getStudents = (students) => {
    return { 
        type: FETCH_STUDENTS, 
        students
    }
}

const getStudentById = (studentId) => {
    return {
        type: FETCH_STUDENT, 
        student
    }
}



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

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses 
    }
}

export default connect(mapStateToProps)(Campuses)