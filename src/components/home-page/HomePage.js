import React from "react";
import Slider from "./Slider";
import SearchBar from "./SearchBar";
import FeaturedProperties from "./FeaturedProperties";
import PopularRegions from "./PopularRegions";
import RecentArticles from "./RecentArticles";
import SideBar from "./SideBar";

//define home page compo
function HomePage() {
    return(
        <div>
          <Slider />
          <SearchBar />
          <div className="content">
           <div className="container">
            <div className="row">
              <div className="main col-sm-8">
                <FeaturedProperties />
                <PopularRegions />
                <RecentArticles />
              </div>
              <div className="sidebar col-sm-4">
                <SideBar />
              </div>
            </div>
           </div>
          </div>
        </div>
    );
};

//export function
export default HomePage;