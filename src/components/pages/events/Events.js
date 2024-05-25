import $ from "jquery";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import

// https://ik.imagekit.io/rwvfvdma8/events/2024/1.%20LOGO%20EKSPO%20REI.png
// https://ik.imagekit.io/rwvfvdma8/events/2024/2.%20LOGO%20LITDIG.png
// https://ik.imagekit.io/rwvfvdma8/events/2024/3.%20LOGO%20HARKOPNAS.png
// https://ik.imagekit.io/rwvfvdma8/events/2024/4.%20LOGO%20PROPERTY.png
// https://ik.imagekit.io/rwvfvdma8/events/2024/5.%20LOGO%20ISMEEF.png
// https://ik.imagekit.io/rwvfvdma8/events/2024/6.%20LOGO%20IDEAL%20HOME.png
// https://ik.imagekit.io/rwvfvdma8/events/2024/7.%20LOGO%20KONSTRUKSI%20INDONESIA.png
// https://ik.imagekit.io/rwvfvdma8/events/2024/8.%20LOGO%20SULSEL%20EXPO.png


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
                  <h3><span><b>EVENT OF THE YEAR</b></span></h3>
                  <hr/>
                </div>
              </div>

              <br/>

              <div className="row text-center">
                <div className="col-lg-3 col-md-3 col-sm-3" style={{'borderRadius':'1em','backgroundColor':'#ededed','padding':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/rwvfvdma8/events/2024/1.%20LOGO%20EKSPO%20REI.png" alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info text-left">
                      <p><b>28 Februari - 3 Maret 2024</b></p>
                      <p><b>Mall Ratu Indah Makassar</b></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-3 col-md-3 col-sm-3" style={{'borderRadius':'1em','backgroundColor':'#ededed','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/rwvfvdma8/events/2024/2.%20LOGO%20LITDIG.png" style={{'marginTop':'25px'}} alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info">
                      <p><b>Februari - Oktober</b></p>
                      <p><b>Kalimantan, Indonesia</b></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-3 col-md-3 col-sm-3" style={{'borderRadius':'1em','backgroundColor':'#ededed','padding':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/rwvfvdma8/events/2024/3.%20LOGO%20HARKOPNAS.png"  alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info">
                      <p><b>11 - 14 Juli 2024</b></p>
                      <p><b>Tanjung Pinang</b></p>
                    </div>
                  </div>
                </div>
              </div>

              <br />

              <div className="row text-center">

                <div className="col-lg-3 col-md-3 col-sm-3" style={{'borderRadius':'1em','backgroundColor':'#ededed','paddingTop':'3.5em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/rwvfvdma8/events/2024/4.%20LOGO%20PROPERTY.png" alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info">
                      <p><b>28 Agustus - 1 September 2024</b></p>
                      <p><b>Trans Studio Mall Makassar</b></p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-1"></div>

                <div className="col-lg-3 col-md-3 col-sm-3" style={{'borderRadius':'1em','backgroundColor':'#ededed','padding':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <br/>
                      <img src="https://ik.imagekit.io/rwvfvdma8/events/2024/5.%20LOGO%20ISMEEF.png" alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info text-left">
                      <p><b>21 - 24 Agustus 2024</b></p>
                      <p><b>Grand City Surabaya</b></p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-1 col-md-1 col-sm-1"></div>

                <div className="col-lg-3 col-md-3 col-sm-3" style={{'borderRadius':'1em','backgroundColor':'#ededed','padding':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/rwvfvdma8/events/2024/6.%20LOGO%20IDEAL%20HOME.png" alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info">
                      <p><b>6 - 10 November 2024</b></p>
                      <p><b>Phinisi Point Mall Makassar</b></p>
                    </div>
                  </div>
                </div>

              </div>
              
              <br/>

              <div className="row text-center">

                <div className="col-lg-3 col-md-3 col-sm-3" style={{'borderRadius':'1em','backgroundColor':'#ededed','padding':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/rwvfvdma8/events/2024/7.%20LOGO%20KONSTRUKSI%20INDONESIA.png" alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info">
                    <p><b>6 - 8 November 2024</b></p>
                    <p><b><small>Indonesia Convention Exhibition (ICE)</small></b></p>                    
                    </div>
                  </div>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-1"></div>

                <div className="col-lg-3 col-md-3 col-sm-3" style={{'borderRadius':'1em','backgroundColor':'#ededed','padding':'2em','margin':'2px'}}>
                  <div className="speaker-card">
                    <div className="speaker-image">
                      <img src="https://ik.imagekit.io/rwvfvdma8/events/2024/8.%20LOGO%20SULSEL%20EXPO.png" alt="Imgs" />
                    </div>
                    <div className="custom-speaker-info">
                      <p><b>6 - 10 Oktober 2024</b></p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-1"></div>                

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
