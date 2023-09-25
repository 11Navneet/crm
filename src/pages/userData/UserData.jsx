import React from "react";
import "./userData.css";

export default function UserData() {
  return (
    <div className="userData">
      <h1 className="userDataTitle">Export Data</h1>
      <div className="userDataContainer">
        <div className="userDataOptionContainer">
          <div className="userDataInput">
            <label htmlFor="cars">Select team member</label>
            <select name="cars" id="cars">
              <option value="volvo">Select team member</option>
              <option value="volvo">Jack</option>
              <option value="saab">Nikhil</option>
              <option value="opel">Avinash</option>
              <option value="audi">Veeresh</option>
              <option value="audi">Padma</option>
            </select>
          </div>
          <div className="userDataInput">
            <label htmlFor="birthday">Select date from</label>
            <input type="date" id="birthday" name="birthday" />
          </div>
          <div className="userDataInput">
            <label htmlFor="date">Select date to</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="userDataInput">
            <label htmlFor="leadStatus">Select lead status</label>
            <select name="leadStatus" id="leadStatus">
              <option value="saab">Select lead status</option>
              <option value="volvo">All except disqualified</option>
              <option value="saab">New leads</option>
              <option value="opel">Qualified leads</option>
              <option value="audi">Recall leads</option>
              <option value="audi">Followup leads</option>
              <option value="audi">Converted leads</option>
              <option value="audi">Potential leads</option>
              <option value="audi">Disqualified leads</option>
              <option value="audi">All leads</option>
            </select>
          </div>
        </div>
        <div className="userDataButtonContainer">
          <div className="userDataButton">
            <button className="exportButton">Export User Data</button>
          </div>
        </div>
        <div className="userDataTableContainer">
          
        </div>
      </div>
    </div>
  );
}
