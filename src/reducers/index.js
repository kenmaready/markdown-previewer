import { combineReducers } from 'redux';
import newInputReducer from './newInputReducer.js';

export default combineReducers({
    newInput: newInputReducer
});