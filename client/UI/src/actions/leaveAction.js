/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
import axios from 'axios';

import {LEAVE_DETAILS_FAIL,LEAVE_DETAILS_REQUEST,LEAVE_DETAILS_SUCCESS,LEAVE_LIST_FAIL,LEAVE_LIST_REQUEST,LEAVE_LIST_SUCCESS} from "../constants/leaveConstants";




const listLeave =(

)=> async(dispatch)=>{
  try{
      dispatch({type:LEAVE_LIST_REQUEST});
  const {data} =await axios.get('/api/leave'

  );
  dispatch({type:LEAVE_LIST_SUCCESS, payload:data})

  }catch(error){
      dispatch({type:LEAVE_LIST_FAIL, payload:error.message})
  }
}


const detailsLeave=(leaveId)=> async(dispatch)=>{
  try{
      dispatch({type:LEAVE_DETAILS_REQUEST,payload:leaveId});
      const {data}= await axios.get('/api/leave/'+leaveId);
      dispatch({type:LEAVE_DETAILS_SUCCESS, payload:data})

  }catch(error){
      dispatch({type:LEAVE_DETAILS_FAIL,payload:error.message})
  }

}

export {detailsLeave,listLeave};
