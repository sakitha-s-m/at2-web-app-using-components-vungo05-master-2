import React from "react";
import { Link } from "react-router-dom";

// Import footer data from the data directory
import { helpfulLinks, footerRegions, socialIcons } from "../data/footerData";


function Footer() {
    const leftRegions = footerRegions.slice(0, 3);
    const rightRegions = footerRegions.slice(3);

    return (
        <footer id="footer">
            <div id="footer-top" className="container">
                <div className="row">
                    {/* About blurb with logo */}
                    <div className="block col-sm-3">
                        <Link to="/">
                            <img src="images/logo.png" alt="One Ring Rentals" />
                        </Link>
                        <br />
                        <br />
                        <p>
                            One Ring Rentals connects travellers with unique holiday
                            properties across Middle-earth and beyond. Find your perfect
                            escape — from cosy hobbit holes to sweeping Gondorian estates.
                        </p>
                    </div>

                    {/* Helpful links column */}
                    <div className="block col-sm-3">
                        <h3>Helpful Links</h3>
                        <ul className="footer-links">
                            {helpfulLinks.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular regions columns */}
                    <div className="block col-sm-6">
                        <h3>Popular Regions</h3>
                        <div className="row">
                            {[leftRegions, rightRegions].map((group, index) => (
                                <div className="col-sm-6" key={index}>
                                    <ul className="footer-listings">
                                        {group.map((region) => (
                                            <li key={region.id}>
                                                <p>
                                                    <Link to={region.path}>{region.name}</Link>
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright bar with social icons */}
            <div id="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            &copy; 2014 One Ring Rentals
                            <ul className="social-networks">
                                {socialIcons.map((social) => (
                                    <li key={social.id}>
                                        {/* Social links are external — no valid URL, so using span for UI */}
                                        <span
                                            role="img"
                                            aria-label={social.label}
                                            style={{ cursor: "default" }}
                                        >
                                            <i className={`fa ${social.icon}`}></i>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
