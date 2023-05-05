import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./Components/Common/Sidebar/Sidebar";
import Home from "./Pages/Home";
import "./App.css";
import Applications from "./Pages/Applications";
import Setting from "./Pages/Setting";
import Navbar from "./Components/Common/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <div className="relative">
          <Navbar />
          <div className="absolute top-0 left-0 right-0 main-background ">
            <div className="md:ml-[250px] ml-0">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/settings" element={<Setting />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
