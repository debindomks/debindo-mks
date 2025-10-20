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
        <div className="footer-outer" style={{width:'100%',position:'relative',bottom:0}}>
          <div className="footer-area" style={{'bottom':0,'right':0,'left':0,'position':'relative',margin:0,padding:0}}>

              <div className="footer-bottom footer-bottom-style-two">
                <div className="row align-items-center">
                  <div className="col-lg-12 ">
                    <div className="footer-copyright text-center">
                      <p>
                        Copyright 2022 - { currYear }. <b>PT Debindo Mega Promo</b> | Powered by&nbsp;
                        <a href="https://imtoor.com" target="_blank" rel="noreferrer" style={{display:'inline-block'}}>
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
