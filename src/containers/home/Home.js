import React from "react";
import HomeBanner from "../../components/HomeBanner";
import * as Styled from "./styles";
import HomeBannerSvg from "../../static/images/home-banner-bg";
import { Title } from "../../utils/globalStyles";
import Strategy from "../home/strategy";
import SpecializeIn from "../home/specialize";
import Testimonial from "../home/testimonials";
import Reviews from "../home/reviews";
import TechStack from "../home/techStack";

const HomePage = () => (
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
  </Styled.pageWrapper>
);

export default HomePage;
