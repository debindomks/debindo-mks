import { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";

// Swiper slider imported
import SwiperCore, {
  Navigation,
} from "swiper";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import '../../../assets/css/animate.css';

import ImageShape from "../../../assets/images/shapes/hero-shape.png";

// install Swiper modules
SwiperCore.use([ Navigation]);
class HeroArea extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }
  componentDidMount() {}
  changeDatepickerHaldeller = (date) => {
    this.setState({ startDate: date });
  };
  

  render() {
    const startDate = this.state.startDate;
    const sliderInit = {
      slidesPerView: 1,
      loop: true,
      speed: 2400,
      effect: "slide",
      nav: "true",
      autoplay: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".hero-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function (swiper, current, total) {
          function numberAppend(d) {
            return d < 10 ? "0" + d.toString() : d.toString();
          }
          return numberAppend(current);
        },
      },
    };
    return (
      <>
        <div className="main-slider-wrapper">
          {/* ===============  hero area start  =============== */}
          <div className="hero-area">
            <div className="hero-shape">
              <img src={ImageShape} alt="HeroIMG" />
            </div>

            <div className="container">
              <div className="swiper-container hero-slider overflow-hidden">

                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="slide-content">
                      <h5 style={{'color':'#fff'}}></h5>
                      <h2 style={{'color':'#fff'}}>
                        <span style={{'color':'#fff'}}></span>
                      </h2>
                      <p style={{
                        'fontFamily':'Dancing Script, cursive',
                        'fontSize':'2.5em',
                        'color':'#fff'}}></p>

                      <div className="slider-btns">

                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
          {/* ===============  hero area end  =============== */}

        </div>
      </>
    );
  }
}

export default HeroArea;
