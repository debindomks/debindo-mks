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
        <div className="recent-schedule-area ">
          <div className="container position-relative  pt-120 ">
            <div className="row">
              <div className="col-lg-12">
                <div className="background-title text-style-one">
                  <h2>schedule</h2>
                </div>
                <div className="section-head">
                  <h3>Past Event</h3>
                </div>
              </div>
            </div>
            <div className="row position-relative">
              <div className="col-lg-12 overflow-hidden ">
                <div className="swiper-container schedule-slider position-relative">

                      <div className="schedule-wrapper">
                        <div className="event-date">
                          <h3></h3>
                        </div>
                        <div
                          className="single-schedule-card row wow fadeInLeft animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="col-xl-4 col-lg-5" style={{
                              'content': "",
                              'backgroundColor':'#D3E0F3',
                              'opacity': 0.7,
                              'top': 0,
                              'left': 0,
                              'bottom': 0,
                              'right': 0,
                              'z-index': -1,
                              'borderRadius': '0.9em'
                            }}>
                            <div className="single-schedule-left">
                              <img src="https://ik.imagekit.io/qqyiqqfya/event/HARKOPNAS__NDA9S6uS.png" style={{
                              'backgroundRepeat':'no-repeat',
                              'backgroundPosition':'center',
                              'backgroundSize':'cover',
                              'border':'none'                        
                              }} /> 
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7">
                            <div className="single-schedule-right">
                              <h3 className="schedule-title">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  {/* Nulla nisl tellus hendrerit nec dignissim
                                  pellentesqu posu in est Suspendisse bibendum. */}
                                </Link>
                              </h3>
                              <p className="schedule-discription" style={{'fontSize':'0.9em'}}>
                              Harkopnas Expo merupakan etalase pencapaian gerakan koperasi nasional bersama Dekopin dan 
pemerintah, baik dipusat maupun di daerah, perusahaan swasta, BUMN dan BUMD di seluruh Indonesia. 
Harkopnas Expo juga menjadi wadah strategis untuk mempromosikan produk-produk unggulan beserta 
peluang bisnis dan investasi yang dimilikikoperasi dan UMKM diseluruh Indonesia. Acara Harkopnas
Expo yang dibuka Gubernur Jawa Tengah Ganjar Pranowoitu telah diikuti 400 peserta, Puncak Harkopnas 
Expo merupakan pelaksanaan yang paling megah, dan semarak dari yang pernah dilaksanakan selama ini. 
Pelaksanaan sukses kerena dukungan dari masyarakat.

                              </p>

                              <div className="schedule-topics">
                                <div className="row">
                                  <div className="col-md-3">
                                    <ul>
                                      <li>
                                        <i className="fab fa-instagram" />&nbsp;
                                        harkopnasexpo
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-3">
                                    <ul>
                                      <li>
                                        <i className="fab fa-facebook-f" />&nbsp;
                                        harkopnas expo
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-5">
                                    <ul>
                                      <li>
                                        <i className="fab fa-google" />&nbsp;
                                        harkopnasexpo19@gmail.com
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div
                          className="single-schedule-card row wow fadeInRight animated"
                          data-wow-delay="300ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="col-xl-4 col-lg-5" style={{
                              'content': "",
                              'backgroundColor':'#D3E0F3',
                              'opacity': 0.7,
                              'top': 0,
                              'left': 0,
                              'bottom': 0,
                              'right': 0,
                              'z-index': -1,
                              'borderRadius': '0.9em'
                            }}>
                            <div className="single-schedule-left">
                              <img src="https://ik.imagekit.io/qqyiqqfya/event/SULSEL_EXPO_bUOsQ3A0c.png" style={{
                              'backgroundRepeat':'no-repeat',
                              'backgroundPosition':'center',
                              'backgroundSize':'cover',
                              'border':'none'                        
                              }} />
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7">
                            <div className="single-schedule-right">
                              <h3 className="schedule-title">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  {/* Nulla nisl tellus hendrerit nec dignissim
                                  pellentesqu posu in est Suspendisse bibendum. */}
                                </Link>
                              </h3>
                              <p className="schedule-discription" style={{'fontSize':'0.9em'}}>
                              Sulsel Expo hadir sebagai visualisasi kinerja pembangunan di Sulawesi Selatan, bekerja sama dengan 
