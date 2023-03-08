import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import List from "./pages/List";
import GisementDetail from "./pages/GisementDetail";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/routes" element={<App />} />
        <Route path="/profile" element={<App />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:gisementId" element={<GisementDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
