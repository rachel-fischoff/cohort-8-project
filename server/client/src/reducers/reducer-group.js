import { FETCH_GROUP_DETAILS } from '../actions/types';

const INITIAL_STATE = {      
    people: [],
    comments: [],
    todos: [],
    groupName: '',
    groupDescription:'',
    groupId: ''};

//NEED TO DO
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_GROUP_DETAILS :
      return action.payload
    default:
      return state;
  }
}
