import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import UserPage from "./pages/UserPage";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<UserPage />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
