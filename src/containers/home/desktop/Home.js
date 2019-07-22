import React from "react";
import HomeBanner from "../../../components/HomeBanner";
import * as Styled from "./styles";
import HomeBannerSvg from "./images/home-banner-bg";
// import { Title } from "../../../utils/globalStyles";
import Strategy from "../desktop/strategy";
import SpecializeIn from "../desktop/specialize";
import Testimonial from "../desktop/testimonials";
import Reviews from "../desktop/reviews";
import Clients from "./clients";
import Footer from "../../../components/footer";

import Flutter from "../commons/Flutter";
import NodeJs from "../commons/NodeJs";
import ReactJs from "../commons/ReactJs";
import ReactNative from "../commons/ReactNative";
import VueJs from "../commons/VueJs";
import Home1 from "../commons/Home1";

import dynamic from "next/dynamic";

import EUCookieConsent from "../../cookies/cookieConsent";

const Home2 = dynamic(() => import("../commons/Home2"), {
  loading: () => null
});

import LazySvgLoader from "../../../components/LazySvgLoader";

const technologies = [Flutter, NodeJs, ReactJs, ReactNative, VueJs];

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Styled.pageWrapper>
        <Styled.bannerSvg>
          <HomeBannerSvg
            width="100%"
            height="100%"
            viewBox="0 0 1920.997 1275.951"
          />
        </Styled.bannerSvg>
        <HomeBanner
          banner="/static/images/home-banner.png"
          BannerSvg={() => (
            <LazySvgLoader FirstImage={Home1} LazyImage={Home2} />
          )}
          titleBreak
          isHomePage
        />
        <Styled.technologies>
          {technologies.map((Technology, idx) => (
            <Styled.technologyItem key={idx}>
              <Technology />
            </Styled.technologyItem>
          ))}
        </Styled.technologies>
        <Strategy />
        <SpecializeIn />
        <Testimonial />
        <h1>CLUTCH BANNER HERE</h1>

        <Reviews />

        <Clients />
        <Footer />

        <EUCookieConsent />
      </Styled.pageWrapper>
    );
  }
}
