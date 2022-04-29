import React, { Component } from 'react';

import HomeHeader from "../common/_HomeHeader";
import HomePage from "../pages/HomeMain/HomePage";
import HomeFooter from "../common/_HomeFooter";

class HomeLayout extends Component {
    render() {
        return (
            <>
            <HomeHeader />
            <HomePage />            
            <HomeFooter />
            </>
        );
    }
}

export default HomeLayout;