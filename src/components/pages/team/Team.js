import $ from "jquery";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// image import
import Speaker1 from "../../../assets/images/speaker/speaker-1.png";
import Speaker2 from "../../../assets/images/speaker/speaker-2.png";
import Speaker3 from "../../../assets/images/speaker/speaker-3.png";
import Speaker4 from "../../../assets/images/speaker/speaker-4.png";
import Speaker5 from "../../../assets/images/speaker/speaker-5.png";
import Speaker6 from "../../../assets/images/speaker/speaker-6.png";
import Speaker7 from "../../../assets/images/speaker/speaker-7.png";
import Speaker8 from "../../../assets/images/speaker/speaker-8.png";
import Speaker9 from "../../../assets/images/speaker/speaker-9.png";
class Team extends Component {
  componentDidMount() {
    this.inItScripts();
  }
  
  inItScripts() {
    $('.main-nav ul li a').css('color', '#000');
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 20) {
        
      } else {
        $('.main-nav ul li a').css('color', '#000');
      };
    });
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
       
        {/* ===============  team area start =============== */}
        <div className="speakers-wrapper ">
          <div className="container position-relative pt-110">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="background-title text-style-one">
       
                </div>
                <div className="section-head">
                  <p><span className="team-2x">TEAM</span></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Ir._Jeffrey_Eugene_Talumewo_CV9m_K5cy.png"  alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info text-left">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Ir. Jeffrey Eugene Talumewo</p>
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>President Director</p>
                  </div>
                </div>
              </div>
            </div>

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8">
                <h3><span className="team">Marketing Communication</span></h3>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <h3><span className="team">Secretary</span></h3>
              </div>
            </div>

            <br/>

            <div className="row">

              <div className="col-lg-7 col-md-7 col-sm-7">

                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="speaker-card">
                        <div className="speaker-image">
                          <img src="https://www.tascsoftware.co.uk/wiki/PARS/images/8/8f/Grey.jpg" height="325"  alt="Imgs" />
                          <ul className="speaker-social-icons">
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-instagram" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-linkedin-in" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-whatsapp" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="custom-speaker-info">
                          <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Srianti Mantong</p>
                          <p>Marketing Manager</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="speaker-card">
                        <div className="speaker-image">
                          <img src="https://www.tascsoftware.co.uk/wiki/PARS/images/8/8f/Grey.jpg" height="325"  alt="Imgs" />
                          <ul className="speaker-social-icons">
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-instagram" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-linkedin-in" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-whatsapp" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="custom-speaker-info">
                          <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Novira Arisanty</p>
                          <p><span className="team-15x">Marketing Asisstant Manager</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="speaker-card">
                        <div className="speaker-image">
                          <img src="https://ik.imagekit.io/qqyiqqfya/team/Anggit_Fitria_Damayanti_0IpBJ2WeT.png" alt="Imgs" />
                          <ul className="speaker-social-icons">
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-instagram" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-linkedin-in" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-whatsapp" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="custom-speaker-info">
                          <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Anggit Fitria Damayanti</p>
                          <p>Marketing Communication</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="speaker-card">
                        <div className="speaker-image">
                          <img src="https://ik.imagekit.io/qqyiqqfya/team/Petronella_Pradnya_Pradnya_Paramita_dZfrOHFYs.png" alt="Imgs" />
                          <ul className="speaker-social-icons">
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-instagram" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-linkedin-in" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-whatsapp" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="custom-speaker-info">
                          <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Petronella Pradnya Paramita</p>
                          <p>Marketing Communication</p>
                        </div>
                      </div>
                    </div>

                </div>

              </div>
              <div className="col-lg-1 col-md-1 col-sm-1"></div>              
              <div className="col-lg-4 col-md-4 col-sm-4">

                <div className="row">

                    <div className="col-lg-10 col-md-10 col-sm-10">
                      <div className="speaker-card">
                        <div className="speaker-image">
                          <img src="https://ik.imagekit.io/qqyiqqfya/team/Ingrid_Villiana_Sura_ITXu1aRQ0.png"  alt="Imgs" />
                          <ul className="speaker-social-icons">
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-instagram" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-linkedin-in" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link onClick={this.scrollTop} to={"#"}>
                                <i className="fab fa-whatsapp" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="custom-speaker-info text-left">
                          <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Ingrid Villiana Sura</p>                    
                          <p><span className="team-15x">Secretary</span></p>
                        </div>
                      </div>
                    </div>

                </div>

              </div>


            </div>

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <h3><span className="team">ACCOUNT EXECUTIVE</span></h3>
              </div>
            </div>

            <br/>            

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Robertho_R._Engel_uPzkznFsL.png"  alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info text-left">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Robertho R. Engel</p>                    
                    <p><span className="team-15x">Account Executive</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/ABDULLAH_ADNAN_q4rv8iTqZX.png" alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Abdullah Adnan</p>
                    <p>Account Executive</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://www.tascsoftware.co.uk/wiki/PARS/images/8/8f/Grey.jpg" height="325"  alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Muh. Oki</p>
                    <p>Account Executive</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://www.tascsoftware.co.uk/wiki/PARS/images/8/8f/Grey.jpg" alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Syarfina Febriani</p>
                    <p>Account Executive</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/M._Nasarullah_V0ykSomQK.png" alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>M. Nasarullah</p>
                    <p>Account Executive</p>
                  </div>
                </div>
              </div>

            </div> 

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <h3><span className="team">CREATIVE DESIGN</span></h3>
              </div>
            </div>

            <br/>                 
            
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://www.tascsoftware.co.uk/wiki/PARS/images/8/8f/Grey.jpg" height="325"  alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info text-left">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Muh. Firman Zen</p>                    
                    <p><span className="team-15x">Creative Design Manager</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Syaifullah_S_G4fl4MA7W.png" alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Syaifullah S</p>
                    <p>Creative Design</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Andika_Dwi_Syaputra_rxgdxImpW.png" alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Andika Dwi Syaputra</p>
                    <p>Creative Design</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Andrian_Jahar_Aripurba_uSVUfB56V.png" alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Andrian Jahar</p>
                    <p>Creative Design</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Zulkarnain_YSg1aPG0T.png" alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Zulkarnain</p>
                    <p>Creative Design</p>
                  </div>
                </div>
              </div>
            </div>             

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <h3><span className="team">ACCOUNTING</span></h3>
              </div>
            </div>

            <br/>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://www.tascsoftware.co.uk/wiki/PARS/images/8/8f/Grey.jpg" height="325"  alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info text-left">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Febyanti Said</p>                    
                    <p><span className="team-15x">Accounting & HRD Manager</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Nurul_Arfiani_Arifin_cSBKsNNgq.png" alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Nurul Arfiani Arifin</p>
                    <p>Accounting Staff</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://www.tascsoftware.co.uk/wiki/PARS/images/8/8f/Grey.jpg" height="325"  alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Deby Angriani</p>
                    <p>Accounting Staff</p>
                  </div>
                </div>
              </div>
            </div>

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <h3><span className="team">TENDER DIVISION</span></h3>
              </div>
            </div>

            <br/>

            <div className="row">
             <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Wahyu_Irawan_S_zDqMistVo.png" alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Wahyu Irawan S</p>
                    <p>Tender Division</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Muh._Luthfi_P50Xhzxk-.png" alt="Imgs" />
                    <ul className="speaker-social-icons">
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.scrollTop} to={"#"}>
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="custom-speaker-info">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Muh. Luthf</p>
                    <p>Tender Division</p>
                  </div>
                </div>
              </div>              
            </div>

          </div>
        </div>
        {/* ===============  team area end =============== */}
      </>
    );
  }
}

export default Team;
