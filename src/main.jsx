import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import List from "./pages/List";
import GisementDetail from "./pages/GisementDetail";
import Profile from "./pages/Profile";
import Home from "./pages/Homepage";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routes" element={<App />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail/:gisementId" element={<GisementDetail />} />
        </Routes>
        <Navbar />
      </Router>
    </UserContextProvider>
  </React.StrictMode>
);
