import React from "react";
import * as Styled from "./styles";

const HomeBannerMobile = (
  {title,
  subTitle,
  banner,
  titleBreak,
  secondryTitle}
) => (
  <Styled.commonDiv>
    <Styled.mobileBanner>
      <Styled.bannerImg src={banner} />
      <Styled.mainTitle>{title}</Styled.mainTitle>
      {titleBreak ? <Styled.mainTitle>{secondryTitle}</Styled.mainTitle> : null}
      <Styled.subTitle>{subTitle}</Styled.subTitle>
    </Styled.mobileBanner>
  </Styled.commonDiv>
);

export default HomeBannerMobile;
