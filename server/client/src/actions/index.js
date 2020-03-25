import axios from "axios";
import { FETCH_HOME, FETCH_TODOS, NOT_AUTH_USER, AUTH_USER, FETCH_GROUP_DETAILS } from './types';

//====================================================
//fetching a current user      
export const fetchUser = () => dispatch => {
  axios.get(`http://localhost:5000/api/current_user/`
  ).then(function (response) {
    console.log("current user responded", response)
    dispatch({ type: AUTH_USER, payload: response.data });
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
  axios.get(`http://localhost:5000/home`
  ).then(function (response) {
    console.log('response from home', response)
    dispatch({ type: FETCH_HOME, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

//====================================================
//Fetching Schedule for Group Component
//WORKING
export const fetchGroupDetails = (groupID) => dispatch => {
  axios.get(`http://localhost:5000/groups/${groupID}`
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
export const postTasks = (userID, groupID, todoID, task) => dispatch => {
  axios
  .post(`/${userID}/groups/${groupID}/todos${todoID}`, 
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