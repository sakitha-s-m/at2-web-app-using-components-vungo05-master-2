import React from "react";
import deals from "../../data/deals";
import activities from "../../data/activities";


//define function
function SideBar() {
    return (
        <div>
            {/* <!-- BEGIN SIDEBAR ABOUT --> */}
            <div className="col-sm-12">
                <h2 className="section-title">Last minute deals</h2>
                <ul className="latest-news">
                    {deals.map((deal) => (
                        <li className="col-md-12" key={deal.id}>
                            <div className="image">
                                <img alt={deal.title} src={deal.image} />
                            </div>

                            <ul className="top-info">
                                <li><i className="fa fa-calendar"></i>{deal.availability}</li>
                            </ul>

                            <h4>
                                {deal.title}
                                <p>{deal.location}</p>
                                <small>{deal.price}</small>
                            </h4>
                        </li>
                    ))}
                </ul>
                <p className="center">
                    <span className="btn btn-fullcolor" style={{ cursor: "default" }}>
                        More Deals
                    </span>
                </p>
            </div>
            {/* <!-- END SIDEBAR ABOUT --> */}
            <div className="col-sm-12">
                <h2 className="section-title">Activity</h2>
                <ul className="activity">
                    {activities.map((item) => (
                        <li className="col-lg-12" key={item.id}>
                            <img src={item.image} alt={item.user} />
                            <div className="info">
                                <h5>
                                    <b>{item.user}</b> {item.action}{" "}
                                    <em>{item.property}</em>
                                </h5>
                                <p>
                                    {item.comment}
                                </p>
                                <h6>{item.time}</h6>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

//export function
export default SideBar;