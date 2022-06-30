import React, { Component } from "react";
import { Link } from "react-router-dom";
// image import
import BGIconTxt from "../../assets/images/background-texts/footer-watermark.png";
import LogoV2 from "../../assets/images/logo-v2.png";
class HomeFooter extends Component {
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
        <div className="footer-outer ">
          <div className="footer-area ">

              <div className="footer-bottom footer-bottom-style-two">
                <div className="row align-items-center">
                  <div className="col-lg-12 ">
                    <div className="footer-copyright text-center">
                      <p>
                        Copyright 2022 <b>PT. Debindo Mega Promo</b> | Powered by&nbsp;
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
        {/* ===============  footer area end  =============== */}.
      </>
    );
  }
}

export default HomeFooter;