import React from "react";
import TravelGuides from "./TravelGuides";

// Travel Guides page — 5th page of the application
function TravelGuidesPage() {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="main col-sm-12">
                        <h1 className="section-title">Travel Guides</h1>
                        <TravelGuides />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TravelGuidesPage;
