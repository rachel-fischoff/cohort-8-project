import {FETCH_TASK } from "../actions";

const INITIAL_STATE = {
  title: '',
  due_date: '',
  completed: '',
  assigned_to: ''
}
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_TASK :
        return action.payload
      default:
        return state;
    }
  }