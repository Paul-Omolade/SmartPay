import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import api, { setCSRFToken } from "../api";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setCSRFToken(); // Get CSRF cookie

      const { data } = await api.post("/register", { name, email, password });

      console.log("Registration successful:", data);

      if(data.status === 'success'){

      setTimeout(function () {
        navigate('/login');
      }, 2000);

      toast.success("Success: Registration was successful!", {
        hideProgressBar: true,
        draggable: true,
        position: "top-right",
        icon: true,
        autoClose: 6000,
      });

    } else if(data.status === 'exist'){
      toast.error("Exists: Email has been used. Already exist!", {
        hideProgressBar: true,
        draggable: true,
        position: "top-right",
        icon: true,
        autoClose: 6000,
      });
    }

      // Redirect to login or home
    } catch (error) {
      console.error("Registration error:", error);

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
                Open An Account with Us Today!
              </div>
              <form onSubmit={handleSubmit} className="">
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    className="form-control form-control-lg rounded-pill"
                    placeholder="What is your name?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg rounded-pill"
                    placeholder="What is your email?"
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
                    placeholder="Create your password"
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
                    Create My Account
                  </button>
                </div>

                <div className="fs-4 text-white mt-4">
                  Already resgistered?{" "}
                  <Link to="/login" className="text-success">
                    Login
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

export default Register;
