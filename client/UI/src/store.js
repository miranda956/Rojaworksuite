/* eslint-disable prettier/prettier */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import {employeeCreateReducer,employeeDetailsReducer,employeeListReducer,employeeUpdateReducer} from './reducers/employeeReducers';
import{leaveListReducer,leaveDetailsReducer} from './reducers/leaveReducers';


//const userInfo = Cookie.getJSON('userInfo') || null;


const initialState = {
  sidebarShow: true,
  //userSignin:{userInfo}


}


const reducer = combineReducers({

  employeeCreate:employeeCreateReducer,
  employeedetails:employeeDetailsReducer,
  employeeUpdate:employeeUpdateReducer,
  employeeList:employeeListReducer,
  leaveList:leaveListReducer,
  leaveDetails:leaveDetailsReducer


})




const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}


const store = createStore(
  changeState,

  );
export default store
