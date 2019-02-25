import React from "react";
import * as Styled from "./styles";
import MobileBanner from "../../../components/HomeBannerMobile";
import Strategy from "../mobile/strategy";
import HomeBannerMobileSvg from "./images/homeBannerBg";

const HomeMobile = () => (
  <Styled.commonDiv>
    <Styled.HomeMobileBgSvg>
      <HomeBannerMobileSvg
        width="100%"
        height="100%"
        viewBox="0 0 448.437 344.879"
      />
    </Styled.HomeMobileBgSvg>
    <MobileBanner
      title="We are"
      secondryTitle="everything IT"
      subTitle="We Help You Ship Ambitious Projects While Avoiding The Risks"
      banner="/static/images/mobile/homeBannerMobile.png"
      titleBreak
    />
    <Strategy />
  </Styled.commonDiv>
);

export default HomeMobile;
