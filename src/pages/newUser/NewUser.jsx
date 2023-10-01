import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { UserContext } from "..//..//utils/contexts/UserContext";
import "..//..//assets/styles/common-form.css";

export default function NewUser() {
  const navigate = useNavigate();
  const { usersData, setUsersData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    const { name, email, phone, active, role } = data;

    if (!name || !email || !phone || !active || !role) {
      console.log(errors);
    }

    if (!usersData) {
      let id = uuidv4();
      id = id.slice(0, 4);
      setUsersData({ id, name, email, phone, active, role });

      navigate("/users");
    } else {
      let id = uuidv4();
      id = id.slice(0, 4);

      setUsersData([...usersData, { id, name, email, phone, active, role }]);

      navigate("/users");
    }
  };

  console.log("users data in state: ", usersData);

  return (
    <div className="form-bg">
      <form onSubmit={handleSubmit(onSubmit)} className="main-form">
        <div className="input-div">
          <label htmlFor="name" className="input-label">
            Name:{" "}
          </label>
          <input
            className="input-field"
            type="text"
            pattern="[A-Za-z]+(\s[A-Za-z]+)*"
            {...register("name", { required: "Name is required" })}
          />
        </div>
        <div className="input-div">
          <label htmlFor="email" className="input-label">
            Email:{" "}
          </label>
          <input
            className="input-field"
            type="email"
            pattern="[A-Za-z0-9]+@externsclub.com"
            {...register("email", { required: "Email is required" })}
          />
        </div>
        <div className="input-div">
          <label htmlFor="phone" className="input-label">
            Phone:{" "}
          </label>
          <input
            type="tel"
            className="input-field"
            pattern="[0-9]{10}"
            {...register("phone", {
              required: "Phone is required",
            })}
          />
        </div>

        <div className="input-div">
          <label htmlFor="active" className="input-label">
            Active:{" "}
          </label>
          <select
            {...register("active", { required: true })}
            className="input-field"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="input-div">
          <label htmlFor="role" className="input-label">
            Role:{" "}
          </label>
          <select
            {...register("role", { required: "Role is required" })}
            className="input-field"
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
          <input type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
}
