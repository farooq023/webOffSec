import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import register from './register';
import results from './results';
import agents from './agents';

export default combineReducers({
  alert,
  auth,
  register,
  results,
  agents
});
