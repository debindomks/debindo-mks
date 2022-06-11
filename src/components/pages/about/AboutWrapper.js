import React, { Component } from "react";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
import AboutVideo from "../../../assets/images/about/a-mini-video.png";
// mini gallary
import MiniGallary1 from "../../../assets/images/about/a-mini1.png";
import MiniGallary2 from "../../../assets/images/about/a-mini2.png";
// icon image
import Icon2 from "../../../assets/images/icons/event-sm.png";
import QuoteIcon from "../../../assets/images/icons/qoute-icon.png";
import Icon3 from "../../../assets/images/icons/sed-sm.png";
import Icon1 from "../../../assets/images/icons/speaker-sm.png";
// feature icon image import
import FeatureIcon3 from "../../../assets/images/icons/gaust-md.png";
import FeatureIcon2 from "../../../assets/images/icons/sound-md.png";
import FeatureIcon1 from "../../../assets/images/icons/speaker-md.png";
import VideoShapeIcon from "../../../assets/images/shapes/play-btn.png";



class AboutWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isOpen: false,
    };
}
 
  componentDidMount() {
    // animation script
    new WOW.WOW().init();
  }
  render() {
    // modal video change state
    const { isOpen } = this.state;
    return (
      <>
        {/* =============== About wrapper start =============== */}
        <div className="about-wrapper mt-96">
          <div className="container">
            <div className="about-company">
              <div className="row">
                <div className="col-lg-8">
                  <div className="company-info">
                    <h2>PT Debindo Mega Promo</h2>
                    <p style={{'fontSize':'1.5em'}}>
                    Sejak awal berdirinya pada tahun 1996 PT Debindo Mega Promo
                    yang bergerak di dunia industri Event Organizer & MICE
                    (Meeting, Incentive, Convention, Exhibition) telah terbukti
                    dalam pelaksanaan event berskala nasional maupun internasional.
                    </p>

                    <p style={{'fontSize':'1.5em'}}>
                    Dengan motto "Commitment to Excellence" kami senantiasa
                    memberikan kepuasan kepada Client melalui kualitas konsep
                    dan pelaksanaan kegiatan dengan ide-ide kreatif & inovatif.
                    </p>

                  </div>
                </div>
                <div className="col-lg-4">
                  <img src={`https://ik.imagekit.io/qqyiqqfya/about/gedung_U8Ej9zsr4.png`} alt="Imgs" className="img-fluid" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="company-info">
                    <p style={{'fontSize':'1.5em'}}>
                    PT Debindo Mega Promo mempunyai komitmen untuk mencapai kepuasan pelanggan dengan
    memberikan produk dan jasa berkualitas tinggi yang tepat waktu dan dengan harga yang kompetitif.
    Meningkatkan sistem manajemen mutu serta berkelanjutan melalui penetapan tujuan sasaran
    program mutu untuk produk, aktivitas dan jasa yang secara periodik ditinjau dan kemajuannya diukur
    untuk memastikan peningkatan dicapai.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
        {/* =============== About wrapper end =============== */}
        <React.Fragment>
               <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="-tJYN-eG1zk" onClose={() => this.setState({ isOpen: false })} />
           </React.Fragment>
      </>
    );
  }
}

export default AboutWrapper;
