import React from "react";

import australianRegions from "../../data/australianRegions";

function Regions() {

    //return the html code:)
    return (
        <div>
            <div className="grid-style1 clearfix">
                {/* //mapping data set */}
                {australianRegions.map((region) => (
                    <div className="item col-md-4" key={region.id}>
                        <div className="image" style={{ marginBottom: "15px"}}>
                            <img
                                src={region.image}
                                alt={region.label}
                            />
                        </div>
                        <h3>{region.label}</h3>
                        <span className="location">
                            <i className="fa fa-map-marker"></i> {region.location}
                        </span>

                        {/* Region description */}
                        <p style={{ fontSize: "13px", marginTop: "8px" }}>
                            {region.description}
                        </p>

                        {/* Number of available properties */}
                        <p style={{ fontWeight: "bold", marginTop: "5px" }}>
                            <i className="fa fa-home"></i> {region.properties} properties available
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

//export the fucntionn
export default Regions;