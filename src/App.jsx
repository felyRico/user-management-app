import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditUser from "./pages/EditUser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:userId/edit" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default App;
