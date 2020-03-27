import axios from "axios";
import { FETCH_HOME, FETCH_TODOS, FETCH_TASK, NOT_AUTH_USER, FETCH_USER, FETCH_GROUP_DETAILS, FETCH_SCHEDULE, FETCH_SEARCH } from './types';



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
//Allow a user to toggle wether a tasks is completed
export const toggleCompleted = (group, todo, task, completed) => dispatch => {
  const body = {"completed": completed}
  axios.put(`/groups/${group}/todos/${todo}/tasks/${task}/togglecompleted`, body)
  .then(function (response) {
    dispatch({ type: FETCH_GROUP_DETAILS, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
}

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
//WORKING
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
//Fetching Details for Group Component
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
export const createNewTodo = (body, groupID) => dispatch => {
  axios.post(`/groups/${groupID}/todos`, body
  ).then(function (response) {
    dispatch({ type: FETCH_GROUP_DETAILS, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};
//====================================================

export const fetchTodos = (groupID) => dispatch => {
  axios.get(`/groups/${groupID}/todos`
  ).then(function (response) {
    console.log('response in get Todos', response)
    dispatch({ type: FETCH_SCHEDULE, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const fetchSchedule = (groupID) => dispatch => {
  axios.get(`/groups/${groupID}/schedule`
  ).then(function (response) {
    console.log('schedule', response)
    console.log('response in get Todos', response)
    dispatch({ type: FETCH_SCHEDULE, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};



//====================================================
export const fetchTask = ( groupID, todoID, taskID) => dispatch => {
  axios.get(`/groups/${groupID}/todos/${todoID}/tasks/${taskID}`
  ).then(function (response) {
    console.log('response in get Task', response)
    dispatch({ type: FETCH_TASK, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

//update task

export const updateTask = (body, groupID, todoID,taskID) => dispatch => {
  axios.put(`/groups/${groupID}/todos/${todoID}/tasks/${taskID}`, body
  ).then(function (response) {
    console.log('response in update Task', response)
    dispatch({ type: FETCH_TASK, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

//create new task

export const createNewTask = (body, groupID, todoID) => dispatch => {
  axios.post(`/groups/${groupID}/todos/${todoID}`, body
  ).then(function (response) {
    console.log('response in update Task', response)
    dispatch({ type: FETCH_TASK, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};


//====================================================
//Fetching Search for Groups
//Working! 
export const fetchGroupSearch= (query) => dispatch => {
  axios.get(`/search/groups?query=` + query)
  .then(function (response) {
    console.log('response for search', response)
    dispatch({ type: FETCH_SEARCH, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

//====================================================
//Fetching Search for User
//TODO need to test!!
export const fetchUserSearch= (query) => dispatch => {
  axios.get(`/search/users?query=` + query)
  .then(function (response) {
    console.log('response for search', response)
    dispatch({ type: FETCH_SEARCH, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};
