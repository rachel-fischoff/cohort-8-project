import { combineReducers } from "redux";
import AuthReducer from './reducer-auth';
import UserReducer from './reducer-user'

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

export default rootReducer;