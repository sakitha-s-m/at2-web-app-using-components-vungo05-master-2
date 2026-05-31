import React from "react";
import News from "./News";

//define news page compo
function NewsPage() {
    return (
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">Latest News</h1>
              <News />
            </div>
          </div>
        </div>
      </div>
    );
};

//export function
export default NewsPage;