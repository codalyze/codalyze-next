import React from "react";
import * as Styled from "./styles";

export default () => (
  <Styled.FlexContainer>
    <Styled.twoBlocks>
      <Styled.mainTitle>
        We are <br />& everything IT
      </Styled.mainTitle>
      <Styled.subTitle>
        We Help You Ship Ambitious Projects While Avoiding The Risks
      </Styled.subTitle>
    </Styled.twoBlocks>
    <Styled.twoBlocks>
      <Styled.HomeBannerImg src="/static/images/rubik-cube-banner.png"></Styled.HomeBannerImg>
    </Styled.twoBlocks>
  </Styled.FlexContainer>
);
