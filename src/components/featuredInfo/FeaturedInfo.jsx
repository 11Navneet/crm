import React from "react";
import "./featuredInfo.css";
import { Man, Call, PlaylistAdd, PersonAdd } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Leads</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">0</span>
          <span className="featuredMoneyRate">
            <Man className="featuredIcon" />
          </span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Calls</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1</span>
          <span className="featuredMoneyRate">
            <Call className="featuredIcon" />
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Enrollments</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">0</span>
          <span className="featuredMoneyRate">
            <PlaylistAdd className="featuredIcon" />
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Full Conversions</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">0</span>
          <span className="featuredMoneyRate">
            <PersonAdd className="featuredIcon" />
          </span>
        </div>
      </div>
    </div>
  );
}
