import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="bg-white py-lg-10">
            <div className="fixed-top">
                <div className="px-lg-20 px-4 mt-lg-4 mt-4">
                    <div className="card bg-dark rounded-pill shadow-lg">
                        <div className="row px-lg-4 py-lg-3 py-3 px-3 align-items-center">
                            <div className="col-lg-3 col-7 fs-3 text-white d-flex align-items-center">
                                <span className='btn btn-sm btn-white rounded-circle'>
                                    <i class="bi bi-credit-card-2-front-fill fs-4 text-dark"></i>
                                </span>
                                <span className="ms-2">SmartPay</span>
                            </div>

                            <div className="col-lg-6 col-8 d-lg-flex d-md-flex d-none">
                                    <div className="col">
                                        <span className="fs-3 text-white">
                                            Personal
                                        </span>
                                    </div>

                                    <div className="col">
                                        <span className="fs-3 text-white">
                                            Business
                                        </span>
                                    </div>

                                    <div className="col">
                                        <span className="fs-3 text-white">
                                            Partner
                                        </span>
                                    </div>

                                    <div className="col">
                                        <span className="fs-3 text-white">
                                            About Us
                                        </span>
                                    </div>
                            </div>

                            <div className="col-lg-3 col-2 text-end">
                                <Link to="/login" className="btn btn-md btn-white rounded-pill">
                                    Login
                                </Link>
                            </div>

                            <div className="col-lg-3 col-2 text-end ms-4 d-flex d-lg-none d-md-none">
                                <div className="btn btn-md btn-white rounded-circle">
                                <i class="bi bi-list text-dark fs-4"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-lg-5 pt-lg-12 pt-20">
                <div className="row px-lg-10 px-3">
                <div className="col-lg-8 col-12">
                <h1 className="display-2 fw-medium mb-4">
                    Swift, KiaKia, Ngwa Ngwa, Sauri!
                </h1>
                <h1 className="display-4 fw-medium mb-4 text-gray-700">
                    All-For-ONE! Payment Made Easy!
                </h1>

                <p className="lead mb-4 text-dark-success">
                    Manage your transactions and categories with ease.
                </p>
                <div className="">
                    <Link to="/register" className="btn btn-md btn-dark rounded-pill">
                        Get Started
                    </Link>

                    <button className="btn btn-md btn-green rounded-pill ms-2">
                        Know More
                    </button>
                </div>
                </div>

                <div className="col-lg-4 col-12 text-end mt-4">
                <img src="../assets/images/background/hero.png" alt="" width={"100%"} class="image" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default App;
