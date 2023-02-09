import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transaction from "./pages/Transaction";
import MyAssets from "./pages/MyAssets";
import Settings from "./pages/Settings";
import Borrow from "./pages/Borrow";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/transactions" element={<Transaction />}></Route>
      <Route path="/borrow" element={<Borrow />}></Route>

      <Route path="/myAssets" element={<MyAssets />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  );
};

export default App;
