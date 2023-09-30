import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import PrivateRoutes from "./utils/PrivateRoutes";

import Home from "./pages/home/Home";

import Attendance from "./pages/attendance/Attendance";
import MarkAttendance from "./pages/markAttendance/MarkAttendance";
import EditAttendance from "./pages/editAttendance/EditAttendance";

import Users from "./pages/users/Users";
import NewUser from "./pages/newUser/NewUser";
import EditUser from "./pages/editUser/EditUser";

import Lead from "./pages/leads/Leads";
import EditLead from "./pages/editLead/EditLead";
import NewLead from "./pages/newLead/NewLead";
import PotentialLead from "./pages/potentialLead/PotentialLead";

import ExportLeads from "./pages/exportLeads/ExportLeads";
import Report from "./pages/reports/Report";

function App() {
  return (
    <>

      <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<PrivateRoutes />}>
              <Route exact path="/" element={<Home />} />

              <Route path="/attendance" element={<Attendance />} />
              <Route
              path="/attendance/:attendanceId"
              element={<EditAttendance />}
              />
              <Route path="/markAttendance" element={<MarkAttendance />} />

              <Route path="/users" element={<Users />} />
              <Route path="/user/:userId" element={<EditUser />} />
              <Route path="/newUser" element={<NewUser />} />

              <Route path="/leads" element={<Lead />} />
              <Route path="/lead/:leadId" element={<EditLead />} />
              <Route path="/newLead" element={<NewLead />} />

              <Route path="/potentialLeads" element={<PotentialLead />} />

              <Route path="/report" element={<Report />} />
              <Route path="/exportLeads" element={<ExportLeads />} />
          </Route>

      </Routes>

    </>
  );
}

export default App;
