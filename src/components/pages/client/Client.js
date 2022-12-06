import $ from "jquery";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Client extends Component {
  componentDidMount() {
    this.inItScripts();
  }
  
  inItScripts() {
    $('.main-nav ul li a').css('color', '#000');
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 20) {
        
      } else {
        $('.main-nav ul li a').css('color', '#000');
      };
    });
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
       
        {/* ===============  client area start =============== */}
        <div className="speakers-wrapper ">
          <div className="container position-relative pt-110">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="background-title text-style-one">
       
                </div>
                <div className="section-head">
                  <p><span className="team-2x">CLIENTS</span></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <img src="https://ik.imagekit.io/qqyiqqfya/clients/client2_UIt-cGVtd.png" width="100%" />
              </div>
            </div>

          </div>
        </div>
        {/* ===============  client area end =============== */}
      </>
    );
  }
}

export default Client;
