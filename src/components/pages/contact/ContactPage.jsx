import $ from "jquery";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../assets/css/animate.css";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
 
  }


  // Init JS Script
  componentDidMount() {

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
        {/* ===============  breadcrumb area start =============== */}
        <div className="contact-breadcrumb-area">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="breadcrumb-content text-center" style={{'fontFamily':'exo-soft'}}>
                    <img src="https://ik.imagekit.io/qqyiqqfya/contact/logo_debindo_putih_e2xVdVJ5K.png" width="50%" style={{'marginBottom':'25px'}} />
                    <h4 style={{'color':'#fff','marginBottom':'25px'}}>Jl. Lanto dg. pasewang No. 18 F Kel. Maricaya Selatan Kec.<br />Mamajang, Makassar Sulawesi Selatan 90131</h4>
                    <h4 style={{'color':'#fff'}}>Contact Us</h4>
                    <a style={{'color':'#fff','fontSize':'1.1em','marginRight':'10px'}} href="//debindomks.com" target="_blank">www.debindomks.com</a>
                    <a style={{'color':'#fff','fontSize':'1.1em','marginLeft':'10px'}} href="mailto:info@debindomks.com">info@debindomks.com</a><br/>
                    <a style={{'color':'#fff','fontSize':'1.1em','wordSpacing':'2px'}} href="javascript:void(0)">(62-411) 858-353, 858-363, 858-383</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* ===============  Contact wrapper start =============== */}
        <div className="contact-wrapper overflow-hidden">
          <div className="container pt-120 position-relative">
            <div className="background-title text-style-one">
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p style={{'fontWeight':'bolder',
                'fontSize':'3em',
                'display':'inline-block',
                'marginBottom':'15px','fontFamily':'exo-bold'}}>Your Exhibition Partner</p>
                <hr style={{'border':'3px solid #c0c1c3','width':'25em','margin':'auto'}} />
                <p style={{'fontSize':'1.2em','marginTop':'15px'}}>PT Debindo Mega Promo didirikan di Makassar pada tahun 1996 dengan tujuan<br/>
                untuk memberikan pameran yang unggul, jasa konstruksi untuk klien yang berbasis di Indonesia.<br/>
                Lingkup bisnis perusahaan terus berkembang untuk memberikan layanan manajemen pameran<br/>
                penuh kepada klien yang berpartisipasi dalam pameran domestik, pameran<br/>
                dagang dan pameran, konvensi dan seminar.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <form action="#" id="contact-form">
                  <div className="contact-form-wrapper">
                    <div className="row" style={{'padding':'2em'}}>
                      <div className="col-lg-6">
                        <div className="primary-input-group">
                          <input type="text" id="name" placeholder="Your Name" style={{'backgroundColor':'#f6f8f8','borderRadius':'10px','fontFamily':'exo-soft'}} />
                        </div>
                        <div className="primary-input-group">
                          <input type="email" id="email" placeholder="Your Email" style={{'backgroundColor':'#f6f8f8','borderRadius':'10px','fontFamily':'exo-soft'}} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="primary-input-group">
                          <input type="tel" id="phone" placeholder="Your Phone" style={{'backgroundColor':'#f6f8f8','borderRadius':'10px','fontFamily':'exo-soft'}} />
                        </div>
                        <div className="primary-input-group">
                          <input type="text" id="subject" placeholder="Subject" style={{'backgroundColor':'#f6f8f8','borderRadius':'10px','fontFamily':'exo-soft'}} />
                        </div>                        
                      </div>
                      <div className="col-lg-12">
                      <div className="primary-input-group">
                        <textarea
                          name="massege"
                          id="message"
                          cols={30}
                          rows={7}
                          placeholder="Write Message"
                          defaultValue={""}
                          style={{'backgroundColor':'#f6f8f8','borderRadius':'10px','fontFamily':'exo-soft'}}
                        />
                      </div>
                      </div>
                    </div>


                    <div className="submit-btn">
                      <button type="submit" className="primary-submit" style={{'backgroundColor':'#b60000','fontSize':'1.5em','fontFamily':'exo-bold'}}>
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-map-wrap mt-120">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="Video"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=pt%20debindo%20mega%20promo&t=&z=19&ie=UTF8&iwloc=&output=embed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Contact wrapper end =============== */}
      </>
    );
  }
}

export default ContactPage;
