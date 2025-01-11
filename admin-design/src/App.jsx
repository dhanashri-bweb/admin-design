import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import OrderList from "./components/OrderList/OrderList";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/order-list"
          element={
            <>
              <Sidebar />
              <Navbar />
              <div className="main-content">
                <OrderList />
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
