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
class Portfolio extends Component {
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
                  <br/><br/><br/>
                  <p><span className="team-2x">PORTFOLIO</span></p>
                </div>
              </div>
            </div>

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <h3><span><b>M E E T I N G</b></span></h3>
                <hr/>
              </div>
            </div>

            <br/>

            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/meeting/1._RAPIMNAS_KADIN_INDONESIA_aa6oAS5VT.png" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info text-left">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Rapimnas Kadin Indonesia</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/meeting/2._INDONESIA_BUSINESS_-_BUMN_FORUM_MCsNKig_a.png" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Indonesia Business - BUMN
Forum (IBBEX)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/meeting/3._RAPAT_EVALUASI_PROGRAM_PENGEMBANGAN_SDA_vf4SqYdNE.png"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Rapat Evaluasi Program
Pengembangan SDA Kawasan Pedesaan</p>
                  </div>
                </div>
              </div>

            </div>

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3><span><b>INCENTIVE & CORPORATE EVENT</b></span></h3>
                <hr />
              </div>
            </div>

            <br/>            

            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/1._PENYERAHAN_SERTIFIKAT_KEPADA_RI_1_eq3dTlgzc.png" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info text-left">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Penyerahan Sertifikat Kepada Raykat oleh Presiden RI</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/2._PERINGATAN_HARI_KOPERASI_NASIONAL_smBn_mu1v.jpg" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Peringatan Hari Koperasi Nasional</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/3._HARI_TEKNOLOGI_NASIONAL_ygQ_jsas7.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Hari Teknologi Nasional</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/4._PERESMIAN_MEGA_PROYEK_PERTAMINA_TERINTEGRASI_OLEH_PRESIDEN_RI_FPJ5HC3TW.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Peresmian Mega Proyek Pertamina Terintegrasi oleh Presiden RI</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/5._KONAS_IAKMI___1_st_Indo_Public_Health_e_DM-jZ0h.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>KONAS IAKMI & 1st Indo Public Health</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/6._Celebes_Tranequatouring_Indonesia_Rally__Harley_Davidson_OPQpK0Y17.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Celebes Transequatouring Indonesia Rally, Harley Davidson</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/7._Asian_Africa_Festival_dsLzszbAt.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Asian Africa Festival</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/8._Indonesia_Aquaculture_X-1l_yzbN.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Indonesia Aquaculture</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/9._Pekan_Olahraga_Mahasiswa_Nasional_XV_qJ1zCvthP.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Pekan Olahraga Mahasiswa Nasional XV</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/10._Pelantikan_Pengurus_DPD_Partai_Gerindra_Sulawesi_Selatan_a77FFv8uk.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Pelantikan Pengurus DPD Partai Gerindra Sulawesi Selatan</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/11._Hut_Kota_Makassar_Ke_-_412_eyNLfmGxj.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Hut Kota Makassar - 412</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/12._Festival_Kawawo_Gorontalo_du5ZjEIxf.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Festival Karawo Gorontalo</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/13._Festival_Hari_Jadi_Luwu_Ke-_751_jKaXuHYYq.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Festival Hari Jadi Luwu Ke-751</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/14._Festival_Derawan_StaFh-I5V.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Festival Derawan</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/15._Konser_Akademi_Fantasi_1_2_dan_3_2i-C4WQeM.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Konser Akademi Fantasi 1,2,3</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/Indonesia_DEI___ESG_Awards__Ideas__js0vl4Abz.png" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Indonesia DEI & ESG Awards(IDEAS)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/KKIN_VIII_2022_BibgqQePA.png" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>KKIN VIII 2022</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/incentive/City_Sanitation_Summit_SsiKG4Dyk.png" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>City Sanitation Summit</p>
                  </div>
                </div>
              </div>

            </div>

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3><span><b>C O N F E R E N C E</b></span></h3>
                <hr />
              </div>
            </div>

            <br/>

            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/conference/1._Sakip_Award_YaQc5kt5q.jpg" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info text-left">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Sakip Award</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/conference/2._Seminar_Nasional_Bendungan_Besar_2bJq33nI_.jpg" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Seminar Nasional Bendungan Besar</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/conference/3._e-SMART_IKM_0l9CtQAcM.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>e-SMART IKM</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/conference/4._International_Coffee_Day_g0FSpRwH_.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>International Coffee Day</p>
                  </div>
                </div>
              </div>

            </div>            

            <br/><br/><br/><br/>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3><span><b>E X H I B I T I O N</b></span></h3>
                <hr />
              </div>
            </div>

            <br/>

            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/1._Indonesia_Water___Waswater_Expo___Forum_Hkx85TOVB.jpg" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info text-left">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Indonesia Water & Waswater Expo & Forum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/2._Indonesia_Building_Technology_Expo_XAkkEDt7v.jpg" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Indonesia Building Technology Expo</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/3._Ritech_Expo_haZEE1CW9.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Ritech Expo</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/4._Harkopnas_Expo_j41Xb02En.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Harkopnas Expo</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/5._Garuda_Indonesia_Travel_Fair_-W406Idby.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Garuda Indonesia Travel Fair</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/6._Property___Building_Material_Expo_qO7Joy2OH.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Property & Building Material Expo</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/7._Mandiri_Property_Expo_24YVneL3k.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Mandiri Property Expo</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/8._IKM_Expo_16Wn6haMT.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>IKM Expo</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/9._Ekspo_Rei_-0mcG2bpx.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Ekspo REI</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/10._Sulsel_Expo_5MhYRIUoE.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Sulsel Expo</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/11._Sinjai_Expo_97_F8q5PK.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Sinjai Expo</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/12._Borne_ExtravaganzA_ESZQziy4W.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Borneo Extravaganza</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/13._Pameran_5_Kota_Di_Sumatera_WUzzCCb1y.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Pameran 5 Kota Disumatera</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/14._Celebes_Craft_V6dMof0By.jpg"  alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Celebes Craft</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src="https://ik.imagekit.io/qqyiqqfya/portfolio/exhibition/Tanjung_Bunga_Property_Expo_-Skczh85H.png" alt="Imgs" />
                  </div>
                  <div className="custom-speaker-info">
                    <p className="text-center" style={{'fontSize':'0.9em','fontFamily':'exo-soft','letterSpacing':'1px'}}>Tanjung Bunga Property Expo</p>
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

export default Portfolio;