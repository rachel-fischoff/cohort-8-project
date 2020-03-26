import { FETCH_USER } from '../actions/types';

//NEED TO DO
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
      console.log('action.payload.data', action.payload)
      state = []
      return action.payload;
    default:
      return state;
  }
}
