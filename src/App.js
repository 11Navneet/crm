import React from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css"

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import Home from "./pages/home/Home";

import Attendance from "./pages/attendance/Attendance";
import MarkAttendance from "./pages/markAttendance/MarkAttendance";
import EditAttendance from "./pages/editAttendance/EditAttendance";

import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import EditUser from './pages/editUser/EditUser';

import Lead from "./pages/lead/Lead";
import NewLead from './pages/newLead/NewLead';
import PotentialLead from "./pages/potentialLead/PotentialLead";

import UserData from "./pages/userData/UserData";
import Report from "./pages/report/Report";


function App() {
  return (
   <>
      <Topbar />
       <div className="container">
       <Sidebar />
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/attendance" element={<Attendance />} />
          <Route path="/attendance/:attendanceId" element={<EditAttendance />} /> 
          <Route path="/markAttendance" element={<MarkAttendance />} />  
   
          
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<EditUser />} />
          <Route path="/newUser" element={<NewUser />} />

          <Route path="/leads" element={<Lead />} />
          <Route path="/newLead" element={<NewLead />} />

          <Route path="/potentialLeads" element={<PotentialLead />} />

          <Route path="/userData" element={<UserData />} />
          <Route path="/report" element={<Report />} />
  
        </Routes>
      </div> 
   
   </>

  );
}

export default App;
