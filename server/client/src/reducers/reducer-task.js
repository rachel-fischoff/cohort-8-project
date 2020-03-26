import {FETCH_TODOS, FETCH_TASK } from "../actions";

const INITIAL_STATE = {
  todos:[]
}
  
  export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
      case FETCH_TODOS:
        return Object.assign({}, state, action.todos);
      case FETCH_TASK:
        return Object.assign({}, state, { [action.task.id]: action.task });
      default:
        return state
    }
  }