import React from "react";
import "./topbar.css";

import { Link } from "react-router-dom";

import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { AccountCircle } from "@mui/icons-material";

import logo from "../../assets/images/logo.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon sx={{ fontSize: 30 }} />
            </Badge>
          </div>
          <div className="topbarIconContainer">
            <AccountCircle sx={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
