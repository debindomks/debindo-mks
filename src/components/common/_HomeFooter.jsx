import { Component } from "react";

class HomeFooter extends Component {

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {

    const currYear = new Date().getFullYear().toString();

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
                        Copyright 2022 - { currYear }. <b>PT Debindo Mega Promo</b> | Powered by&nbsp;
                        <a href="https://imtoor.com" target="_blank" style={{display:'inline-block'}}>
                          <u>imtoor</u>
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
