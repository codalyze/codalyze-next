import React from "react";
import * as Styled from "./styles";
import MobileBanner from "../../../components/HomeBannerMobile"

const HomeMobile = () => (
  <Styled.commonDiv>
    <MobileBanner
      title="We are"
      secondryTitle="everything IT"
      subTitle="We Help You Ship Ambitious Projects While Avoiding The Risks"
      banner="/static/images/home-banner.png"
      titleBreak
      
    />
  </Styled.commonDiv>
);

export default HomeMobile;
