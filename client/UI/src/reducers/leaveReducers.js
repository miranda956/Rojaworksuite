/* eslint-disable prettier/prettier */
import {LEAVE_CREATE_FAIL,LEAVE_CREATE_REQUEST,LEAVE_CREATE_SUCCESS,LEAVE_DETAILS_FAIL,LEAVE_DETAILS_REQUEST,LEAVE_DETAILS_SUCCESS,LEAVE_LIST_FAIL,LEAVE_LIST_REQUEST,LEAVE_LIST_SUCCESS} from "../constants/leaveConstants";


function leaveListReducer(state={},action){
  switch(action.type){
      case LEAVE_LIST_REQUEST:
          return{loading:true,LEAVE:[]};
          case LEAVE_LIST_SUCCESS:
              return {loading:false, LEAVEs:action.payload};
              case LEAVE_LIST_FAIL:
                  return {laoding:false,error:action.payload}
                  default: return state
  }
}



function leaveDetailsReducer(state={},action){
  switch(action.type){
      case LEAVE_DETAILS_REQUEST:
          return{loading:true};
          case LEAVE_DETAILS_SUCCESS:
              return {loading:false, LEAVEs:action.payload};
              case LEAVE_DETAILS_FAIL:
                  return {laoding:false,error:action.payload}
                  default: return state
  }
}



function leaveCreateReducer(state={}, action){
  switch (action.type){
      case LEAVE_CREATE_REQUEST:
          return{loading:true};
          case LEAVE_CREATE_SUCCESS:
              return {loading:false, LEAVE:action.payload,success:true};
              case LEAVE_CREATE_FAIL:
                  return {loading:false, error:action.payload};
                  default:
                      return state;
  }
}

export {leaveCreateReducer,leaveDetailsReducer,leaveListReducer}
