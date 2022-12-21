import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ButtonPage from "../pages/ButtonPage";

import BoxPage from "../pages/BoxPage";
import ModalPage from "../pages/ModalPage"

import LoginPage from "../pages/LoginPage";
import ForgotYourPasswordPage from "../pages/ForgotYourPasswordPage";

import CheckYourEmailPage from "../pages/CheckYourEmailPage";
import NewPasswordPage from "../pages/NewPasswordPage";

import LoaderPage from "../pages/LoaderPage";
import SwitchPage from "../pages/SwitchPage";

import NavbarPage from "../pages/NavbarPage";
import NavbarFull from "../Components/Navbar/NavbarFull";

import NavbarShort from "../Components/Navbar/NavbarShort";
import NavbarExample from "../Components/Navbar/NavbarExample";

function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<ButtonPage />} />
        
        <Route path="/box" element={<BoxPage />} />
        <Route path="/modal" element={<ModalPage />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/esqueceu-sua-senha" element={<ForgotYourPasswordPage />} />
        
        <Route path="/verifique-seu-email" element={<CheckYourEmailPage />} />
        <Route path="/redefinir-senha" element={<NewPasswordPage />} />
        
        <Route path="/loader" element={<LoaderPage />} />
        <Route path="/switch" element={<SwitchPage />} />
        
        <Route path="/navbar" element={<NavbarPage />} />
        <Route path="/navbar/full" element={<NavbarFull />} />
        
        <Route path="/navbar/short" element={<NavbarShort />} />
        <Route path="/navbar/example" element={<NavbarExample />} />

      </Routes>
    </Router>
  );
}

export default routes;