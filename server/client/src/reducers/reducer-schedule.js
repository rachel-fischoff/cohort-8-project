import { FETCH_SCHEDULE } from '../actions/types';

const INITIAL_STATE = {}

//NEED TO DO
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SCHEDULE :
      return action.payload.Group.todos
    default:
      return state;
  }
}