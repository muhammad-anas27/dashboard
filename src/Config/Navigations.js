import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard.jsx";
import Sidebar from "../Components/Sidebar/Sidebar.jsx";
const Navigations = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};

export default Navigations;
