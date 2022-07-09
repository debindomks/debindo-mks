import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import LayoutFooter from "./common/LayoutFooter";
import LayoutHeader from "./common/LayoutHeader";
import MenuContactHeader from "./common/MenuContactHeader";

class Layout extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    let contactHeader = () => {
      if(window.location.pathname === "/contact") {
        return <MenuContactHeader />;
      } else {
        return <LayoutHeader />;
      }
    }
    return (
      <>
      {/* all inner page componnets and innner heade footer */}
        {contactHeader()}
        {this.props.children}
        <LayoutFooter />
      </>
    );
  }
}

export default Layout;
