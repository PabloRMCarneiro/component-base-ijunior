import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ButtonPage from "../pages/ButtonPage";
import SpacerPage from "../pages/SpacerPage";

function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/spacer" element={<SpacerPage />} />
      </Routes>
    </Router>
  );
}

export default routes;