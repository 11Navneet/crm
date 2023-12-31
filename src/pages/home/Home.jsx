import React from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../utils/dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />

        <div className="home">
          <FeaturedInfo />

          <Chart
            data={userData}
            title="User Analytics"
            grid
            dataKey="Active User"
          />

          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
