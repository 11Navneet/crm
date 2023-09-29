import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { LeadContext } from "../../utils/contexts/LeadContext";
import "..//..//assets/styles/common-form.css";

export default function NewLead() {
  const navigate = useNavigate();
  const { leadsData, setLeadsData } = useContext(LeadContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    const { name, email, phone, college, status } = data;

    if (!name || !email || !phone || !college || !status) {
      console.log(errors);
    }

    if (!leadsData) {
      let id = uuidv4();
      id = id.slice(0, 4);
      setLeadsData({ id, name, email, phone, college, status });

      navigate("/leads");
    } else {
      let id = uuidv4();
      id = id.slice(0, 4);

      setLeadsData([...leadsData, { id, name, email, phone, college, status }]);

      navigate("/leads");
    }
  };

  return (
    <div className="form-bg">
      <form onSubmit={handleSubmit(onSubmit)} className="main-form">
        <div className="input-div">
          <label htmlFor="name" className="input-label">
            Name:{" "}
          </label>
          <input
            type="text"
            className="input-field"
            pattern="[a-zA-Z]+(\s[a-zA-Z]+)*"
            {...register("name", {
              required: "Name is required",
            })}
          />
        </div>

        <div className="input-div">
          <label htmlFor="email" className="input-label">
            Email:{" "}
          </label>
          <input
            type="email"
            className="input-field"
            pattern="[A-Za-z0-9]+@[a-z]+\.[a-z]{2,}"
            {...register("email", {
              required: "Email is required",
            })}
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
          <label htmlFor="college" className="input-label">
            College:{" "}
          </label>
          <input
            type="text"
            className="input-field"
            pattern="[a-zA-Z]+(\s[a-zA-Z]+)*"
            {...register("college", {
              required: "College is required",
            })}
          />
        </div>

        <div className="input-div">
          <label htmlFor="status" className="input-label">
            Status:{" "}
          </label>
          <select
            className="input-field"
            pattern="\S"
            {...register("status", {
              required: "Status is required",
            })}
          >
            <option value="">Select</option>
            <option value="Not answered">Not answered</option>
            <option value="Not interested">Not interested</option>
            <option value="Recall">Recall</option>
            <option value="Registered">Registered</option>
          </select>
        </div>

        <div className="input-div">
          <input type="submit" className="btn" value="Submit" />
        </div>
      </form>
    </div>
  );
}
