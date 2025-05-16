import React, { Component } from "react";
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
              <div className="footer-bottom footer-bottom-style-two">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="footer-copyright text-center">
                      <p>
                        Copyright 2022 <b>PT Debindo Mega Promo</b> | Powered by&nbsp;
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
