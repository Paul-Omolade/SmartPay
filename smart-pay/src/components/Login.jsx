import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import api, { setCSRFToken } from "../api"; // Import Axios instance

import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // First, get the CSRF token
      await setCSRFToken(); // Fetch CSRF cookie before the login request

      const { data } = await api.post("/login", { email, password });
      console.log("Login successful:", data);
      // Save token or handle redirection

      setTimeout(function () {
        navigate("/home");
      }, 2000);

      toast.success("Success: Connecting You To App...", {
        hideProgressBar: true,
        draggable: true,
        position: "top-right",
        icon: true,
        autoClose: 6000,
      });
    } catch (error) {
      console.error("Login error:", error);

      toast.error("Error: Request Failed! Check network connection.");
    }
  };

  return (
    <div className="container">
      <div className="px-lg-12 px-2 mt-lg-5 mt-10 text-center">
        <Link to="/" className="mb-4 fs-t3 fw-medium text-q3">
          <span className="btn btn-md btn-dark rounded-circle">
            <i class="bi bi-credit-card-2-front-fill fs-3 text-white"></i>
          </span>{" "}
          <span>SmartPay</span>
        </Link>

        <div className="col-lg-6 offset-lg-3 mt-4">
          <div
            className="card shadow-none bg-dark"
            style={{ borderRadius: "18px" }}
          >
            <div className="px-lg-7 px-4 py-lg-5 py-6 text-center">
              <div className="fs-3 text-white mb-4">
                Login Into Your Account!
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg rounded-pill"
                    placeholder="Enter you Email.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg rounded-pill"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-green btn-lg rounded-pill w-100"
                  >
                    Log In
                  </button>
                </div>

                <div className="fs-4 text-white mt-4">
                  Don't have an account yet?{" "}
                  <Link to="/register" className="text-success">
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
