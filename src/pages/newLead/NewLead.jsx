// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import '..//..//assets/styles/common-form.css'
// import { useNavigate } from "react-router-dom";
// import { useLeadContext } from '../../utils/contexts/LeadContext';


// export default function NewLead({onSubmit}) {
//   const { register, handleSubmit, formState: { errors },reset } = useForm();
//   const { addLead } = useLeadContext();
//   const navigate = useNavigate();

//   const handleFormSubmit = (data) => {
//     const newLead = { ...data, id: Date.now() };
//     addLead(newLead);
//     reset();
//     navigate("/leads");
//   };

    
  
//   return (
//     <div className='form-bg'>
//       <form onSubmit={handleSubmit(handleFormSubmit)} className='main-form'>

//         <div className='input-div'>
//           <label htmlFor="name" className='input-label'>Name: </label>
//           <input type="text" {...register("name", { required: true })} name='name' className='input-field'/>
//         </div>

//         <div className='input-div'>
//           <label htmlFor="email" className='input-label'>Email: </label>
//           <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} name='email' className='input-field' />
//         </div>

//         <div className='input-div'>
//           <label htmlFor="phone" className='input-label'>Phone: </label>
//           <input type="tel" {...register("phone", { required: true })} name="phone" className='input-field'/>
//         </div>
      
//         <div className='input-div'>
//           <label htmlFor="college" className='input-label'>College: </label>
//           <input type="text" {...register("college")} name='college' className='input-field'/>
//         </div>
        
//         <div className='input-div'>
//           <label htmlFor="status" className='input-label' >Status: </label>
//           <select {...register("status", { required: true })} name='status' className='input-field' >
//             <option value="">Select</option>
//             <option value="Not answered">Not answered</option>
//             <option value="Not interested">Not interested</option>
//             <option value="Pending">Pending</option>
//             <option value="Registered">Registered</option>
//           </select>
//         </div>

//         <div className='input-div'>
//         <input type="submit" className='btn' value="Submit" />
//         </div>
       
//       </form>
//     </div>
//   );
// }


import React from 'react';
import { useForm } from 'react-hook-form';
import '..//..//assets/styles/common-form.css';
import { useNavigate } from "react-router-dom";
import { useLeadContext } from '../../utils/contexts/LeadContext';
import { v4 as uuidv4 } from 'uuid';

export default function NewLead() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { addLead } = useLeadContext();
  const navigate = useNavigate();

  const generateUniqueShortId = () => {
    const uuid = uuidv4(); // Generate a unique UUIDv4
    return uuid.slice(0, 4); // Slice it to the first 4 characters
  };

  const handleFormSubmit = (data) => {
    const newLead = { ...data, id: generateUniqueShortId() };
    addLead(newLead);
    reset();
    navigate("/leads");
  };

  return (
    <div className='form-bg'>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='main-form'>

        <div className='input-div'>
          <label htmlFor="name" className='input-label'>Name: </label>
          <input
            type="text"
            {...register("name", {
              required: 'Name is required',
              pattern: {
                value: /^[a-zA-Z]+(\s[a-zA-Z]+)*$/,
                message: 'Wrong name format',
              },
            })}
            name='name'
            className='input-field'
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className='input-div'>
          <label htmlFor="email" className='input-label'>Email: </label>
          <input
            type="email"
            {...register("email", {
              required: 'Email is required',
              pattern: {
                value: /^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,}$/,
                message: 'Wrong email format',
              },
            })}
            name='email'
            className='input-field'
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className='input-div'>
          <label htmlFor="phone" className='input-label'>Phone: </label>
          <input
            type="tel"
            {...register("phone", {
              required: 'Phone is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Wrong phone format',
              },
            })}
            name="phone"
            className='input-field'
          />
          {errors.phone && <span className="error">{errors.phone.message}</span>}
        </div>

        <div className='input-div'>
          <label htmlFor="college" className='input-label'>College: </label>
          <input
            type="text"
            {...register("college", {
              required: 'College is required',
              pattern: {
                value: /^[a-zA-Z]+(\s[a-zA-Z]+)*$/,
                message: 'Wrong college format',
              },
            })}
            name='college'
            className='input-field'
          />
          {errors.college && <span className="error">{errors.college.message}</span>}
        </div>

        <div className='input-div'>
          <label htmlFor="status" className='input-label'>Status: </label>
          <select
            {...register("status", {
              required: 'Status is required',
              pattern: {
                value: /\S/,
                message: 'Status is required',
              },
            })}
            name='status'
            className='input-field'
          >
            <option value="">Select</option>
            <option value="Not answered">Not answered</option>
            <option value="Not interested">Not interested</option>
            <option value="Pending">Pending</option>
            <option value="Registered">Registered</option>
          </select>
          {errors.status && <span className="error">{errors.status.message}</span>}
        </div>

        <div className='input-div'>
          <input type="submit" className='btn' value="Submit" />
        </div>

      </form>
    </div>
  );
}



