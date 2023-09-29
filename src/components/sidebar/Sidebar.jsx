import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import {
  Dashboard,
  PhoneCallback,
  Stars,
  Group,
  Assessment,
  CloudDownload,
  CloudUpload,
  HowToReg,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <div className="sidebarList">
            <NavLink exact to="/" className="sidebarListItem">
              <Dashboard className="sidebarIcon" />
              Home
            </NavLink>
            <NavLink to="/attendance" className="sidebarListItem">
              <HowToReg className="sidebarIcon" />
              Attendance
            </NavLink>
            <NavLink to="/leads" className="sidebarListItem">
              <PhoneCallback className="sidebarIcon" />
              Leads
            </NavLink>
            <NavLink to="/potentialLeads" className="sidebarListItem">
              <Stars className="sidebarIcon" />
              Potential Leads
            </NavLink>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <div className="sidebarList">
            <NavLink to="/users" className="sidebarListItem">
              <Group className="sidebarIcon" />
              Users
            </NavLink>
            <NavLink to="/report" className="sidebarListItem">
              <Assessment className="sidebarIcon" />
              Reports
            </NavLink>
            <NavLink to="/importLeads" className="sidebarListItem">
              <CloudUpload className="sidebarIcon" />
              Import Leads
            </NavLink>
            <NavLink to="/exportLeads" className="sidebarListItem">
              <CloudDownload className="sidebarIcon" />
              Export Leads
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
