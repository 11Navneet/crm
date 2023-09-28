import React from "react";
import { useForm } from "react-hook-form";
import '..//..//assets/styles/common-form.css'

export default function MarkAttendance() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="form-bg">
      
        <form onSubmit={handleSubmit(onSubmit)} className="main-form">
          <div className="input-div">
            <label htmlFor="date"  className='input-label'>Date: </label>
            <input 
              className='input-field'
              type="datetime-local"
              name="date"
              {...register("Date", { required: true })}
            />
          </div>
          <div className="input-div">
            <label htmlFor="day" className='input-label'>Day: </label>
            <select name="day" {...register("Day", { required: true })} className='input-field'>
              <option value="Select">Select Day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="input-div">
            <label htmlFor="task" className='input-label'>Task: </label>
            <textarea
              name="task"
              className='input-field'
              {...register("Task", { required: true })}
            ></textarea>
          </div>
          <div className="input-div">
            <label htmlFor="loginTime" className='input-label'>Login Time: </label>
            <input
              type="time"
              name="loginTime" 
              className ='input-field'
              {...register("Login Time", { required: true })}
            />
          </div>
          <div className="input-div">
            <label htmlFor="logoutTime" className='input-label'>Logout Time: </label>
            <input
              type="time"
              name="logoutTime"
              className='input-field'
              {...register("Logout Time", { required: true })}
            />
          </div>
          <div className="input-div">
            <input type="submit" className='btn' />
          </div>
        </form>
    
    </div>
  );
}
