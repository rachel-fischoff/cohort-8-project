import { combineReducers } from "redux";
import GroupReducer from './reducer-group';
import HomePageReducer from './reducer-home';
import UserReducer from './reducer-user';
import TodoReducer from './reducer-todo';
import TaskReducer from './reducer-task';


const rootReducer = combineReducers({
  group: GroupReducer,
  home: HomePageReducer,
  user: UserReducer,
  todo: TodoReducer,
  task: TaskReducer
});

export default rootReducer;