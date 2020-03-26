import axios from "axios";
import { FETCH_GROUPS, FETCH_TODOS, NOT_AUTH_USER, AUTH_USER, FETCH_USER } from './types';

//====================================================
//fetching a current user      
export const fetchUser = () => dispatch => {

  axios.get(`/current_user`
  ).then(function (response) {
    console.log("current user responded", response)
    dispatch({ type: FETCH_USER, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
    dispatch({ type: NOT_AUTH_USER, payload: error });
  });
};



//====================================================
//signout


//=======================================================
//Fetching groups for home page
//TODO need actual route and need to test!!
export const fetchGroups = (userID) => dispatch => {
  axios.get(`/${userID}/groups`
  ).then(function (response) {
    dispatch({ type: FETCH_GROUPS, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

//====================================================
//route creates a new todo in the database
export const createNewTodo = (body, groupID, todoID) => dispatch => {
  axios.post(`http://localhost:5000/groups/${groupID}/todos/${todoID}`, body
  ).then(function (response) {
    console.log('response in createNew Todo', response)
    dispatch({ type: FETCH_TODOS, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};
//====================================================
//Fetching TODOs for Group Component
//TODO need actual route and need to test!!
export const fetchTodos = (groupID, todoID) => dispatch => {
  axios.get(`http://localhost:5000/groups/${groupID}/todos/${todoID}`
  ).then(function (response) {
    console.log('response in get Todos', response)
    dispatch({ type: FETCH_TODOS, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};


//====================================================
//Adding Task on TODO Component
//TODO need actual route and need to test!!
///groups/:groupId/todos/:todo/tasks/:task
export const createNewTasks = (userID, groupID, todoID, task) => dispatch => {
  axios
  .post(`/${userID}/groups/${groupID}/todos/${todoID}`, 
    task
    ).then(function (response) {
      dispatch({ type: FETCH_TODOS, payload: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

//====================================================
//Fetching Schedule for Group Component
//TODO need actual route and need to test!!
export const fetchSchedule = (userID, groupID) => dispatch => {
  axios.get(`/${userID}/groups/${groupID}/schedule`
  ).then(function (response) {
    dispatch({ type: FETCH_TODOS, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};