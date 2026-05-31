import React from "react";
import { Link } from "react-router-dom";
import popularRegions from "../../data/popularRegions";

//define function
function PopularRegions() {
    return (
        <div>
            <h1 className="section-title">Popular Regions</h1>
            <div id="regions">
                {popularRegions.map((region) => (
                    <div className="item" key={region.id}>
                        <Link to="/regions">
                            <img src={region.image} alt={region.title} />
                            <h3>{region.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

//export function
export default PopularRegions;