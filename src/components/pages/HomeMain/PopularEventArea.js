import React, { Component } from "react";
import { Link } from "react-router-dom";
// page animation
import "../../../assets/css/animate.css";

class PopularEventArea extends Component {
  componentDidMount() {}
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
                    'fontFamily':'exo-bold'
                    }}><b>ABOUT</b></h3>
                </div>
                <br/>
                <p style={{'fontSize':'1.2em','letterSpacing':'1px','fontFamily':'exo-light'}}><b>PT Debindo Mega Promo</b> yang bergerak di dunia industri <i>Event Organizer & MICE (Meeting, Incentive, Convention, Exhibition)</i> telah
terbukti  dalam pelaksanaan event berskala nasional maupun internasional. Dengan motto <i>"Commitment to Excellence"</i> kami 
senantiasa memberikan kepuasan kepada Client melalui kualitas konsep dan pelaksanaan kegiatan dengan ide-ide kreatif & inovatif.</p>
                
                <br/><br/>

                <div class="event-countdown-head">
                  <h3 style={{
                    'textDecorationLine':'underline',
                    'textUnderlineOffset':'15px',
                    'textDecorationColor':'grey',
                    'fontFamily':'exo-bold',
                    }}><b>PROFESSIONAL EVENT ORGANIZER</b></h3>
                </div>
                <br/>
                <p style={{'fontSize':'1.2em','letterSpacing':'1px','fontFamily':'exo-light'}}>Kami mempunyai komitmen untuk mencapai kepuasan pelanggan dengan memberikan produk dan jasa berkualitas tinggi yang tepat
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
