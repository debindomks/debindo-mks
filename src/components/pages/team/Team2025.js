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
                <h3 style={{'text-align':'center'}}><span className="team secretary-label">OPERATION & GENERAL MANAGER</span></h3>
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
                        <p>Managing Director</p>
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
                      <span className="team">OPERATION & GENERAL MANAGER</span>
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
                      <div className="custom-speaker-info" style={{'text-align':'center'}}>
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Dodi Adnan</p>
                        <p><span className="team-15x">Operation & General Manager</span></p>
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
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team">HRD & FINANCE MANAGER</span></h3>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team secretary-label">HUMAN RESOURCE DEVELOPMENT</span></h3>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team secretary-label">FINANCE & TAX</span></h3>
              </div>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-4">

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
                      <div className="custom-speaker-info" style={{'text-align':'center'}}>
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Nurul Arifiani Arifin</p>
                        <p>HRD & Finance Manager</p>
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
                      <span className="team">HUMAN RESOURCE DEVELOPMENT</span>
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
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Falecia Hanna</p>
                        <p><span className="team-15x">Human Resource Development</span></p>
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
                      <span className="team">FINANCE & TAX</span>
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="speaker-card">
                      <div className="speaker-image">
                        <img src="https://ik.imagekit.io/qqyiqqfya/team/Surahma_44SFasdhz.png?updatedAt=1752993837493" height="10%" alt="Imgs" />
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
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Surahmah</p> 
                        <p><span className="team-15x">Finance & Tax</span></p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team">MARKETING & BUSINESS DEVELOP</span></h3>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team secretary-label">ACCOUNT EXECUTIVE & PUBLIC RELATION</span></h3>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team secretary-label">ACCOUNT EXECUTIVE & MARKETING COMMUNICATION</span></h3>
              </div>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-4">

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="speaker-card">
                      <div className="speaker-image">
                        <img src="https://ik.imagekit.io/qqyiqqfya/team/Alamsyah%20Landomang_92bixnuTb.png?updatedAt=1752997899868" alt="Imgs" />
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
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Alamsyah Landomang</p>
                        <p>Marketing & Business Development</p>
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
                      <span className="team">ACCOUNT EXECUTIVE & PUBLIC RELATION</span>
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="speaker-card">
                      <div className="speaker-image">
                        <img src="https://ik.imagekit.io/qqyiqqfya/team/Geraldine%20Nadya_SMN-ebbyd.png?updatedAt=1752997899167" alt="Imgs" />
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
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Geraldine Nadya</p>
                        <p><span className="team-15x">Account Executive & Public Relation</span></p>
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
                      <span className="team">ACCOUNT EXECUTIVE & MARKETING COMMUNICATION</span>
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="speaker-card">
                      <div className="speaker-image">
                        <img src="https://ik.imagekit.io/qqyiqqfya/team/Fenti%20Lisari_l4-4ufjNQ.png?updatedAt=1752997895229" height="10%" alt="Imgs" />
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
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Fenti Lisari</p> 
                        <p><span className="team-15x">Account Executive & Marketing Communication</span></p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team">ACCOUNT EXECUTIVE & MARKETING COMMUNICATION</span></h3>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team secretary-label">ACCOUNT EXECUTIVE & MARKETING ASSOCIATE</span></h3>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h3 style={{'text-align':'center'}}><span className="team secretary-label">BIDDING DIVISION</span></h3>
              </div>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-4">

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
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
                      <div className="custom-speaker-info" style={{'text-align':'center'}}>
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Jeihan Achtar</p>
                        <p>Account Executive & Marketing Communication</p>
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
                      <span className="team">ACCOUNT EXECUTIVE & MARKETING ASSOCIATE</span>
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
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
                      <div className="custom-speaker-info" style={{'text-align':'center'}}>
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px','fontWeight':'bolder'}}>Graha Abadi Pasyaman</p>
                        <p><span className="team-15x">Account Executive & Marketing Associate</span></p>
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
                      <span className="team">BIDDING DIVISION</span>
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="speaker-card">
                      <div className="speaker-image">
                        <img src="https://ik.imagekit.io/qqyiqqfya/team/Muh._Luthfi_P50Xhzxk-.png" height="10%" alt="Imgs" />
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
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Muh. Lutfi</p> 
                        <p><span className="team-15x">Bidding Division</span></p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <br/><br/><br/><br/>

            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-6">
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
                    <p><span className="team-15x">Account Executive</span></p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
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

              <div className="col-lg-4 col-md-4 col-sm-6">
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
                    <p>Account Executive</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
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
                    <p>Account Executive</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
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
                    <p>Account Executive</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
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
                    <p>Account Executive</p>
                  </div>
                </div>
                <br/>
              </div>

            </div> 

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3><span className="team secretary-label">CREATIVE DESIGN</span></h3>
              </div>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-6">

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
                        <p><span className="team-15x">Creative Design & Production Manager</span></p>
                      </div>
                    </div>

                  </div>
                </div>

                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
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
                    <p>Creative Design & Production</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
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
                    <p>Creative Design & Production</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Sitti%20Nur%20Azizah%20-%20Designer_tb_RgvASD.png?updatedAt=1757654756786" alt="Imgs" />
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
                    <p>Creative Design & Production</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Aspar%20Nurdin%20-%20Designer_KA9xfMtxc.png?updatedAt=1757654756784" alt="Imgs" />
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
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Aspar Nurdin</p>
                    <p>Creative Design & Production</p>
                  </div>
                </div>
                <br/>
              </div>
              
            </div>

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3><span className="team secretary-label">GENERAL AFFAIR</span></h3>
              </div>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-6">

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="speaker-card">
                      <div className="speaker-image">
                        <img src="https://ik.imagekit.io/qqyiqqfya/team/Taufan%20-%20General%20Affair__PhoPS-3Ob.png?updatedAt=1757654756722" alt="Imgs" />
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
                        <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Taufan</p>                    
                        <p><span className="team-15x">General Affair</span></p>
                      </div>
                    </div>

                  </div>
                </div>

                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Taufik%20-%20Driver_tykb1e1fo.png?updatedAt=1757654756959" alt="Imgs" />
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
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Taufik</p>
                    <p>Driver</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Randi%20-%20Driver_2frXBL5UA.png?updatedAt=1757654756554" alt="Imgs" />
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
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Randi Saputro</p>
                    <p>Driver</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Adolfina%20-%20Office%20girl_sR6fMoLDw.jpg?updatedAt=1757654755859" alt="Imgs" />
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
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Adolfina Ruru</p>
                    <p>Office Girl</p>
                  </div>
                </div>
                <br/>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/team/Syamsir%20-%20Security_CuYxpG0BK.png?updatedAt=1757654756610" alt="Imgs" />
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
                    <p style={{'fontSize':'1.1em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Syamsir</p>
                    <p>Security</p>
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

