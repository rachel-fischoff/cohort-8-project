import {FETCH_SEARCH_GROUP, FETCH_SEARCH_USER, FETCH_SEARCH_TERM } from "../actions/types";

const INITIAL_STATE = {
    term:'',
    groups: [],
    users:[]
}
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_SEARCH_GROUP :
        return Object.assign({}, state, {
          groups: action.payload
          })
      case FETCH_SEARCH_USER :
        return Object.assign({}, state, {
          users: action.payload
          })
      case FETCH_SEARCH_TERM :
        return Object.assign({}, state, {
          term: action.payload
      })
      default:
        return state;
    }
  }