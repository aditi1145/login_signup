import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import dashboardData from "../../data/dashboardData.json";
import "./Dashboard.css";
const LandingPage = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Dashboard data={dashboardData} />
    </div>
  );
};

export default LandingPage;
