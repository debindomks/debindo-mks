import $ from "jquery";
import { Component } from "react";

import "../../../assets/css/animate.css";
import "./style.css"

class Events extends Component {

  componentDidMount(){
    this.inItScripts();
  }

  inItScripts() {
    $('.main-nav ul li a').css('color', '#000');
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 20) {
        $('.main-nav ul li a').css('color', '#000');
      }
    });
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {

    const event251 = [
      {
        img: 'https://ik.imagekit.io/qqyiqqfya/event/2025/rei_fUVQt1jlX.png?updatedAt=1747639755962',
        date: '19 - 23 Februari 2025',
        place: 'Mal Ratu Indah Makassar',
      },
      {
        img: 'https://ik.imagekit.io/qqyiqqfya/event/2025/issei_BeigmSXw0.png?updatedAt=1747639755964',
        date: '21 - 23 Mei 2025',
        place: 'Jakarta Convention Center'
      },
      {
        img: 'https://ik.imagekit.io/qqyiqqfya/event/2025/ismeef_GvDl_1pym.png?updatedAt=1747639755812',
        date: '12 - 16 Agustus 2025',
        place: 'SMESCO Indonesia'
      },
    ];

    const event252 = [
      {
        img: 'https://ik.imagekit.io/qqyiqqfya/event/2025/paqs_1msLjNJGw.png?updatedAt=1747639756130',
        date: '22 - 26 Agustus 2025',
        place: 'Raffles Hotel, Jakarta'
      },
      {
        img: 'https://ik.imagekit.io/qqyiqqfya/event/2025/ivef_KK1dHq_D_.png?updatedAt=1752991909667',
        date: '5 - 8 November 2025',
        place: 'Nusantara International Convention Exhibition'
      },
    ];
    
    const event1 = [
      {
        img: 'https://ik.imagekit.io/rwvfvdma8/events/2024/1.%20LOGO%20EKSPO%20REI.png',
        date: '28 Februari - 3 Maret 2024',
        place: 'Mall Ratu Indah Makassar',
      },
      {
        img: 'https://ik.imagekit.io/rwvfvdma8/events/2024/2.%20LOGO%20LITDIG.png',
        date: 'Februari - Oktober',
        place: 'Kalimantan, Indonesia'
      },
      {
        img: 'https://ik.imagekit.io/rwvfvdma8/events/2024/3.%20LOGO%20HARKOPNAS.png',
        date: '11 - 14 Juli 2024',
        place: 'Tanjung Pinang'
      },
    ];

    const event2 = [
      {
        img: 'https://ik.imagekit.io/rwvfvdma8/events/2024/4.%20LOGO%20PROPERTY.png',
        date: '28 Agustus - 1 September 2024',
        place: 'Trans Studio Mall Makassar'
      },
      {
        img: 'https://ik.imagekit.io/rwvfvdma8/events/2024/5.%20LOGO%20ISMEEF.png',
        date: '21 - 24 Agustus 2024',
        place: 'Grand City Surabaya'
      },
      {
        img: 'https://ik.imagekit.io/rwvfvdma8/events/2024/6.%20LOGO%20IDEAL%20HOME.png',
        date: '6 - 10 November 2024',
        place: 'Phinisi Point Mall Makassar'
      },      
    ];

    const event3 = [
      {
        img: 'https://ik.imagekit.io/rwvfvdma8/events/2024/7.%20LOGO%20KONSTRUKSI%20INDONESIA.png',
        date: '6 - 8 November 2024',
        place: 'Indonesia Convention Exhibition (ICE)'
      },
      {
        img: 'https://ik.imagekit.io/rwvfvdma8/events/2024/8.%20LOGO%20SULSEL%20EXPO.png',
        date: '6 - 10 Oktober 2024',
        place: ''
      },      
    ];

    const Events = ({img, date, place}) => {
      return (
        <>
          <div className="col-lg-3 col-md-3 col-sm-3" style={{'borderRadius':'1em','backgroundColor':'#ededed','display':'flex','justifyContent':'center','verticalAlign':'middle','position':'relative','margin':'2px'}}>
            <div className="speaker-card">
              <div className="speaker-image">
                <img className="event" src={img} alt="Imgs" />
              </div>
              <div className="custom-speaker-info text-left">
                <p><b>{date}</b></p>
                <p style={{fontSize:'.9em'}}><b>{place}</b></p>
                <br/>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
        </>
      )
    }

    return (
      <>
        {/* ===============  Event Area start  =============== */}
        <div className="event-area">
          <div className="container position-relative pt-110">
            <div className="row">
              <div className="col-lg-12">
                <div className="background-title text-style-one">

                </div>
                <div className="section-head">
                  <p><span className="team-2x"></span></p>
                </div>
              </div>
            </div>

              <div className="row mb-5">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h3><span><b>EVENTS OF THE YEAR</b></span></h3>
                  <hr/>
                </div>
              </div>            

              <div className='row text-center'>
                {event251 && event251.map(({img, date, place}) => <Events img={img} date={date} place={place} />)}
              </div>

              <br />

              <div className='row text-center mb-5'>
                {event252 && event252.map(({img, date, place}) => <Events img={img} date={date} place={place} />)}
              </div>

              <br />

              <div className="row mb-5">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h3><span><b>2024</b></span></h3>
                  <hr/>
                </div>
              </div>

              <div className='row text-center'>
                {event1 && event1.map(({img, date, place}) => <Events img={img} date={date} place={place} />)}
              </div>

              <br />

              <div className='row text-center'>
                {event2 && event2.map(({img, date, place}) => <Events img={img} date={date} place={place} />)}
              </div>

              <br />

              <div className='row text-center'>
                {event3 && event3.map(({img, date, place}) => <Events img={img} date={date} place={place} />)}
              </div>
            
          </div>
        </div>
        {/* ===============  Event Area end  =============== */}
      </>
    );
  }
}

export default Events;
