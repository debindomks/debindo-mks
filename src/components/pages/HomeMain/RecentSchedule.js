import React, { Component } from "react";
import { Link } from "react-router-dom";
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
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
// image import
import speaker1 from "../../../assets/images/speaker/speaker-sm1.png";
import speaker2 from "../../../assets/images/speaker/speaker-sm2.png";
import speaker3 from "../../../assets/images/speaker/speaker-sm3.png";
import speaker4 from "../../../assets/images/speaker/speaker-sm4.png";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class Schedule extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const sliderInit = {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 40,
      loop: true,
      centeredSlides: "true",
      roundLengths: true,
      navigation: {
        nextEl: ".schedule-button-next",
        prevEl: ".schedule-button-prev",
      },
    };
    return (
      <>
        {/* ===============  Recent schedule start  =============== */}
        <div className="recent-schedule-area " style={{'backgroundColor':'#f4f4f4'}}>
          <div className="container position-relative  pt-80 " >
            <div className="row">
              <div className="col-lg-12">
                <div className="background-title text-style-one">

                </div>
                <div className="section-head">

                </div>
              </div>
            </div>
            <div className="row position-relative" style={{'paddingTop':0}}>
              <div className="col-lg-12 overflow-hidden" style={{'paddingTop':0}}>
                <div className="swiper-container schedule-slider position-relative text-center" style={{'marginTop':0}}>

                  <img src="https://ik.imagekit.io/qqyiqqfya/home/here_our_service_MtTTwxvx9.png" width="80%" />

                  <br/><br/><br/>

                </div>
              </div>

            </div>
          </div>
        </div>
        {/* ===============  Recent schedule end  =============== */}
      </>
    );
  }
}

export default Schedule;
