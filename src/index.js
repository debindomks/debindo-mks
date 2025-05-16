import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
/*image light box*/
import SimpleReactLightbox from "simple-react-lightbox";
/*import wrapping layout*/
import Layout from "./components/App";
// layout default import from compnent
import PrehomeLayout from "./components/layout/Prehome";
import HomeLayout from "./components/layout/Home";
import MainTwoLayout from "./components/layout/Main-two";
/*import all pages from components*/
import Error from "./components/pages/404/Error";
import About from "./components/pages/about/About";
import Client from "./components/pages/client/Client";
import Blog from "./components/pages/Blog/Blog";
import BlogDetails from "./components/pages/Blog/BlogDetails";
import BlogSidebar from "./components/pages/Blog/BlogSidebar";
import BlogStandard from "./components/pages/Blog/BlogStandard";
import ContactPage from "./components/pages/contact/ContactPage";
import EventDetails from "./components/pages/events/eventDetails/EventDetails";
import Events from "./components/pages/events/Events";
import EventSidebar from "./components/pages/events/EventSidebar";
import Portfolio from "./components/pages/portfolio/Portfolio";
import FAQ from "./components/pages/Faq/FAQ";
import Gallary from "./components/pages/Gallary/Gallary";
import Pricing from "./components/pages/pricing/Pricing";
import Schedule from "./components/pages/Schedule/Schedule";
import Team from "./components/pages/team/Team";
import Speaker from "./components/pages/speakers/Speaker";
import SpeakersDetails from "./components/pages/speakers/SpeakersDetails";
import SpeakerTopBar from "./components/pages/speakers/SpeakerTopBar";
/*initialization All css*/
import "./index.css";

// default Warning Error hide
console.log = console.warn = console.error = () => {};

class Root extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter basename="/">
          <Switch>
            <Route exact path="/" component={PrehomeLayout} />
            <Route
              path={`${process.env.PUBLIC_URL}/home-page-2`}
              component={MainTwoLayout}
            />
            <Layout>
              <Route
                path={`${process.env.PUBLIC_URL}/who-we-are`}
                component={HomeLayout} />
              <Route
                path={`${process.env.PUBLIC_URL}/about`}
                component={About}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/client`}
                component={Client}
              />              
              <Route
                path={`${process.env.PUBLIC_URL}/contact`}
                component={ContactPage}
              />

              {/* blog pages componets */}
              <Route path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
              <Route
                path={`${process.env.PUBLIC_URL}/blog-details`}
                component={BlogDetails}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/blog-sidebar`}
                component={BlogSidebar}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/blog-standard`}
                component={BlogStandard}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/team`}
                component={Team}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/speaker`}
                component={Speaker}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/speaker-topbar`}
                component={SpeakerTopBar}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/speaker-details`}
                component={SpeakersDetails}
              />

              {/* Event pages components */}
              <Route
                path={`${process.env.PUBLIC_URL}/event`}
                component={Events}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/event-sidebar`}
                component={EventSidebar}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/event-details`}
                component={EventDetails}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/portfolio`}
                component={Portfolio}
              />

              {/* page menu components */}
              <Route
                path={`${process.env.PUBLIC_URL}/schedule`}
                component={Schedule}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/gallary`}
                component={Gallary}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pricing`}
                component={Pricing}
              />
              <Route path={`${process.env.PUBLIC_URL}/faq`} component={FAQ} />
              <Route
                path={`${process.env.PUBLIC_URL}/error`}
                component={Error}
              />
            </Layout>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Root />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
