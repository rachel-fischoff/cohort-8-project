import { combineReducers } from "redux";
import AuthReducer from './reducer-auth';
import GroupReducer from './reducer-group';
import HomePageReducer from './reducer-home';
import UserReducer from './reducer-user';

const rootReducer = combineReducers({
  auth: AuthReducer,
  group: GroupReducer,
  home: HomePageReducer,
  user: UserReducer
});

export default rootReducer;