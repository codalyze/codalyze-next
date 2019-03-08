import React from "react";
import * as Styled from "./styles";
import MobileBanner from "../../../components/HomeBannerMobile";
import HomeBannerMobileSvg from "./images/homeBannerBg";
import Strategy from "../mobile/strategy";
import SpecializeInMobile from "./specialize";
import TestimonialsMobile from "./testimonials";
import ReviewsMobile from "./reviews";
import TechStackMobile from "./techStack";
import FooterMobile from "../../../components/footer-mobile/index"

const HomeMobile = () => (
  <Styled.pageWrapper>
    <Styled.HomeMobileBgSvg>
      <HomeBannerMobileSvg
        width="100%"
        height="100%"
        viewBox="0 0 448.437 344.879"
      />
    </Styled.HomeMobileBgSvg>
    <MobileBanner
      title="We are everything IT"
      subTitle="We Help You Ship Ambitious Projects While Avoiding The Risks"
      banner="/static/images/mobile/homeBannerMobile.png"
    />
    <Strategy />
    <SpecializeInMobile />
    <TestimonialsMobile />
    <ReviewsMobile />
    <TechStackMobile />
    <FooterMobile />
  </Styled.pageWrapper>
);

export default HomeMobile;
