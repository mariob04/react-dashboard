import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
