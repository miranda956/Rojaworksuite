/* eslint-disable prettier/prettier */
import {EMPLOYEE_CREATE_FAIL,EMPLOYEE_CREATE_REQUEST,EMPLOYEE_CREATE_SUCCESS,EMPLOYEE_DETAILS_FAIL,EMPLOYEE_DETAILS_REQUEST,EMPLOYEE_DETAILS_SUCCESS,EMPLOYEE_LIST_FAIL,EMPLOYEE_LIST_REQUEST,EMPLOYEE_LIST_SUCCESS,EMPLOYEE_SAVE_FAIL,EMPLOYEE_SAVE_REQUEST,EMPLOYEE_SAVE_SUCCESS,EMPLOYEE_UPDATE_FAIL,EMPLOYEE_UPDATE_REQUEST,EMPLOYEE_UPDATE_SUCCESS} from"../constants/employeeConstants";


function employeeListReducer(state={},action){
    switch(action.type){
        case EMPLOYEE_LIST_REQUEST:
            return{loading:true,EMPLOYEE:[]};
            case EMPLOYEE_LIST_SUCCESS:
                return {loading:false, EMPLOYEEs:action.payload};
                case EMPLOYEE_LIST_FAIL:
                    return {laoding:false,error:action.payload}
                    default: return state
    }
}



function employeeDetailsReducer(state={},action){
    switch(action.type){
        case EMPLOYEE_DETAILS_REQUEST:
            return{loading:true};
            case EMPLOYEE_DETAILS_SUCCESS:
                return {loading:false, EMPLOYEEs:action.payload};
                case EMPLOYEE_DETAILS_FAIL:
                    return {laoding:false,error:action.payload}
                    default: return state
    }
}

function employeeCreateReducer(state={}, action){
      switch (action.type){
          case EMPLOYEE_CREATE_REQUEST:
              return{loading:true};
              case EMPLOYEE_CREATE_SUCCESS:
                  return {loading:false, EMPLOYEE:action.payload,success:true};
                  case EMPLOYEE_CREATE_FAIL:
                      return {loading:false, error:action.payload};
                      default:
                          return state;
      }
  }

function employeeUpdateReducer(state={},action){
    switch(action.type){
        case EMPLOYEE_UPDATE_REQUEST:
            return{loading:false};
            case EMPLOYEE_UPDATE_SUCCESS:
                return {laoding:false, EMPLOYEEInfo: action.payload};
                case EMPLOYEE_UPDATE_FAIL:
                    return {loading:false, error:action.payload};
                    default: return state;

    }
}

export {employeeUpdateReducer,employeeCreateReducer,employeeListReducer,employeeDetailsReducer}
