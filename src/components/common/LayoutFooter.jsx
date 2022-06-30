import React, { Component } from "react";
import { Link } from "react-router-dom";
class LayoutFooter extends Component {
  
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    
    return (
      <>
        {/* ===============  footer area start  =============== */}
        <div className="footer-outer pt-120 ">
          <div className="footer-area">
            <div className="container">
              <div className="footer-wrapper">
                <div className="footer-watermark">

                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-5 order-1">
                    <div className="footer-widget mt-0">
                      <h5 className="footer-widget-title">Quick Link</h5>
                      <div className="footer-links">
                        <ul className="link-list">
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/about`}
                              className="footer-link"
                            >
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/event`}
                              className="footer-link"
                            >
                              Event
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/schedule`}
                              className="footer-link"
                            >
                              Our Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={"#"}
                              className="footer-link"
                            >
                              Gallery
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/speaker`}
                              className="footer-link"
                            >
                              News
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={this.scrollTop}
                              to={"#sponsor-area"}
                              className="footer-link"
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-2 order-3">
                    <div className="footer-about">
                      <div className="footer-logo">
                        <img src={`https://ik.imagekit.io/qqyiqqfya/tr:w-171,h-36/logo_debindo_mega_promo_white_UzLpscEKZ.png`} alt="logo debindo white" />
                      </div>
                      <p>
                        Jl. Lanto dg. pasewang No. 18 F Kel. Maricaya Selatan
                        Kec. Mamajang, Makassar Sulawesi Selatan 90131
                      </p>
                      <ul className="footer-social-icon d-flex">
                        <li>
                          <Link onClick={this.scrollTop} to={"#"} style={{'fontColor':'#fff'}}>
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link onClick={this.scrollTop} to={"#"}>
                            <i className="fa fa-envelope" />
                          </Link>
                        </li>                        
                        <li>
                          <Link onClick={this.scrollTop} to={"#"}>
                            <i className="fab fa-facebook" />
                          </Link>
                        </li>  
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-7 order-lg-3 order-2 ">
                    <div className="footer-widget">
                      <p className="footer-widget-title"><span style={{
                        'backgroundColor':'#fdb713', 
                        'padding':'3px 20px',
                        'borderRadius':'1.5em'}}>Contact Us</span>
                        </p>
                      <div className="footer-links">
                        <ul className="link-list">
                          <li className="contact-box">
                            <div className="contact-icon">
                              <i className="bi bi-whatsapp" />
                            </div>
                            <div className="contact-links">
                              <Link
                                onClick={this.scrollTop}
                                to={"#"}
                              >(62-411) 858-353, 858-363,
                              <br/>858-383, (62-11) 831112
                              </Link>
                            </div>
                          </li>
                          <li className="contact-box">
                            <div className="contact-icon">
                              <i className="bi bi-envelope-open" />
                            </div>
                            <div className="contact-links">
                              <Link
                                onClick={this.scrollTop}
                                to={"mailto:info@debindomks.com"}
                              >
                                info@debindomks.com
                              </Link>
                            </div>
                          </li>
                          <li className="contact-box">
                            <div className="contact-icon">
                              <i className="bi bi-geo-alt" />
                            </div>
                            <div className="contact-links">
                              <a href="//:debindomks.com" target="_blank">
                                www.debindomks.com
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-bottom footer-bottom-style-two">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="footer-copyright text-center">
                      <p>
                        Copyright 2022 Debindo Mega Promo | Powered by&nbsp;
                        <a href="https://imtoor.com" target="_blank">
                          imtoor
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* ===============  footer area end  =============== */}
      </>
    );
  }
}

export default LayoutFooter;
