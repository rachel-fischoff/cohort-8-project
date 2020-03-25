import { combineReducers } from "redux";
import AuthReducer from './reducer-auth';
import GroupReducer from './reducer-group';
import HomePageReducer from './reducer-home';

const rootReducer = combineReducers({
  auth: AuthReducer,
  group: GroupReducer,
  home: HomePageReducer
});

export default rootReducer;