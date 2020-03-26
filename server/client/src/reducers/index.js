import { combineReducers } from "redux";
import GroupReducer from './reducer-group';
import HomePageReducer from './reducer-home';
import UserReducer from './reducer-user';
import TodoReducer from './reducer-todo'


const rootReducer = combineReducers({
  group: GroupReducer,
  home: HomePageReducer,
  user: UserReducer,
  todo: TodoReducer
});

export default rootReducer;