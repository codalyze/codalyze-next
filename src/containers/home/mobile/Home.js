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

import Home1 from '../commons/Home1';

import dynamic from 'next/dynamic'

const Home2 = dynamic(() => import('../commons/Home2'));

import LazySvgLoader from '../../../components/LazySvgLoader';

export default class HomeMobile extends React.PureComponent {
  render () {
    return (
      <Styled.pageWrapper>
        <Styled.HomeMobileBgSvg>
          <HomeBannerMobileSvg
            width="100%"
            height="100%"
            viewBox="0 0 448.437 344.879"
          />
        </Styled.HomeMobileBgSvg>
        <MobileBanner
          BannerSvg={() => <LazySvgLoader FirstImage={Home1} LazyImage={Home2} />}
          isHomePage
        />
        <Strategy />
        <SpecializeInMobile />
        <TestimonialsMobile />
        <ReviewsMobile />
        <TechStackMobile />
        <FooterMobile />
      </Styled.pageWrapper>
    );
  }
}
