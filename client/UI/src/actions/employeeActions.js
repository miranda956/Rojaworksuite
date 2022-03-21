/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
import axios from 'axios';

import {EMPLOYEE_CREATE_FAIL,EMPLOYEE_CREATE_REQUEST,EMPLOYEE_CREATE_SUCCESS,EMPLOYEE_DETAILS_FAIL,EMPLOYEE_DETAILS_REQUEST,EMPLOYEE_DETAILS_SUCCESS,EMPLOYEE_LIST_FAIL,EMPLOYEE_LIST_REQUEST,EMPLOYEE_LIST_SUCCESS,EMPLOYEE_SAVE_FAIL,EMPLOYEE_SAVE_REQUEST,EMPLOYEE_SAVE_SUCCESS,EMPLOYEE_UPDATE_FAIL,EMPLOYEE_UPDATE_REQUEST,EMPLOYEE_UPDATE_SUCCESS} from"../constants/employeeConstants";


const createEmployee=(employee)=>async(dispatch,getState)=>{
    try{
        dispatch({type:EMPLOYEE_CREATE_REQUEST,payload:employee});
        const {userSignin:{userInfo}}= getState();
        const {data:{data:newEmployee}} = await axios.post('/api/employee',employee,{
            headers:{
                Authorization: 'Bearer'+ userInfo.token
            }
        });
        dispatch({type:EMPLOYEE_CREATE_SUCCESS,payload:newEmployee});

    }catch(error){
        dispatch({type:EMPLOYEE_CREATE_FAIL, payload:error.message})
    }
}


const saveEmployee=(employee)=> async (dispatch,getState)=>{
    try{
        dispatch({type:EMPLOYEE_SAVE_REQUEST, payload:employee});
        const {userSignin:{userInfo}}= getState();
        if(!employee._id){
            const {data} = await axios.post('/api/employee',employee,{
                headers:{
                    Authorization: 'Bearer' + userInfo.token,
                },
            });
            dispatch({type:EMPLOYEE_SAVE_SUCCESS, payload:data})
        } else{
            const {data} =await axios.put(
                '/api/employee/'+employee._id,
                employee,{
                    headers:{
                        Authorization: 'Bearer' + userInfo.token,
                    }
                }
            );
            dispatch({type:EMPLOYEE_SAVE_SUCCESS, payload:data})
        }

    }catch(error){
        dispatch({type:EMPLOYEE_SAVE_FAIL, payload:error.message})


    }
}

const updateEmployee =({employeeId, first_name,last_name, email , phone, gender, street_address })=> async(dispatch,getState)=>{
    const {userSignin:{userInfo}} =getState();
    dispatch({type:EMPLOYEE_UPDATE_REQUEST, payload:{
        first_name,last_name, email , phone, gender, street_address
    }});
    try{
const {data} = await axios.put("/api/employee/"+ employeeId,
{},{
    headers:{
        Authorization:'Bearer' + userInfo.token
    }
}
);
dispatch({type:EMPLOYEE_UPDATE_SUCCESS, payload:data});

    }catch(error){
        dispatch({type:EMPLOYEE_UPDATE_FAIL, payload: error.message});

    }

  }

const listEmployee =(
    category='',
    searchKeyword ='',
    sortOrder=''
)=> async(dispatch)=>{
    try{
        dispatch({type:EMPLOYEE_LIST_REQUEST});
    const {data} =await axios.get('/api/employees?category='+
    category + '&searchKeyword='+
    searchKeyword+
    '&sortOrder='+
    sortOrder
    );
    dispatch({type:EMPLOYEE_LIST_SUCCESS, payload:data})

    }catch(error){
        dispatch({type:EMPLOYEE_LIST_FAIL, payload:error.message})
    }
}



const detailsEmployee=(employeeId)=> async(dispatch)=>{
    try{
        dispatch({type:EMPLOYEE_DETAILS_REQUEST,payload:employeeId});
        const {data}= await axios.get('/api/employee/'+employeeId);
        dispatch({type:EMPLOYEE_DETAILS_SUCCESS, payload:data})

    }catch(error){
        dispatch({type:EMPLOYEE_DETAILS_FAIL,payload:error.message})
    }

}

export {detailsEmployee,listEmployee,createEmployee,updateEmployee,saveEmployee}
