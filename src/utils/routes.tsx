import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ButtonPage from "../pages/ButtonPage";

import SpacerPage from "../pages/SpacerPage";
import BoxPage from "../pages/BoxPage";

import ModalPage from "../pages/ModalPage"
import LoginPage from "../pages/LoginPage";

function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/spacer" element={<SpacerPage />} />
        <Route path="/box" element={<BoxPage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default routes;