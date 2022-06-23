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
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div class="event-countdown-head">
                  <h3 style={{
                    'textDecorationLine':'underline',
                    'textUnderlineOffset':'15px',
                    'textDecorationColor':'grey',
                    }}><b>ABOUT</b></h3>
                </div>
                <br/>
                <p style={{'fontSize':'1.2em','letterSpacing':'1px'}}><b>PT Debindo Mega Promo</b> yang bergerak di dunia industri Event Organizer & MICE (Meeting, Incentive, Convention, Exhibition)  telah
terbukti  dalam pelaksanaan event berskala nasional maupun internasional. Dengan motto "Commitment to Excellence" kami 
senantiasa memberikan kepuasan kepada Client melalui kualitas konsep dan pelaksanaan kegiatan dengan ide-ide kreatif & inovatif.</p>
                
                <br/><br/>

                <div class="event-countdown-head">
                  <h3 style={{
                    'textDecorationLine':'underline',
                    'textUnderlineOffset':'15px',
                    'textDecorationColor':'grey',                    
                    }}><b>PROFESSIONAL EVENT ORGANIZER</b></h3>
                </div>
                <br/>
                <p style={{'fontSize':'1.2em','letterSpacing':'1px'}}>Kami mempunyai komitmen untuk mencapai kepuasan pelanggan dengan memberikan produk dan jasa berkualitas tinggi yang tepat
waktu dan dengan harga yang kompetitif. Meningkatkan sistem manajemen mutu serta berkelanjutan melalui penetapan tujuan
sasaran program mutu untuk produk, aktivitas dan jasa yang secara periodik ditinjau dan kemajuannya diukur untuk
memastikan peningkatan dicapai</p>

                <br/><br/>

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
