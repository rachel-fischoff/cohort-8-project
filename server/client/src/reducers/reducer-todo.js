import { FETCH_TODOS } from '../actions/types';


const INITIAL_STATE = {      
    name: '',
    description: '',
    num_taks: 0, 
    num_completed: 0, 
    tasks: [],
    comments:[]
    
}

//NEED TO DO
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS :
      return action.payload
    default:
      return state;
  }
}
