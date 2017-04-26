import axios from 'axios'
import { connect } from 'react-redux'
import Campuses from './components/Campuses'

/* -----------------    ACTIONS     ------------------ */

const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const FETCH_STUDENTS = 'FETCH_STUDENTS';

/* ------------   ACTION CREATORS     ------------------ */

const getCampuses = (campuses) => {
    return {
        type: FETCH_CAMPUSES,
        campuses
    }
}

const getCampusById = () => {

}

/* ------------       DISPATCHERS     ------------------ */

export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
    .then(res => {
        dispatch(getCampuses(res.data))
    })
} 

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses 
    }
}

export default connect(mapStateToProps)(Campuses)