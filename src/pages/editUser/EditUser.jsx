import React,{useState, useEffect, useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import {UserContext} from '..//..//utils/contexts/UserContext'
import '..//..//assets/styles/common-form.css'

 function EditUser() {

    const{
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const {usersData, setUsersData} = useContext(UserContext);

    let id = useParams().userId;
    let user = usersData.find((user)=>user.id === id );
    console.log('filtered user: ',user);
    
    const onSubmit = (data) => {
        console.log('data',data);
        let {name,email,active,role} = data;
        let updatedData = usersData.map((user)=>{
          if(user.id == id){
            user.name = name;
            user.email = email;
            user.active = active;
            user.role = role;
          }
        });

        console.log('updated data:',updatedData);

        navigate('/users');
    };

    useEffect(()=>{
      setValue('name',user.name)
      setValue('email',user.email)
      setValue('active',user.active)
      setValue('role',user.role)
    },[user])

  return (
    <div className="form-bg">
      
        <form onSubmit={handleSubmit(onSubmit)} className="main-form">

          <div className="input-div">
            <label htmlFor="name" className="input-label">Name: </label>
            <input
              className="input-field"
              type="text"
              pattern="[A-Za-z]+(\s[A-Za-z]+)*"
              {...register("name", { required: 'Name is required' })}
            />
          </div>

          <div className="input-div">
            <label htmlFor="email" className="input-label">Email: </label>
            <input
              className="input-field"
              type="email" 
              pattern="[A-Za-z]+@externsclub.com"
              {...register("email", { required: 'Email is required' })}
            />
          </div>

          <div className="input-div">
            <label htmlFor="active" className="input-label">Active: </label>
            <select 
              className="input-field" 
              {...register("active", { required: true })}  
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="input-div">
            <label htmlFor="role" className="input-label">Role: </label>
            <select 
              className="input-field" 
              {...register("role", { required: 'Role is required' })} 
            >
              <option value="">Select</option>
              <option value="Intern">Intern</option>
              <option value="Employee">Employee</option>
              <option value="Team lead">Team lead</option>
              <option value="Senior team lead">Senior team lead</option>
              <option value="Senior manager">Senior manager</option>
            </select>
          </div>

          <div className="input-div">
            <input type="submit" className="btn"/>
          </div>

        </form>
    </div>
  )
}

export default EditUser
