import React from "react";
import { Link } from "react-router-dom";

import articles from "../../data/articles";

//define function 
function RecentArticles() {
    return (
        <div>
            <h1 className="section-title">Recent Articles</h1>

            <div className="grid-style1">
                {articles.map((article) => (
                    <div className="item col-md-4" key={article.id}>
                        <div className="image">
                            <Link to="/news">
                                <span className="btn btn-default">
                                    <i className="fa fa-file-o"></i> Read More
                                </span>
                            </Link>
                            <img src={article.image} alt={article.title} />
                        </div>
                        <div className="tag"><i className="fa fa-file-text"></i></div>
                        <div className="info-blog">
                            <ul className="top-info">
                                <li><i className="fa fa-calendar"></i> {article.date}</li>
                                <li><i className="fa fa-comments-o"></i> {article.comments}</li>
                                <li>
                                    <i className="fa fa-tags"></i> {article.tags}
                                </li>
                            </ul>
                            <h3>
                                <Link to="/news">{article.title}</Link>
                            </h3>
                            <p>{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="center">
                <Link to="/news" className="btn btn-default-color">
                    View All News
                </Link>
            </div>
        </div>
    );
};

//export function
export default RecentArticles;