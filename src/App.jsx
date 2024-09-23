import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarr from "../components/Navbar";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Mybook from "../components/Mybook";
import Activity from "../components/Activity";
import Booklist from "../components/Booklist";

import Profile from './../components/Profile';
import Logout from "../components/Logout";


function App() {
  return (
    <Router>
      <div>
        <Navbarr />
        {/* Define the Routes */}
        <Routes>
          <Route path="/" element={<Profile/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Booklist" element={<Booklist />} />
          <Route path="/MyBooks" element={<Mybook />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
