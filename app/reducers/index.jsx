import { combineReducers } from 'redux'

const initialState = {
  campuses: [],
  students: []
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer
