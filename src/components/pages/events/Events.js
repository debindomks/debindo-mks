import $ from "jquery";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import
import EventIMFG1 from "../../../assets/images/event/ev-md1.png";
import EventIMFG10 from "../../../assets/images/event/ev-md10.png";
import EventIMFG11 from "../../../assets/images/event/ev-md11.png";
import EventIMFG12 from "../../../assets/images/event/ev-md12.png";
import EventIMFG2 from "../../../assets/images/event/ev-md2.png";
import EventIMFG3 from "../../../assets/images/event/ev-md3.png";
import EventIMFG4 from "../../../assets/images/event/ev-md4.png";
import EventIMFG5 from "../../../assets/images/event/ev-md5.png";
import EventIMFG6 from "../../../assets/images/event/ev-md6.png";
import EventIMFG7 from "../../../assets/images/event/ev-md7.png";
import EventIMFG8 from "../../../assets/images/event/ev-md8.png";
import EventIMFG9 from "../../../assets/images/event/ev-md9.png";
class Events extends Component {
  componentDidMount(){
    new WOW.WOW().init();
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
        {/* ===============  Event Area start  =============== */}
        <div className="event-area">
          <div className="container position-relative pt-110">
            <div className="row">
              <div className="col-lg-12">
                <div className="background-title text-style-one">

                </div>
                <div className="section-head">
                  <p><span className="team-2x"></span></p>
                </div>
              </div>
            </div>             
              {/* wew */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h3><span><b>E V E N T</b></span></h3>
                  <hr/>
                </div>
              </div>

              <br/>

              <div className="row text-center">
                <div className="col-lg-3 col-md-3 col-sm-3" style={{'backgroundColor':'#ededed','padding':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/qqyiqqfya/event/LOGO_EKSPO_REI_8ML5g-SVB.png" alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info text-left">

                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-3 col-md-3 col-sm-3" style={{'backgroundColor':'#ededed','paddingLeft':'2em','paddingRight':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/qqyiqqfya/event/LOGO_IDEAS_GrDHW2YDe.png" style={{'marginTop':'75px'}} alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info">

                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-3 col-md-3 col-sm-3" style={{'backgroundColor':'#ededed','padding':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/qqyiqqfya/event/LOGO_CSS_vvYiQCI0F.png"  alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info">

                    </div>
                  </div>
                </div>
              </div>

              <br />

              <div className="row text-center">

                <div className="col-lg-3 col-md-3 col-sm-3" style={{'backgroundColor':'#ededed','padding':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/qqyiqqfya/event/LOGO_KKIN_VIII_eIo_UOp7H.png" alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info">

                    </div>
                  </div>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-1"></div>

                <div className="col-lg-3 col-md-3 col-sm-3" style={{'backgroundColor':'#ededed','padding':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/qqyiqqfya/event/LOGO_TANJUNG_BUNGA_ZtsYKCEb_.png" alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info text-left">

                    </div>
                  </div>
                </div>
                
                <div className="col-lg-1 col-md-1 col-sm-1"></div>

                <div className="col-lg-3 col-md-3 col-sm-3" style={{'backgroundColor':'#ededed','padding':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/qqyiqqfya/event/LOGO_IDEAL_HOME_JeTt-JzIU.png" alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info">

                    </div>
                  </div>
                </div>

              </div>

              {/* wew */}
            
          </div>
        </div>
        {/* ===============  Event Area end  =============== */}
      </>
    );
  }
}

export default Events;
