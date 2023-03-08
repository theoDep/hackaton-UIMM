import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Profile from "./pages/Profile";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/routes" element={<App />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Navbar />
      </Router>
    </UserContextProvider>
  </React.StrictMode>
);