pemerintah  provinsi Sulawesi Selatan dalam menciptakan akselerasi pembangunan khususnya disektor 
pariwisata. kegiatan Sulsel  Expo kita harapkan dapat membawa dampak positif terhadap perputaran 
perekonomian masyarakat Sulawesi Selatan. Acara yang diikuti 111 peserta ini terdiri dari perwakilan 
organisasi perangkat daerah Sulawesi Selatan, instansi vertikal,Pemkab, Pemkot, Pemprov, BUMN, 
dan BUMD.
                              </p>


                              <div className="schedule-topics">
                                <div className="row">
                                  <div className="col-md-3">
                                    <ul>
                                      <li>
                                        <i className="fab fa-instagram" />&nbsp;
                                        sulselexpo2019
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-3">
                                    <ul>
                                      <li>
                                        <i className="fab fa-facebook-f" />&nbsp;
                                        sulsel expo
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-5">
                                    <ul>
                                      <li>
                                        <i className="fab fa-google" />&nbsp;
                                        sulselexpo19@gmail.com
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>                              

                            </div>
                          </div>
                        </div>
                        <div
                          className="single-schedule-card row fadeInRight animated"
                          data-wow-delay="500ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="col-xl-4 col-lg-5" style={{
                              'content': "",
                              'backgroundColor':'#D3E0F3',
                              'opacity': 0.7,
                              'top': 0,
                              'left': 0,
                              'bottom': 0,
                              'right': 0,
                              'z-index': -1,
                              'borderRadius': '0.9em'                              
                            }}>
                            <div className="single-schedule-left">
                              <img src="https://ik.imagekit.io/qqyiqqfya/event/CELEBES_CRAFT_NOBIhq2H1t.png" style={{
                              'backgroundRepeat':'no-repeat',
                              'backgroundPosition':'center',
                              'backgroundSize':'cover',
                              'border':'none'                
                              }} />
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7">
                            <div className="single-schedule-right">
                              <h3 className="schedule-title">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  {/* Nulla nisl tellus hendrerit nec dignissim
                                  pellentesqu posu in est Suspendisse bibendum. */}
                                </Link>
                              </h3>
                              <p className="schedule-discription" style={{'fontSize':'0.9em'}}>
                              Celebes Craft 2019 merupakan suatu  gelaran event yang fokus terhadap industri kreatif danusaha kecil 
dan menengah (UMKM). Bertajuk the finest fashion, batik, bordir dan craft event ini melibatkan ratusan 
peserta terdiri dari dinas perindustrian se Indonesia dandinas perindustrian se provinsi Sulawesi Selatan. 
Celebes Craft yang di inisiasi Dinas Perindustrian  Sulawesi Selatan dan Debindo menghadirkan puluhan 
IKM dari 24 kabupaten kota dengan berbagai produk unggulan dari dearah masing-masing.
                              </p>

                              <div className="schedule-topics">
                                <div className="row">
                                  <div className="col-md-3">
                                    <ul>
                                      <li>
                                        <i className="fab fa-instagram" />&nbsp;
                                        celebescraft
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-3">
                                    <ul>
                                      <li>
                                        <i className="fab fa-facebook-f" />&nbsp;
                                        celebes craft
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-5">
                                    <ul>
                                      <li>
                                        <i className="fab fa-google" />&nbsp;
                                        celebescraft@gmail.com
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        {/* <div
                          className="single-schedule-card row wow fadeInLeft animated"
                          data-wow-delay="600ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="col-xl-4 col-lg-5 p-0">
                            <div className="single-schedule-left">
                              <div className="schedule-top">
                                <h4>03.00 PM - 04.00 PM</h4>
                                <h5>
                                  Room No - <span>01</span>
                                </h5>
                              </div>
                              <div className="schedule-bottom">
                                <div className="speaker-image">
                                  <img src={speaker4} alt="RecentSheduelIMG" />
                                </div>
                                <div className="speaker-info">
                                  <h4>Michael Etha</h4>
                                  <p>Marketing</p>
                                  <ul className="speaker-social-links">
                                    <li>
                                      <Link onClick={this.scrollTop} to={"#"}>
                                        <i className="fab fa-facebook-f" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link onClick={this.scrollTop} to={"#"}>
                                        <i className="fab fa-instagram" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link onClick={this.scrollTop} to={"#"}>
                                        <i className="fab fa-linkedin-in" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link onClick={this.scrollTop} to={"#"}>
                                        <i className="fab fa-twitter" />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7 p-0">
                            <div className="single-schedule-right">
                              <h3 className="schedule-title">
                                <Link onClick={this.scrollTop} to={"#"}>
                                  Nulla nisl tellus hendrerit nec dignissim
                                  pellentesqu posu in est Suspendisse bibendum.
                                </Link>
                              </h3>
                              <p className="schedule-discription">
                                Cras semper, massa vel aliquam luctus, eros odio
                                tempor turpis, ac placerat metus tortor eget
                                magna. Donec mattis posuere pharetra. Donec
                                vestibulum ornare velit ut sollicitudin ut
                                sollicitudin.
                              </p>
                              <div className="schedule-topics">
                                <h5>Topic</h5>
                                <div className="row">
                                  <div className="col-md-4">
                                    <ul>
                                      <li>
                                        <i className="bi bi-check" /> Color
                                      </li>
                                      <li>
                                        <i className="bi bi-check" />{" "}
                                        Typhography
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4">
                                    <ul>
                                      <li>
                                        <i className="bi bi-check" /> Allingment
                                      </li>
                                      <li>
                                        <i className="bi bi-check" />{" "}
                                        Development
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4">
                                    <ul>
                                      <li>
                                        <i className="bi bi-check" /> Graphic
                                        Design
                                      </li>
                                      <li>
                                        <i className="bi bi-check" /> Web Design
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        
                      </div>

                </div>
              </div>

            </div>
          </div>
        </div>
        <br></br>
        {/* ===============  Recent schedule end  =============== */}
      </>
    );
  }
}

export default Schedule;
