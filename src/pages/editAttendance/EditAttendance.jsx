import React,{useEffect, useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import './editAttendance.css'

const EditAttendance = () => {

    const{
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    let id = useParams().userId;

    useEffect(()=>[

    ],[setValue])

    


  return (
    <div>
      
    </div>
  )
}

export default EditAttendance
