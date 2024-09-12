import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './NavBar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" style={{ color: '#234c22',fontWeight:'bolder'}} href="/">eDoctors</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-auto">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item  mx-auto">
                            <a className="nav-link" href="/about">About Us</a>
                        </li>
                        <li className="nav-item  mx-auto">
                            <a className="nav-link" href="/services">Services</a>
                        </li>
                        <li className="nav-item  mx-auto">
                            <a className="nav-link" href="/doctors">Dr. Appointments</a>
                        </li>
                        <li className="nav-item  mx-auto">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <div className="navbar-nav ms-auto">
                        <a
                            className="nav-link btn btn-primary text-white"
                            data-bs-toggle="modal"
                            data-bs-target="#signinModal"
                            href="#signinModal"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
