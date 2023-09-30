import React, { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./editAttendance.css";
import { AttendanceContext } from "../../utils/contexts/AttendanceContext";


const EditAttendance = () => {
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const { attendanceData } = useContext(AttendanceContext);

  let id = useParams().attendanceId;
  console.log("params", id);
  let attendance = attendanceData.find((attendance) => attendance.id === id);
  console.log("filtered user: ", attendance);

  const onSubmit = (data) => {
    console.log("data", data);
    let { date, loginTime, logoutTime } = data;

    // eslint-disable-next-line array-callback-return
    let updatedData = attendanceData.map((attendance) => {
      if (attendance.id === id) {
        attendance.date = date;
        attendance.loginTime = loginTime;
        attendance.logoutTime = logoutTime;
      }
    });

    console.log("updated data:", updatedData);

    navigate("/attendance");
  };

  useEffect(() => {
    setValue("date", attendance.date);
    setValue("loginTime", attendance.loginTime);
    setValue("logoutTime", attendance.logoutTime);
  }, [attendance, setValue]);

  return (
    <div className="form-bg">
      <form onSubmit={handleSubmit(onSubmit)} className="main-form">
        <div className="input-div">
          <label htmlFor="date" className="input-label">
            Date:{" "}
          </label>
          <input
            className="input-field"
            type="date"
            {...register("date", { required: true })}
          />
        </div>

        <div className="input-div">
          <label htmlFor="loginTime" className="input-label">
            Login Time:{" "}
          </label>
          <input
            type="time"
            className="input-field"
            {...register("loginTime", { required: true })}
          />
        </div>

        <div className="input-div">
          <label htmlFor="logoutTime" className="input-label">
            Logout Time:{" "}
          </label>
          <input
            type="time"
            className="input-field"
            {...register("logoutTime")}
          />
        </div>

        <div className="input-div">
          <input type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default EditAttendance;
