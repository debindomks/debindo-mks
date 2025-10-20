import React, { Component } from "react";

import SliderArea from "./SliderArea";

class PrehomePage extends Component {
  render() {
    return (
      <div className="homepage">
        {/* <!-- Start Preloader Area --> */}
       
        <div className="preloader">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <SliderArea />

      </div>        
    );
  }
}

export default PrehomePage;