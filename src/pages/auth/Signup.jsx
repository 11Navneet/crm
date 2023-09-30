import React from "react";
import { useForm } from "react-hook-form";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-bg">
      <form onSubmit={handleSubmit(onSubmit)} className="main-form">
        <div className="input-div">
          <label htmFor="username" className="input-label">
            Username
          </label>
          <input
            className="input-field"
            type="text"
            pattern="[A-Za-z]+(\s[A-Za-z]+)"
            {...register("username", {
              required: true,
              min: 3,
            })}
          />
        </div>
        <div className="input-div">
          <label htmFor="email" className="input-label">
            Email
          </label>
          <input
            className="input-field"
            type="email"
            pattern="[A-Za-z0-9]+@externsclub.com"
            {...register("email", {
              required: true,
            })}
          />
        </div>
        <div className="input-div">
          <label htmFor="password" className="input-label">
            Password
          </label>
          <input
            className="input-field"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
        </div>
        <div className="input-div">
          <input type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
}