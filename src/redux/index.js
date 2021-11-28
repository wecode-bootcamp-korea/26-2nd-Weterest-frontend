import { combineReducers } from 'redux';
import savePins from './setPins';
import userInfo from './userInfo';
import darkMode from './darkmode';

const rootReducer = combineReducers({
  savePins,
  userInfo,
  darkMode,
});

export default rootReducer;
