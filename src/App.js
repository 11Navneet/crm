import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";

import Attendance from "./pages/attendance/Attendance";
import MarkAttendance from "./pages/markAttendance/MarkAttendance";

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
          <Route exact path="/" element={<Home />} />
          
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<EditUser />} />
          <Route path="/newUser" element={<NewUser />} />

  
          <Route path="/leads" element={<Lead />} />
          <Route path="/potentialLeads" element={<PotentialLead />} />
          <Route path="/newLead" element={<NewLead />} />

          <Route path="/userData" element={<UserData />} />
          <Route path="/report" element={<Report />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/markAttendance" element={<MarkAttendance />} />    
        </Routes>
      </div> 
   
   </>

  );
}

export default App;
