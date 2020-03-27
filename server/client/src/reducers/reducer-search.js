import {FETCH_SEARCH } from "../actions/types";

const INITIAL_STATE = {
    term: ''
}
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_SEARCH :
        return action.payload
      default:
        return state;
    }
  }