import React, { Component } from "react";
import CountUp from "react-countup";
// images import
import icon2IMG from '../../../assets/images/icons/calander.png';
import icon4IMG from '../../../assets/images/icons/people.png';
import icon3IMG from '../../../assets/images/icons/schedule.png';
import icon1IMG from '../../../assets/images/icons/speaker.png';

class AchivementArea extends Component {
  render() {
    return (
      <>
        {/* ===============  achievement area start  =============== */}
        <div className="achievement-area pt-120">
          <div className="achievement-overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 com-sm-12">
                  <div className="single-achievement">
                    <img src="https://ik.imagekit.io/qqyiqqfya/about/logo_debindo_network_FGlcYcttq.png" width="100%" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* ===============  achievement area end  =============== */}
      </>
    );
  }
}

export default AchivementArea;
