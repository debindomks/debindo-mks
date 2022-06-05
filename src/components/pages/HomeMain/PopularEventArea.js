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
class PopularEventArea extends Component {
  componentDidMount(){
    new WOW.WOW().init()
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
                  <h2>Event</h2>
                </div>
                <div className="section-head">
                  <h3>Next Event</h3>
                </div>
              </div>
            </div>
            <div className="row">
              
              <div className="col-lg-12">
                <div className="all-event-cards">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-event1"
                      role="tabpanel"
                      aria-labelledby="pills-tab1">
                      <div className="row">

                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={`https://ik.imagekit.io/qqyiqqfya/event/EKSPO_REI_-xbIJfzdT.png`}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    Juni 1, 2022
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> 
                                    Mal Ratu Indah, Makassar
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title" style={{'fontSize':'1.1em'}}>
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
Ekspo REI 2022 merupakan Ikon pameran perumahan 
terbesar yang ada di Sulawesi Selatan, yang bekerja 
sama dengan DPD REI Sulawesi Selatan yang senantiasa
terus berinovasi menghadirkan solusi bagi masyarakat
dalam menentukan pilihan property, ada puluhan stand
yang akan memberikan informasi dan memperkenalkan 
produk perumahan komersil dan subsidi, pengunjung 
Ekspo REI juga akan dihibur oleh talkshow dan live musik.                                  
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={`https://ik.imagekit.io/qqyiqqfya/event/PROPERTY_bPVzbeEK2.png`}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2022
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Mall Ratu Indah, Makassar
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title" style={{'fontSize':'1.1em'}}>
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
Property & Building Material Expo merupakan fasilitator 
antara pelaku usaha dan calon pembeli baik material 
building maupun property secara langsung, yang bekerja 
sama dengan DPD REI Sulawesi Selatan, bertujuan untuk 
menjadi faktor pendukung akselerasi industri property 
Indonesia. Yang menarik pada pameran kali ini adalah
promo-promo yang dihadirkan oleh setiap booth sangat 
luar biasa dikarenakan bekerja sama dengan beberapa
bank dengan bunga 0-5%
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div
                          className="col-lg-4 col-md-6 wow fadeInUp animated"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms">
                          <div className="event-card-md">
                            <div className="event-thumb">
                              <img src={`https://ik.imagekit.io/qqyiqqfya/event/IDEAL_HOME_qA7l-Ub4w.png`}  alt="Imgs" />
                              <div className="event-lavel">
                                <i className="bi bi-diagram-3" />
                                <span>500 Seat</span>
                              </div>
                            </div>
                            <div className="event-content">
                              <div className="event-info">
                                <div className="event-date">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-calendar2-week" />{" "}
                                    January 21, 2022
                                  </Link>
                                </div>
                                <div className="event-location">
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> Mall Ratu Indah, Makassar
                                  </Link>
                                </div>
                              </div>
                              <h5 className="event-title" style={{'fontSize':'1.1em'}}>
                                <Link
                                  onClick={this.scrollTop}
                                  to={`${process.env.PUBLIC_URL}/event-details`}>
Ideal Home 2022 Hadir menjadi fasilitator antara pelaku 
usaha dan calon pembeli baik interior dan furniture 
maupun property secara langsung, serta menjadi faktor
pendukung akselerasi industri property Indonesia. 
Pelaksanaan pameran akan berlangsung selam 5 hari
oleh berbagai peserta dari developer, perbankan, home
apliance, interior furniture, dan produk penunjang lainnya.
                                </Link>
                              </h5>
                              <div className="event-bottom">
                                <div className="event-readme">
                                  <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                  </Link>
                                </div>
                                <div className="event-share-icons">
                                  <ul className="share-options">
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
                                  </ul>
                                  <div className="share-btn">
                                    <i className="bi bi-share" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                                       


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Event Area end  =============== */}
      </>
    );
  }
}

export default PopularEventArea;
