import React, { Component } from 'react';

import HomeHeader from "../common/_HomeHeader";
import PrehomePage from "../pages/Prehome/Prehome";
import HomeFooter from "../common/_HomeFooter";

class PrehomeLayout extends Component {
    render() {
        return (
            <>
            <HomeHeader />
            <PrehomePage />            
            <HomeFooter />
            </>
        );
    }
}

export default PrehomeLayout;