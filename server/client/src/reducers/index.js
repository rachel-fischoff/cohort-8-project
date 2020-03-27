import { combineReducers } from "redux";
import GroupReducer from './reducer-group';
import HomePageReducer from './reducer-home';
import UserReducer from './reducer-user';
import TodoReducer from './reducer-todo';
import TaskReducer from './reducer-task';
import ScheduleReducer from './reducer-schedule'
import SearchReducer from './reducer-search'



const rootReducer = combineReducers({
  group: GroupReducer,
  home: HomePageReducer,
  user: UserReducer,
  todo: TodoReducer,
  task: TaskReducer,
  schedule: ScheduleReducer,
  search: SearchReducer
});

export default rootReducer;