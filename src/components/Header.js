import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../data/navLinks"

function Header() {
    const [mobileNavbar, setMobileNavbar] = useState(false);

    return (
        <header id="header">
            <div id="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul id="top-buttons">
                                <li>
                                    <i className="fa fa-sign-in"></i> Login
                                </li>
                                <li>
                                    <i className="fa fa-pencil-square-o"></i> Register
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <div className="language-switcher">
                                        <span><i className="fa fa-globe"></i> English</span>
                                        <ul>
                                            <li><span>Deutsch</span></li>
                                            <li><span>Espa&ntilde;ol</span></li>
                                            <li><span>Fran&ccedil;ais</span></li>
                                            <li><span>Portugu&ecirc;s</span></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="nav-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <NavLink to="/" className="nav-logo">
                                <img src="images/logo.png" alt="One Ring Rentals" />
                            </NavLink>
                            {/* <!-- BEGIN SEARCH --> */}
                            <div id="sb-search" className="sb-search">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        className="sb-search-input"
                                        placeholder="Search..."
                                        type="text"
                                        defaultValue=""
                                        name="search"
                                        id="search"
                                    />
                                    <input className="sb-search-submit" type="submit" value="" />
                                    <i className="fa fa-search sb-icon-search"></i>
                                </form>
                            </div>
                            {/* <!-- END SEARCH --> */}
                            {/* <!-- BEGIN MAIN MENU --> */}
                            <nav className="navbar">
                                <button id="nav-mobile-btn" onClick={() => setMobileNavbar(!mobileNavbar)}>
                                    <i className="fa fa-bars"></i>
                                </button>

                                <ul className="nav navbar-nav">
                                    {navLinks.map((link) => (
                                        <li key={link.id}>
                                            <NavLink
                                                to={link.path}
                                                className={({ isActive }) => isActive ? "active-nav-link" : ""}
                                            >
                                                {link.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>

                                {/* MOBILE HAMBURGER MENU */}
                                <div className={`nav-mobile ${mobileNavbar ? "open" : ""}`}>
                                    <i className="fa fa-close"
                                        onClick={() => setMobileNavbar(false)}>
                                    </i>
                                    <h2><i className="fa fa-bars"></i>Menu</h2>
                                    <ul>
                                        {navLinks.map((link) => (
                                            <li key={link.id}>
                                                <NavLink
                                                    to={link.path}
                                                    onClick={() => setMobileNavbar(false)}
                                                >
                                                    {link.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </nav>
                            {/* <!-- END MAIN MENU --> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

//export function
export default Header;