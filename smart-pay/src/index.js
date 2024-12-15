import React from "react";
import ReactDOM from "react-dom/client"; // Use `react-dom/client` for React 18+
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import Transactions from "./components/Transactions";
import Categories from "./components/Categories";
import NoPage from "./NoPage";

// Create the root element for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="*" element={<NoPage />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
