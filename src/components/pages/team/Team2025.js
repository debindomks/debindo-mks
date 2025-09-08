import $ from "jquery";
import { Component } from "react";
import { Link } from "react-router-dom";
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Ir. Jeffrey Eugene Talumewo</p>
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>President Director</p>
                  </div>
                </div>
              </div>
            </div>

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team">MANAGING DIRECTOR</span></h3>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team secretary-label">HRD</span></h3>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team secretary-label">SECRETARY</span></h3>
              </div>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-4">

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="speaker-card">
                        <div className="speaker-image">
                          <img src="https://ik.imagekit.io/qqyiqqfya/team/Srianti_Mantong_N4w350hvO.png" alt="Imgs" />
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
                        <div className="custom-speaker-info" style={{'text-align':'center'}}>
                          <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Srianti Mantong</p>
                          <p>Marketing Manager</p>
                        </div>
                      </div>
                    </div>
                </div>

              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="secretary-label2 text-center">
                      <br/><br/>
                      <span className="team">HRD</span>
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="speaker-card">
                      <div className="speaker-image">
                        <img src="https://ik.imagekit.io/qqyiqqfya/team/Felicia%20Hanna%20T_gwuIl9sLo.png?updatedAt=1752992391390" alt="Imgs" />
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
                      <div className="custom-speaker-info" style={{'text-align':'center'}}>
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Felicia Hanna T</p>
                        <p><span className="team-15x">HRD</span></p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="secretary-label2 text-center">
                      <br/><br/>
                      <span className="team">SECRETARY</span>
                    </h3>
                  </div>
                </div>

                <div className="row">

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="speaker-card">
                        <div className="speaker-image">
                          <img src="https://ik.imagekit.io/qqyiqqfya/team/Andriana_06GOk62Nj.png?updatedAt=1752992444870" height="10%" alt="Imgs" />
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
                        <div className="custom-speaker-info" style={{'text-align':'center'}}>
                          <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Andriana</p>                    
                          <p><span className="team-15x">Secretary</span></p>
                        </div>
                      </div>
                    </div>

                </div>

              </div>

            </div>

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3><span className="team secretary-label">CREATIVE DESIGN</span></h3>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6">

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="secretary-label2 text-center">
                      <br/><br/>
                      <span className="team">CREATIVE DESIGN</span>
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="speaker-card">
                      <div className="speaker-image">
                        <img src="https://ik.imagekit.io/qqyiqqfya/team/MUH_FIRMAN_ZEN_7OjmQrrsn.png" alt="Imgs" />
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
                      <div className="custom-speaker-info text-center">
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Muh. Firman Zen</p>                    
                        <p><span className="team-15x">Creative Design Manager</span></p>
                      </div>
                    </div>

                  </div>
                </div>

                <br/>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Syaifullah S</p>
                    <p>Creative Design</p>
                  </div>
                </div>
                <br/>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Andika Dwi Satria</p>
                    <p>Creative Design</p>
                  </div>
                </div>
                <br/>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Zulkarnain</p>
                    <p>Creative Design</p>
                  </div>
                </div>
                <br/>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Sitti Nur Azizah</p>
                    <p>Creative Design</p>
                  </div>
                </div>
                <br/>
              </div>
            </div>             

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h3><span className="team secretary-label">GENERAL MANAGER</span></h3>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h3><span className="team secretary-label">ACCOUNTING</span></h3>
              </div>
            </div>

            <br/>

            <div className="row">

              <div className="col-lg-3 col-md-3 col-sm-6">

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="secretary-label2 text-center">
                      <br/><br/>
                      <span className="team">GENERAL MANAGER</span>
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
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
                      <div className="custom-speaker-info text-center">
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Abdullah Adnan</p>
                        <p>Operation & General Manager</p>
                      </div>
                    </div>
                    <br/>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Muh. Luthfi</p>
                    <p>Staff Bidding</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="secretary-label2 text-center">
                      <br/><br/>
                      <span className="team">ACCOUNTING</span>
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
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
                      <div className="custom-speaker-info text-center">
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Nurul Arfiani Arifin</p>
                        <p>Accounting Manager</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Surahma_44SFasdhz.png?updatedAt=1752993837493" alt="Imgs" />
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Surahmah</p>
                    <p>Finance ADM Support</p>
                  </div>
                </div>
              </div>

            </div> 

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3><span className="team secretary-label">ACCOUNTING EXECUTIVE</span></h3>
              </div>
            </div>

            <br/>

            <div className="row">

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="secretary-label2 text-center">
                      <span className="team">ACCOUNTING EXECUTIVE</span>
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="speaker-card">
                      <div className="speaker-image">
                        <img src="https://ik.imagekit.io/qqyiqqfya/team/Alamsyah%20Landomang_92bixnuTb.png?updatedAt=1752997899868"  alt="Imgs" />
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
                      <div className="custom-speaker-info text-center">
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Alamsyah Landomang</p>
                        <p><span className="team-15x">Marketing & Business Develop</span></p>
                      </div>
                    </div>
                    <br/>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Robertho R. Engel</p>
                    <p><span className="team-15x">Sales & Marketing</span></p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Andi%20Achmad%20Aria_VJAzgTNlS.png?updatedAt=1752997899470" alt="Imgs" />
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Andi Achmad Aria</p>
                    <p>Sales & Narketing</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>M. Nasarullah</p>
                    <p>Account Executive</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Eka%20Prajawati%20Syam_cVFrEuLbzs.png?updatedAt=1752997903427" style={{'height':'auto','width':'100%'}} alt="Imgs" />
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Eka Prajawati Syam</p>
                    <p>Sales & Marketing</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Azzahra%20Tatya%20Btari_S2KVEMLhzr.png?updatedAt=1752997902472" style={{'height':'auto','width':'100%'}} alt="Imgs" />
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Azzahra Tatya Btari</p>
                    <p>Sales & Marketing</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Geraldine%20Nadya_SMN-ebbyd.png?updatedAt=1752997899167" style={{'height':'auto','width':'100%'}} alt="Imgs" />
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Geraldine Nadya</p>
                    <p>Sales & PR Jakarta Area</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Fenti%20Lisari_l4-4ufjNQ.png?updatedAt=1752997895229" style={{'height':'auto','width':'100%'}} alt="Imgs" />
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Fenti Lisari</p>
                    <p>Marketing Communication Jakarta</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Petronella%20Pradnya_Yg9uF6yu0.png?updatedAt=1752997899403" style={{'height':'auto','width':'100%'}} alt="Imgs" />
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Petronella Pradnya</p>
                    <p>Marketing Communication Jakarta</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Anggit Fitria Damayanti</p>
                    <p>Marketing Communication</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Graha%20Abadi%20Pasyaman_db6mvIndfg.png?updatedAt=1752997902274" alt="Imgs" />
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Graha Abadi Pasyaman</p>
                    <p>Account Executive Jakarta</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Jeihan%20Achtar%20Nizamuddin_eH93b1Q2F.png?updatedAt=1752997901542" alt="Imgs" />
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
                  <div className="custom-speaker-info text-center">
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Jeihan Achtar Nizamuddin</p>
                    <p>Account Executive Jakarta</p>
                  </div>
                </div>
                <br/>
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

