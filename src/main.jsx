import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Map from "./components/Map/MapView";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrendrePhoto from "./page/PrendrePhoto";
import AjouterGisement from "./page/AjouterGisement";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/routes" element={<App />} />
        <Route path="/profile" element={<App />} />
        <Route path={"/map"}  element={<Map />} />
        <Route path={"/photo"} element={<PrendrePhoto />} />
        <Route path={"/ajouter-gisement"} element={<AjouterGisement />} />


      </Routes>
      <Navbar />
    </Router>
  </React.StrictMode>
);
