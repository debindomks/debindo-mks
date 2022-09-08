import React, { Component } from 'react';

import WhoweareHeader from "../common/_WhoweareHeader";
import HomePage from "../pages/HomeMain/HomePage";
import HomeFooter from "../common/_HomeFooter";

class HomeLayout extends Component {
    render() {
        return (
            <>
            <WhoweareHeader />
            <HomePage />            

            </>
        );
    }
}

export default HomeLayout;