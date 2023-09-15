import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../src/styles/styles.css";
import HomePage from "./pages/user/HomePage";
import Missing from "./pages/Missing";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import SignInForm from "./pages/user/SignIn";
import SignUpForm from "./pages/user/SignUp";
import Cookies from "universal-cookie";
import Layout from "./components/Layout";
import ProtectAuthRoute from "./components/ProtectAuthRoute";
import { useUserData } from "./contexts/UserContext";
import { userActions } from "./reducers/UserActions";
import Store from "./pages/user/Store";

export default function App() {
  const cookie = new Cookies();
  const accessToken = cookie.get("accessToken");
  const userData = useUserData();
  useEffect(() => {
    if (accessToken) {
      userActions.fetchUserDetails(
        accessToken,
        userData.dispatch,
        (res) => {},
        (err) => {}
      );
    }
  }, []);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<ProtectAuthRoute />}>
          <Route path="/auth/register" element={<SignUpForm />} />
          <Route path="/" element={<SignInForm />} />
        </Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="Store" element={<Store />} />{" "}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />{" "}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}
