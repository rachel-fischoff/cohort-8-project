import { FETCH_HOME } from '../actions/types';

const INITIAL_STATE = []
//NEED TO DO
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case FETCH_HOME :
        console.log('state from home reducer', state)
      return state
    default:
      return state;
  }
}