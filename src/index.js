import React from "react";
import "../src/styles/tailwind.css";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { UserDataProvider } from "./contexts/UserContext";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserDataProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </UserDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
