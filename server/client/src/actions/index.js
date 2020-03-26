import axios from "axios";
import { FETCH_HOME, FETCH_TODOS, FETCH_TASK, NOT_AUTH_USER, FETCH_USER, FETCH_GROUP_DETAILS } from './types';


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
//WORKING
export const home = () => dispatch => {
  axios.get(`/home`
  ).then(function (response) {
    console.log('response from home', response)
    dispatch({ type: FETCH_HOME, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

//====================================================
//Adding a new Group 
//TODO : test with data 
export const createNewGroup = (body) => dispatch => {
  axios.post(`/groups`, body
  ).then(function (response) {
    console.log('response in createNewGroup', response)
    dispatch({ type: FETCH_GROUP_DETAILS, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};


//====================================================
//Fetching Schedule for Group Component
//WORKING
export const fetchGroupDetails = (groupID) => dispatch => {
  axios.get(`/groups/${groupID}`
  ).then(function (response) {
    console.log("response from fetchgroupdetails", response)
    dispatch({ type: FETCH_GROUP_DETAILS, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

//====================================================
//route creates a new todo in the database
//WORKING
export const createNewTodo = (body, groupID, todoID) => dispatch => {
  axios.post(`/groups/${groupID}/todos/${todoID}`, body
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
  axios.get(`/groups/${groupID}/todos/${todoID}`
  ).then(function (response) {
    console.log('response in get Todos', response)
    dispatch({ type: FETCH_TODOS, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};


//====================================================
export const fetchTask = ( groupID, todoID, taskID) => dispatch => {
  axios.get(`/groups/${groupID}/todos/${todoID}/${taskID}`
  ).then(function (response) {
    console.log('response in get Task', response)
    dispatch({ type: FETCH_TASK, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};
//update tast
export const updateTask = (body, groupID, todoID,taskID) => dispatch => {
  axios.post(`/groups/${groupID}/todos/${todoID}/tasks/${taskID}`, body
  ).then(function (response) {
    console.log('response in update Task', response)
    dispatch({ type: FETCH_TASK, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

//Adding Task on TODO Component
//TODO need actual route and need to test!!
///groups/:groupId/todos/:todo/tasks/:task
export const createNewTodoTask = (body, userID, groupID, todoID ) => dispatch => {
  axios
  .post(`/${userID}/groups/${groupID}/todos/${todoID}`, body
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