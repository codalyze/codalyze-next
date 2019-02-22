import React from "react";
import HomeBanner from "../../../components/HomeBanner";
import * as Styled from "./styles";
import HomeBannerSvg from "./images/home-banner-bg";
// import { Title } from "../../../utils/globalStyles";
import Strategy from "../desktop/strategy";
import SpecializeIn from "../desktop/specialize";
import Testimonial from "../desktop/testimonials";
import Reviews from "../desktop/reviews";
import TechStack from "../desktop/techStack";
import Footer from "../../../components/footer";

const HomePage = ({ mq }) => (
  <Styled.pageWrapper>
    <Styled.bannerSvg>
      <HomeBannerSvg
        width="100%"
        height="100%"
        viewBox="0 0 1920.997 1275.951"
      />
    </Styled.bannerSvg>
    <HomeBanner
      title="We are"
      secondryTitle="everything IT"
      subTitle="We Help You Ship Ambitious Projects"
      banner="/static/images/home-banner.png"
      titleBreak
    />
    <Strategy />
    <SpecializeIn />
    <Testimonial />
    <Reviews />
    <TechStack />
    <Footer />
  </Styled.pageWrapper>
);

export default HomePage;
