import React from "react";

import properties from "../../data/properties";

//define function
function FeaturedProperties() {
    return (
        <div>
            <h1 className="section-title">Featured Properties</h1>

            <div className="grid-style1 clearfix">
                {properties.map((property) => (
                    <div className="item col-md-4" key={property.id}>
                        <div className="image">
                            <img src={property.image} alt={property.title} />
                        </div>
                        <ul className="amenities">
                            <li><i className="icon-bedrooms"></i>{property.bedrooms} bed</li>
                            <li><i className="icon-bathrooms"></i>{property.bathrooms} bath</li>
                        </ul>
                        <div className="info">
                            <h3>{property.title}</h3>
                            <span className="location">
                                <i className="fa fa-map-marker"></i> {property.location}
                            </span>
                        </div>

                        <div className="price">
                            <span>{property.price}</span>
                            <p>per night</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

//export function
export default FeaturedProperties;