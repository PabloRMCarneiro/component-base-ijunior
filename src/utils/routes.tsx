import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ButtonPage from "../pages/ButtonPage";

function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<ButtonPage />} />
      </Routes>
    </Router>
  );
}

export default routes;