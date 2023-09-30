import React from "react";
import "./exportLeads.css";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

function ExportLeads() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="userData">
          <h1 className="userDataTitle">Export Data</h1>
          <div className="userDataContainer">
            <div className="userDataOptionContainer">
              <div className="userDataInput">
                <label htmlFor="cars">Select team member</label>
                <select name="cars" id="cars">
                  <option value="">Select team member</option>
                  <option value="Jack">Jack</option>
                  <option value="Veeresh">Veeresh</option>
                  <option value="Yaswanth">Yashwanth</option>
                  <option value="Padma">Padma</option>
                  <option value="Nandini">Nandini</option>
                  <option value="Rajeev">Rajeev</option>
                  <option value="Aman">Aman</option>
                </select>
              </div>
              <div className="userDataInput">
                <label htmlFor="startDate">Select date from</label>
                <input type="date" name="startDate" />
              </div>
              <div className="userDataInput">
                <label htmlFor="endDate">Select date to</label>
                <input type="date" name="endDate" />
              </div>
              <div className="userDataInput">
                <label htmlFor="userStatus">Select lead status</label>
                <select name="userStatus">
                  <option value="">Select lead status</option>
                  <option value="All leads">All leads</option>
                  <option value="New leads">New leads</option>
                  <option value="Potential leads">Potential leads</option>
                  <option value="Registered leads">Registered leads</option>
                  <option value="Converted leads">Converted leads</option>
                  <option value="Disqualified leads">Disqualified leads</option>
                </select>
              </div>
            </div>
            <div className="userDataButtonContainer">
              <div className="userDataButton">
                <button className="exportButton">Export User Data</button>
              </div>
            </div>
            <div className="userDataTableContainer"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExportLeads;
