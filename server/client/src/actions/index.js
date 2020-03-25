import axios from "axios";
import { FETCH_GROUPS, FETCH_TODOS, FETCH_USER } from './types';

//====================================================
//fetching a current user      
export const fetchUser = () => dispatch => {
  axios.get(`https://localhost:5000/api/current_user`
  //axios.get(`/api/${userID}`
  ).then(function (response) {
    dispatch({ type: FETCH_USER, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

//fetching a current user      
export const login = () => dispatch => {
  axios.get(`https://localhost:5000/auth/google`
  ).then(function (response) {
    console.log('response', response)
    dispatch({ type: FETCH_USER, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
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