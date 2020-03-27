import {FETCH_TASK } from "../actions/types";

const INITIAL_STATE = {
    title: '',
    due_date: '',
    completed: '',
    assigned_to: ''   
}
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_TASK:
        console.log('from task action: ', action.payload)
        return action.payload
      default:
        return state;
    }
  }