import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from './types';


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
  
  export const signout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  
    return {
      type: AUTH_USER,
      payload: ''
    };
  };