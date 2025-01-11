import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import OrderList from "./components/OrderList/OrderList";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Navbar />
      </div>
      <Routes>
        <Route path="/order-list" element={<OrderList />} />
      </Routes>
    </>
  );
};

export default App;
