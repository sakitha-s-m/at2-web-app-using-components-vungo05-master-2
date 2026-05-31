import React from "react";
import news from "../../data/news"

//define news component
function News() {
    //return html code:
    return (
        <div className="grid-style1 clearfix">
            {/* mapping data set */}
            {news.map((item) => (
                <div key={item.id} className="item col-md-4">


                    <div className="image">
                        <img
                            src={item.image}
                            alt={item.title}
                        />
                    </div>

                    <div className="tag">
                        <i className="fa fa-file-text"></i>
                    </div>

                    <div className="info-blog">
                        <ul className="top-info">
                            <li>
                                <i className="fa fa-user"></i> {item.author}
                            </li>
                            <li>
                                <i className="fa fa-clock-o"></i> {item.date}
                            </li>
                        </ul>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

//export the function
export default News;