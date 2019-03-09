import React from "react";
import * as Styled from "./styles";

const HomeText = () => (
  <Styled.pageTitle>
    <Styled.part1>We help you ship</Styled.part1>
    <Styled.part2>ambitious projects</Styled.part2>
    <Styled.part3>while avoiding the risks</Styled.part3>
  </Styled.pageTitle>
);

const HomeBannerMobile = (
  {title,
  subTitle,
  banner,
  BannerSvg,
  titleBreak,
  secondryTitle,
  isHomePage
}
) => (
  <Styled.commonDiv>
    <Styled.mobileBanner>
      {BannerSvg
      ? <BannerSvg />
      : <Styled.bannerImg src={banner} />
      }
      {isHomePage ?
      <HomeText /> :
      (
        <React.Fragment>
          <Styled.mainTitle>{title}</Styled.mainTitle>
          {titleBreak ? <Styled.mainTitle>{secondryTitle}</Styled.mainTitle> : null}
          <Styled.subTitle>{subTitle}</Styled.subTitle>
        </React.Fragment>
      )
      }
    </Styled.mobileBanner>
  </Styled.commonDiv>
);

export default HomeBannerMobile;
