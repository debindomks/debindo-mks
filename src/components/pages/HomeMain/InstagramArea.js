import $ from "jquery";
import React, { Component } from "react";
import '../../../assets/css/instagram-button.css';
class InstagramArea extends Component {
  componentDidMount() {
    // curator.io
    let i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";
    i.src="https://cdn.curator.io/published/984aefe2-7be1-4406-904b-c7f42d14c9f6.js";
    e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
  }

  render() {
    return (<>
        <div className="event-area">
          <div className="container position-relative pt-110">
            <div className="row align-items-center">
              <div className="col-lg-12 text-center">
                <a href="https://www.instagram.com/debindomks" className="instagram-button" target="_blank"><img src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png" width={25} />Follow Us @debindomks</a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">

                <div id="curator-feed-default-feed-layout" style={{marginTop: '30px'}}>
                  <a href="https://curator.io" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a>
                </div>

              </div>
            </div>
          </div>
        </div>
    </>);
  }
}
export default InstagramArea;