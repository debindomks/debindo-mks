import $ from "jquery";
import React, { Component } from "react";
// Swiper slider imported
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class SliderArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.heroTimer();
  }
  heroTimer() {
    $(document).ready(function () {
      /****** custom countdown Js ******/
      function makeTimer() {
        var endTimes = new Date("September 01, 2022 00:00:00");
        var endTime = Date.parse(endTimes) / 1000; //replace these two lines with the unix timestamp from the server

        var nows = new Date();
        var now = Date.parse(nows) / 1000;
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - days * 86400) / 3600);

        var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
        var seconds = Math.floor(
          timeLeft - days * 86400 - hours * 3600 - minutes * 60
        );

        if (hours < "10") {
          hours = "0" + hours;
        }
        if (minutes < "10") {
          minutes = "0" + minutes;
        }
        if (seconds < "10") {
          seconds = "0" + seconds;
        }

        $("#timer #days").html(days);
        $("#timer #hours").html(hours);
        $("#timer #minutes").html(minutes);
        $("#timer #seconds").html(seconds);

        $("#timer_h #days_h").html(days);
        $("#timer_h #hours_h").html(hours);
        $("#timer_h #minutes_h").html(minutes);
        $("#timer_h #seconds_h").html(seconds);

        $("#timer_h2 #days_h2").html(days);
        $("#timer_h2 #hours_h2").html(hours);
        $("#timer_h2 #minutes_h2").html(minutes);
        $("#timer_h2 #seconds_h2").html(seconds);
      }

      setInterval(function () {
        makeTimer();
      }, 1000);

      /****** custom countdown Js end ******/
    });
  }
  render() {
    const sliderInit = {
      slidesPerView: 1,
      loop: true,
      speed: 2400,
      navigation: false,
      effect: "slide",
      nav: "true",
      autoplay: true,
    };

    return (
      <>
        {/* ===============  Hero style two start =============== */}
        <div className="hero-style-two position-relative">
          <div className="swiper hero-two-slider">
            <Swiper {...sliderInit} className="swiper-wrapper">
              <SwiperSlide className="hero-two-item hero-two-item-1 swiper-slide" style={{backgroundImage: `url(https://ik.imagekit.io/qqyiqqfya/home/slide/MICE_DSX9zTw79.png)`}}>
                <div className="hero-background-layer"></div>
                <div className="container">
                <div className="hero-content-layer">
                    <h5>&nbsp;</h5>
                    <h2 style={{visibility:'hidden'}}>EVENTS, MEETUPS &amp; CONFERENCES</h2>
                    <div className="hero-featured-countdown" id="timer_h">
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box" style={{visibility:'hidden'}}>
                        <h3 id="seconds_h">05</h3>
                        <p>Secoend</p>
                      </div>
                    </div>
                    <div className="hero-btns" style={{visibility:'hidden'}}>
                      <a href="event.html" className="primary-btn-fill-s2">
                        Book Now
                      </a>
                      <a
                        href="event-details.html"
                        className="primary-btn-outline-s2"
                      >
                        View Details
                      </a>
                    </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero-two-item hero-two-item-1 swiper-slide" style={{backgroundImage: `url(https://ik.imagekit.io/qqyiqqfya/home/slide/MEETING_B-D4-MgC3.png)`}}>
                <div className="hero-background-layer"></div>
                <div className="container">
                <div className="hero-content-layer">
                    <h5>&nbsp;</h5>
                    <h2 style={{visibility:'hidden'}}>EVENTS, MEETUPS &amp; CONFERENCES</h2>
                    <div className="hero-featured-countdown" id="timer_h">
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box" style={{visibility:'hidden'}}>
                        <h3 id="seconds_h">05</h3>
                        <p>Secoend</p>
                      </div>
                    </div>
                    <div className="hero-btns" style={{visibility:'hidden'}}>
                      <a href="event.html" className="primary-btn-fill-s2">
                        Book Now
                      </a>
                      <a
                        href="event-details.html"
                        className="primary-btn-outline-s2"
                      >
                        View Details
                      </a>
                    </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero-two-item hero-two-item-1 swiper-slide" style={{backgroundImage: `url(https://ik.imagekit.io/qqyiqqfya/home/slide/INCENTIVE_AND_CORPORATE_EVENT_U2ZDQrLRE.png)`}}>
                <div className="hero-background-layer"></div>
                <div className="container">
                <div className="hero-content-layer">
                    <h5>&nbsp;</h5>
                    <h2 style={{visibility:'hidden'}}>EVENTS, MEETUPS &amp; CONFERENCES</h2>
                    <div className="hero-featured-countdown" id="timer_h">
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box" style={{visibility:'hidden'}}>
                        <h3 id="seconds_h">05</h3>
                        <p>Secoend</p>
                      </div>
                    </div>
                    <div className="hero-btns" style={{visibility:'hidden'}}>
                      <a href="event.html" className="primary-btn-fill-s2">
                        Book Now
                      </a>
                      <a
                        href="event-details.html"
                        className="primary-btn-outline-s2"
                      >
                        View Details
                      </a>
                    </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero-two-item hero-two-item-1 swiper-slide" style={{backgroundImage: `url(https://ik.imagekit.io/qqyiqqfya/home/slide/CONFERENCE_JD1SAWd_x.png)`}}>
                <div className="hero-background-layer"></div>
                <div className="container">
                <div className="hero-content-layer">
                    <h5>&nbsp;</h5>
                    <h2 style={{visibility:'hidden'}}>EVENTS, MEETUPS &amp; CONFERENCES</h2>
                    <div className="hero-featured-countdown" id="timer_h">
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box" style={{visibility:'hidden'}}>
                        <h3 id="seconds_h">05</h3>
                        <p>Secoend</p>
                      </div>
                    </div>
                    <div className="hero-btns" style={{visibility:'hidden'}}>
                      <a href="event.html" className="primary-btn-fill-s2">
                        Book Now
                      </a>
                      <a
                        href="event-details.html"
                        className="primary-btn-outline-s2"
                      >
                        View Details
                      </a>
                    </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero-two-item hero-two-item-1 swiper-slide" style={{backgroundImage: `url(https://ik.imagekit.io/qqyiqqfya/home/slide/EXHIBITION_tJPTL_fjs.png)`}}>
                <div className="hero-background-layer"></div>
                <div className="container">
                <div className="hero-content-layer">
                    <h5>&nbsp;</h5>
                    <h2 style={{visibility:'hidden'}}>EVENTS, MEETUPS &amp; CONFERENCES</h2>
                    <div className="hero-featured-countdown" id="timer_h">
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box">

                      </div>
                      <div className="hero-countdown-box" style={{visibility:'hidden'}}>
                        <h3 id="seconds_h">05</h3>
                        <p>Secoend</p>
                      </div>
                    </div>
                    <div className="hero-btns" style={{visibility:'hidden'}}>
                      <a href="event.html" className="primary-btn-fill-s2">
                        Book Now
                      </a>
                      <a
                        href="event-details.html"
                        className="primary-btn-outline-s2"
                      >
                        View Details
                      </a>
                    </div>
                </div>
                </div>
              </SwiperSlide>              
            </Swiper>
          </div>
          <div className="hero-pagination d-lg-flex flex-column d-none position-absolute w-auto" />
        </div>
        {/* ===============  Hero style two end =============== */}
      </>
    );
  }
}

export default SliderArea;