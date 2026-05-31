import React, { useState } from "react";
import travelGuides from "../../data/travelGuides";

// Renders star icons based on a numeric rating out of 5
function StarRating({ rating }) {
    return (
        <span>
            {[1, 2, 3, 4, 5].map((star) => (
                <i
                    key={star}
                    className="fa fa-star"
                    style={{ color: star <= rating ? "#f0a500" : "#ccc", marginRight: "2px" }}
                ></i>
            ))}
        </span>
    );
}

function TravelGuides() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleTips = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div>
            {/* Intro description */}
            <p style={{
                marginBottom: "40px",
                fontSize: "15px",
                lineHeight: "1.8",
                textAlign: "center",
                maxWidth: "50%",
                marginLeft: "auto",
                marginRight: "auto",
            }}>
                Explore our hand-picked travel guides for the most remarkable destinations
                across Middle-earth. From cosy hobbit retreats to grand citadels,
                each guide includes local tips, best travel times, and everything you need
                to plan the perfect stay.
            </p>

            {travelGuides.map((guide) => (
                <div
                    key={guide.id}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid #e4e4e4",
                        borderRadius: "4px",
                        marginBottom: "24px",
                        overflow: "hidden",
                    }}
                >
                    {/* Top row: image left, content right */}
                    <div style={{ display: "flex" }}>

                        {/* Image */}
                        <div style={{ width: "320px", minWidth: "320px", overflow: "hidden" }}>
                            <img
                                src={guide.image}
                                alt={guide.destination}
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                        </div>

                        {/* Content */}
                        <div style={{ padding: "24px 30px", flex: 1 }}>
                            <h3 style={{ marginBottom: "4px" }}>{guide.destination}</h3>

                            <span className="location" style={{ display: "block", marginBottom: "8px" }}>
                                <i className="fa fa-map-marker"></i> {guide.region}
                            </span>

                            <StarRating rating={guide.rating} />

                            <p style={{ fontSize: "14px", marginTop: "12px", lineHeight: "1.7" }}>
                                {guide.description}
                            </p>

                            <p style={{ fontSize: "13px", marginTop: "10px" }}>
                                <i className="fa fa-calendar" style={{ marginRight: "6px", color: "#f0a500" }}></i>
                                <strong>Best time to visit:</strong> {guide.bestTime}
                            </p>

                            <button
                                className="btn btn-default-color"
                                style={{ marginTop: "14px" }}
                                onClick={() => toggleTips(guide.id)}
                            >
                                <i className={`fa ${expandedId === guide.id ? "fa-chevron-up" : "fa-lightbulb-o"}`}></i>
                                {" "}{expandedId === guide.id ? "Hide Local Tips" : "Show Local Tips"}
                            </button>
                        </div>
                    </div>

                    {/* Expandable tips row */}
                    {expandedId === guide.id && (
                        <div style={{
                            backgroundColor: "#f9f9f9",
                            borderTop: "1px solid #e4e4e4",
                            padding: "16px 30px",
                        }}>
                            <strong style={{ fontSize: "13px" }}>
                                <i className="fa fa-lightbulb-o" style={{ color: "#f0a500", marginRight: "6px" }}></i>
                                Local Tips:
                            </strong>
                            <ul style={{ marginTop: "10px", paddingLeft: "18px", fontSize: "13px", lineHeight: "1.9", marginBottom: 0 }}>
                                {guide.tips.map((tip, index) => (
                                    <li key={index} style={{ marginBottom: "4px" }}>
                                        <i className="fa fa-check" style={{ color: "#f0a500", marginRight: "6px" }}></i>
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default TravelGuides;
