import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Lead from "./pages/lead/Lead";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import UserData from "./pages/userData/UserData";
import Report from "./pages/report/Report";
import PotentialLead from "./pages/potentialLead/PotentialLead";
import Attendance from "./pages/attendance/Attendance";


function App() {
  return (
    <BrowserRouter>
      {/* <div className="login-signUp">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div> */}
      <Topbar />
       <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/leads" element={<Lead />} />
          <Route path="/potentialLeads" element={<PotentialLead />} />
          <Route path="/userData" element={<UserData />} />
          <Route path="/report" element={<Report />} />
          <Route path="/attendance" element={<Attendance />} />
          
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;
