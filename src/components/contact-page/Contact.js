import React, { useState } from "react";
//defines function
function Contact() {
    // Track whether the form has been submitted
    const [submitted, setSubmitted] = useState(false);

    // Controlled form field state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // Update state when any input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default browser form submission
        setSubmitted(true);
    };

    // Show a thank you message after submission
    if (submitted) {
        return (
            <div className="alert alert-success" style={{ padding: "20px", marginTop: "20px" }}>
                <h3>Thank you, {formData.name}!</h3>
                <p>
                    Your message has been received. We will get back to you at{" "}
                    <strong>{formData.email}</strong> as soon as possible.
                </p>
            </div>
        );
    }

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Send Message
                </button>
            </form>
        </div>
    );
};
//export function
export default Contact;