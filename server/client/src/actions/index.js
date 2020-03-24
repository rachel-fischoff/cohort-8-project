import axios from "axios";
import { AUTH_USER, AUTH_ERROR, FETCH_GROUPS, FETCH_TODOS } from './types';

//====================================================
//signup
export const signup = (formProps, callback) => dispatch => {
    axios.post(
      'http://localhost:5000/auth/signup',
      formProps
    ).then(function (response) {
      dispatch({ type: AUTH_USER, payload: response.data });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', response.data.email);
      callback();
    })
    .catch(function (error) {
      dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
    });
  };

//====================================================
//signin
export const signin = (formProps, callback) => dispatch => {
  axios.post(
    'http://localhost:5000/auth/signin',
    formProps
  ).then(function (response) {
    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('email', response.data.email);
    callback();
  })
  .catch(function (error) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  });
};

//====================================================
//signout
export const signout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  
  return {
    type: AUTH_USER,
    payload: ''
  };
};

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
//Fetching TODOs for Group Component
//TODO need actual route and need to test!!
export const fetchTodos = (userID, groupID) => dispatch => {
  axios.get(`/${userID}/groups/${groupID}/todos`
  ).then(function (response) {
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