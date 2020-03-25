import { AUTH_USER, NOT_AUTH_USER } from '../actions/types';

const INITIAL_STATE = {};

//NEED TO DO
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return state
    case NOT_AUTH_USER:
      return state
    default:
      return state;
  }
}
