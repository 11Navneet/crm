import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { LeadContext } from "../../utils/contexts/LeadContext";
import "..//..//assets/styles/common-form.css";


export default function EditLead() {
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();
  const { leadsData } = useContext(LeadContext);

  const id = useParams().leadId;
  let lead = leadsData.find((lead) => lead.id === id);
  console.log("filtered user: ", lead);

  useEffect(() => {
    if (lead) {
      setValue("name", lead.name);
      setValue("email", lead.email);
      setValue("phone", lead.phone);
      setValue("college", lead.college);
      setValue("status", lead.status);
    }
  }, [lead, setValue]);

  const onSubmit = (data) => {
    console.log("updatedlead: ", data);

    let { name, email, phone, college, status } = data;
    // eslint-disable-next-line array-callback-return
    let updatedData = leadsData.map((lead) => {
      if (lead.id === id) {
        lead.name = name;
        lead.email = email;
        lead.phone = phone;
        lead.college = college;
        lead.status = status;
      }
    });

    console.log("updated data:", updatedData);
    navigate("/leads");
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
