import { Component } from "react";
import EventTimer from "./EventTimer";
import HeroArea from "./HeroArea";
import PopularEventArea from "./PopularEventArea";
import RecentSchedule from "./RecentSchedule";
import TestimonialArea from "./TestimonialArea";
import InstagramArea from "./InstagramArea";

class HomePage extends Component {
  render() {
    return (
      <>
        {/* all section component import start */}
        <HeroArea />
        <PopularEventArea />
        <RecentSchedule />
        <TestimonialArea />
        <EventTimer />
        <InstagramArea />
      </>
    );
  }
}

export default HomePage;