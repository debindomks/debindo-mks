import { Component } from "react";
import emailjs from '@emailjs/browser';
import "../../../assets/css/animate.css";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.name === '') {
      alert('Harap isi Nama Anda'); 
      return false;
    }

    if(this.state.email === '') {
      alert('Harap isi Email Anda'); 
      return false;
    }

    if(this.state.phone === '') {
      alert('Harap isi No. Handphone Anda'); 
      return false;
    }

    if(this.state.subject === '') {
      alert('Harap isi Subject Pesan'); 
      return false;
    }

    if(this.state.message === '') {
      alert('Harap isi Pesan Anda'); 
      return false;
    }
    
    alert('Pesan terkirim. Kami akan segera mengabari anda, terima kasih.');

    let messageData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      message: this.state.message
    };
    emailjs.send('service_gr96e3d', 'template_1rsgqjf', messageData, 'qsg2VHp3dB1Yg614P')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setTimeout(function() {
          window.location.reload();
        }, 4000);
      }, function(error) {
        console.log('FAILED.....', error);
      });
        
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
                    <img src="https://ik.imagekit.io/qqyiqqfya/contact/logo_debindo_putih_e2xVdVJ5K.png" alt="debindo logo" width="50%" style={{'marginBottom':'25px'}} />
                    <h4 style={{'color':'#fff','marginBottom':'25px'}}>Jl. Lanto dg. pasewang No. 18 F Kel. Maricaya Selatan Kec.<br />Mamajang, Makassar Sulawesi Selatan 90131</h4>
                    <h4 style={{'color':'#fff'}}>Contact Us</h4>
                    <a style={{'color':'#fff','fontSize':'1.1em','marginRight':'10px'}} href="//debindomks.com" target="_blank" rel="noreferrer">www.debindomks.com</a>
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
                <p style={{'fontSize':'1.2em','marginTop':'15px','fontFamily':'exo-light'}}>
                PT Debindo Mega Promo didirikan di Makassar pada tahun 1996 dengan tujuan untuk<br/>
memberikan pameran yang unggul, jasa konstruksi untuk klien yang berbasis di Indonesia.<br/>
Lingkup bisnis perusahaan terus berkembang untuk memberikan layanan manajemen pameran<br/>
penuh kepada klien yang berpartisipasi dalam pameran domestik, pameran  dagang , konvensi dan seminar.                  
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <form onSubmit={this.handleSubmit} id="contact-form">
                  <div className="contact-form-wrapper">
                    <div className="row" style={{'padding':'2em'}}>
                      <div className="col-lg-6">
                        <div className="primary-input-group">
                          <input type="text" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Nama" style={{'backgroundColor':'#f6f8f8','borderRadius':'10px','fontFamily':'exo-soft'}} />
                        </div>
                        <div className="primary-input-group">
                          <input type="email" onChange={this.handleChange} value={this.state.email} name="email" placeholder="Email" style={{'backgroundColor':'#f6f8f8','borderRadius':'10px','fontFamily':'exo-soft'}} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="primary-input-group">
                          <input type="tel" onChange={this.handleChange} value={this.state.phone} name="phone" placeholder="No. Handphone" style={{'backgroundColor':'#f6f8f8','borderRadius':'10px','fontFamily':'exo-soft'}} />
                        </div>
                        <div className="primary-input-group">
                          <input type="text" onChange={this.handleChange} value={this.state.subject} name="subject" placeholder="Subject" style={{'backgroundColor':'#f6f8f8','borderRadius':'10px','fontFamily':'exo-soft'}} />
                        </div>                        
                      </div>
                      <div className="col-lg-12">
                      <div className="primary-input-group">
                        <textarea
                          name="message"
                          cols={30}
                          rows={7}
                          value={this.state.message}
                          onChange={this.handleChange}                          
                          placeholder="Write Message"
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
