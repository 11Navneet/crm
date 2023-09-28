import React,{ useContext }  from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

import {AttendanceContext} from '..//..//utils/contexts/AttendanceContext'
import '..//..//assets/styles/common-form.css'

export default function MarkAttendance() {
  const navigate = useNavigate();
  const { attendanceData, setAttendanceData } = useContext(AttendanceContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    console.log('data',data);
    const {date,loginTime,logoutTime} = data;

    if( !date || !loginTime){
      console.log(errors);
    }

    if(!attendanceData){
      let id = uuidv4();
      id = id.slice(0,4);

      setAttendanceData({id,date,loginTime,logoutTime});
      navigate('/attendance');
    }

    else{
      let id = uuidv4();
      id = id.slice(0,4);
   
      setAttendanceData([...attendanceData,{id,date,loginTime,logoutTime}]);
      navigate('/attendance');
    }
  };


  console.log('attendance data in state: ',attendanceData);

  return (
    <div className="form-bg">
      
        <form onSubmit={handleSubmit(onSubmit)} className="main-form">
          
          <div className="input-div">
            <label htmlFor="date"  className='input-label'>Date: </label>
            <input 
              className='input-field'
              type="date"
              {...register("date", { required: true })}
            />
          </div>
         
          <div className="input-div">
            <label htmlFor="loginTime" className='input-label'>Login Time: </label>
            <input
              type="time"
              className ='input-field'
              {...register("loginTime", { required: true })}
            />
          </div>

          <div className="input-div">
            <label htmlFor="logoutTime" className='input-label'>Logout Time: </label>
            <input
              type="time"
              className='input-field'
              {...register("logoutTime")}
            />
          </div>

          <div className="input-div">
            <input type="submit" className='btn' />
          </div>

        </form>
    
    </div>
  );
}
