import React from "react";
import * as Styled from "./styles";

const HomeText = ({title, titleBreak, secondryTitle, subTitle}) => (
  <Styled.twoBlocks>
    <Styled.mainTitle>
      {title}
    </Styled.mainTitle>
    {titleBreak ? <Styled.mainTitle>
      {secondryTitle}
    </Styled.mainTitle> : null}
    <Styled.subTitle>
      {subTitle}
    </Styled.subTitle>
  </Styled.twoBlocks>
);

const HomePageText = () => (
  <Styled.twoBlocks>
    <Styled.pageTitle>
      <Styled.part1>We help you ship</Styled.part1>
      <Styled.part2>ambitious projects</Styled.part2>
      <Styled.part3>while avoiding the risks</Styled.part3>
    </Styled.pageTitle>
  </Styled.twoBlocks>
);

export default ({title, subTitle, banner, titleBreak, secondryTitle, rowReversed, isHomePage}) => (
  <Styled.FlexContainer rowReversed={rowReversed} isHomePage={isHomePage}>
    {isHomePage
    ? <HomePageText />
    : <HomeText title={title} subTitle={subTitle} titleBreak={titleBreak} secondryTitle={secondryTitle} />
    }
    <Styled.twoBlocks rowReversed={rowReversed}>
      <Styled.bannerImage src={banner} />
    </Styled.twoBlocks>
  </Styled.FlexContainer>
);
