import { combineReducers } from "redux";
import AuthReducer from './reducer-auth';
import GroupReducer from './reducer-group';

const rootReducer = combineReducers({
  auth: AuthReducer,
  group: GroupReducer
});

export default rootReducer;