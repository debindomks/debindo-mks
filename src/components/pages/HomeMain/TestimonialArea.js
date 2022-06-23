import React, { Component } from "react";
// Swiper slider imported
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination
} from "swiper";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
// import image
import QuoteIcon from "../../../assets/images/icons/qoute-icon.png";
import TestimonialShape from "../../../assets/images/shapes/testi-shape.png";
import Reviewer from "../../../assets/images/speaker/reviewer.png";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
class Testimonial extends Component {
  render() {
    const sliderInit = {
      slidesPerView: 1,
      loop: true,
      speed: 2400,
      effect: "slide",
      nav: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function (swiper, current, total) {
          function numberAppend(d) {
            return d < 10 ? "0" + d.toString() : d.toString();
          }
          return numberAppend(current) + `<span></span>` + numberAppend(total);
        },
      },
      navigation: {
        nextEl: ".testi-button-next",
        prevEl: ".testi-button-prev",
      },
    };
    return (
      <>
        {/* ===============  testimonial area start  =============== */}
        <div className="testimonial-area" style={{'backgroundColor':'#fff'}}>
          <div className="position-relative">
            
              
              <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src="https://ik.imagekit.io/qqyiqqfya/home/testimonial_78UrHgZUZ.png" width="100%" />
                </div>
                <div className="col-lg-6">
                    <div className="row align-items-center">
                      <div className="">
                        
                      </div>
                    </div>
                </div>
              </div>

            
          </div>
        </div>
        {/* ===============  testimonial area end  =============== */}
      </>
    );
  }
}

export default Testimonial;
