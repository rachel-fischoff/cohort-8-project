import { combineReducers } from "redux";
import AuthReducer from './reducer-auth';
import Todos from './reducer-todos'

const rootReducer = combineReducers({
  auth: AuthReducer,
  todos: Todos,

});

export default rootReducer;