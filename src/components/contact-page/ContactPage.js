import React from "react";
import Contact from "./Contact";
//defines function
function ContactPage() {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="main col-sm-12">
                        <h1 className="section-title">Contact Us</h1>
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    );
};
//export functoun
export default ContactPage;
