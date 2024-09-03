import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WebMaster from "./WebMaster/WebMaster";
import Gallery from "./WebMaster/Gallery"
import EditHome from "./WebMaster/EditHome"



function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<WebMaster />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/EditHome" element={<EditHome />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
