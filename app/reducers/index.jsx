import { combineReducers } from 'redux'
import { FETCH_CAMPUSES, FETCH_STUDENTS } from '../action-creators/actions'

const initialState = {
  campuses: [],
  students: []
}

const rootReducer = function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case FETCH_CAMPUSES:
      newState.campuses = campuses
      break
    case FETCH_STUDENTS:
      newState.students = students
      break
    default: return state
  }
  return newState
};

export default rootReducer
