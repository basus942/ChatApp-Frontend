import React from "react";
import { Route, Routes } from "react-router-dom";
import "../src/styles/styles.css";
import HomePage from "./pages/user/HomePage";
import Missing from "./pages/Missing";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import SignInForm from "./pages/user/SignIn";
import SignUpForm from "./pages/user/SignUp";

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<SignInForm />} />
      <Route path="/auth/register" element={<SignUpForm />} />

      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}
