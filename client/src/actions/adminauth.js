import axios from 'axios';
import { createBrowserHistory } from 'history';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import { setAlert } from './alerts';
import setAuthToken from '../utils/setAuthToken';
// load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/adminauth');

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};
// Login Admin

export const adminlogin = (email, password) => async (dispatch) => {
    

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // const body = JSON.stringify({ email, password });
  
  try {
    const res = await axios.post("/api/adminauthh/"+email+"/"+password, config);
    console.log("here")
    console.log("res"+res.data)
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    window.location.reload();
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  const history = createBrowserHistory();
  history.push('/login');
  history.go();
};
