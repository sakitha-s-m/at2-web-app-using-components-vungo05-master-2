import React from "react";
//import the regions components
import Regions from "./Regions";

//define regions page compo
function RegionsPage() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <h1 className="section-title">Regions in Australia</h1>
            <Regions />
          </div>
        </div>
      </div>
    </div>
  );
}

//export function
export default RegionsPage;
