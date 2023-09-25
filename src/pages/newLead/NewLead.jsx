import React from 'react'

function NewLead() {
  return (
<div className='newLead'>
      <h1 className="newLeadTitle">New Lead</h1>
      <form className="newLeadForm">
        <div className="newLeadItem">
          <label>Name</label>
          <input type='text' placeholder='Leadname' />
        </div>
        <div className="newLeadItem">
          <label>Full Name</label>
          <input type='text' placeholder='full name' />
        </div>
        <div className="newLeadItem">
          <label>Email</label>
          <input type='email' placeholder='email' />
        </div>
        <div className="newLeadItem">
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className="newLeadItem">
          <label>Phone</label>
          <input type='text' placeholder='phone' />
        </div>
        <div className="newLeadItem">
          <label>Address</label>
          <input type='text' placeholder='address' />
        </div>
        <div className="newLeadItem">
          <label>Gender</label>
          <div className="newLeadGender">
          <input type='radio' name='gender' id='male' value='male' />
          <label for='male'>Male</label>
          <input type='radio' name='gender' id='female' value='female' />
          <label for='female'>Female</label>
          <input type='radio' name='gender' id='other' value='other' />
          <label for='other'>Other</label>
          </div>         
        </div>
        <div className="newLeadItem">
          <label>Active</label>
          <select name="active" id="active" className="newLeadSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> 
        <button className='newLeadButton'>Create</button>       
      </form>
    </div>
  )
}

export default NewLead
