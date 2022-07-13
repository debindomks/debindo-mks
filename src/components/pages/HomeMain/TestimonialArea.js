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
        <div className="testimonial-area" style={{'backgroundColor':'#EDF2F2'}}>
          <div className="position-relative">
            
              
              <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src="https://ik.imagekit.io/qqyiqqfya/home/testimonial2_jFxIxQevO.png" width="100%" />
                </div>
{/* testimonial */}
              <div className="col-lg-6">
                  <div className="testimonial-slider-wrapper">
                    <div className="swiper testimonial-slider">
                      <Swiper {...sliderInit} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card">
                            <div className="testimonial-shape">

                            </div>
                            <div className="testimonial-top" style={{'backgroundColor':'#EDF2F2'}}>
                              <div className="reviewer-image">
                                <img src={`https://ik.imagekit.io/qqyiqqfya/testimonial/tr:-w-200,h-200/JUFRI_RAHMAN_WeEDO2P2h.png`}  alt="Imgs" />
                              </div>
                              <div className="reviewer-info" >
                                <h3 className="reviewer-name" style={{'textAlign':'left','fontFamily':'exo-bold'}}>
                                  Jufri Rahman
                                  <p style={{'fontSize':'15px','textAlign':'left !important','fontFamily':'exo-bold'}}>Staf Ahli Menteri PANRB Bidang Otonomi Daerah</p>
                                </h3>
                                <hr/>
                                <p className="customSlider" style={{'fontFamily':'exo-light'}}>
                                PT Debindo Mega Promo merupakan Event Organizer yang 
                                profesional dalam menangani acara dan selalu bisa menyesuaikan
                                tampilan acara yang sedang trend dan yang sedang digemari publik
                                kemampuan Debindo merancang dan mengemas acara dengan
                                ciri dan gaya unik, serta berbeda dengan yang lain
                              </p>                                
                              </div>
                            </div>
                            <div className="review-texts" style={{'backgroundColor':'#EDF2F2'}}>
                             
                            </div>
                          </div>
                        </SwiperSlide>
                       
                      </Swiper>
                    </div>
                    <div className="swiper-pagination" />
                    <div className="testi-arrows text-center d-lg-flex d-none">
                      <div
                        className="testi-button-prev"
                        tabIndex={0}
                        role="button"
                        aria-label="Previous slide">
                        <i className="bi bi-chevron-left" />
                      </div>
                      <div
                        className="testi-button-next"
                        tabIndex={0}
                        role="button"
                        aria-label="Next slide">
                        <i className="bi bi-chevron-right" />
                      </div>
                    </div>
                  </div>
                </div>
{/*  */}
            </div>            
          </div>
        </div>
        {/* ===============  testimonial area end  =============== */}
      </>
    );
  }
}

export default Testimonial;
