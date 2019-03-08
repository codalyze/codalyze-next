import React, { Component, Fragment } from "react";
import * as Styled from "./styles";
import Banner from "../../../components/HomeBannerMobile";
import WorkBannerBg from "./images/workBannerBg";
import FooterMobile from "../../../components/footer-mobile";
import Link from "next/link";
import LeftBg from "./images/workBgLeft";
import RightBg from "./images/workBgRight";
import BottomBg from "./images/workBottomBg";
import Star from "./images/star";

const Content = ({ pageTitle, content, image, button, href }) => (
  <Fragment>
    <Styled.title>{pageTitle}</Styled.title>
    <Styled.p>{content}</Styled.p>
    <Styled.img src={image} />
    <Link href={href} passHref prefetch>
      <Styled.btn>{button}</Styled.btn>
    </Link>
  </Fragment>
);

const WorkMobile = () => (
  <Fragment>
    <Styled.workMobileBgContainer>
      <WorkBannerBg
        width="100%"
        height="100%"
        viewBox="100 0 474.125 584.329"
      />
    </Styled.workMobileBgContainer>
    <Banner
      banner="/static/images/mobile/work/workMobileBanner.png"
      title="Problems we"
      secondryTitle="solved"
      subTitle="Our clients and ventures."
      titleBreak
    />
    <Styled.betKingWork>
      <Styled.betkingStarBgContainer>
        <Star width="100%" height="100%" viewBox="0 0 158.595 154.538" />
      </Styled.betkingStarBgContainer>
      <Content
        pageTitle="BetKing"
        content="BetKing is an online crypto gambling casino offering sports betting, live dealer games and other provably fair casino games like dice and roulette. From September 2014 to December 2016."
        image="/static/images/mobile/work/betKingMobile.png"
        button="VIEW CASE STUDY"
        href="/#"
      />
    </Styled.betKingWork>
    <Styled.pageWrapper>
      <Styled.leftBgContainer>
        <LeftBg width="100%" height="100%" viewBox="120 0 357.314 560.106" />
      </Styled.leftBgContainer>
      <Content
        pageTitle="KheloMore"
        content="BetKing is an online crypto gambling casino offering sports betting, live dealer games and other provably fair casino games like dice and roulette. From September 2014 to December 2016."
        image="/static/images/mobile/work/khelomoreMobile.png"
        button="VIEW CASE STUDY"
        href="/#"
      />
      <Styled.kheloBgStarContainer>
        <Star width="100%" height="100%" viewBox="0 0 158.595 154.538" />
      </Styled.kheloBgStarContainer>
    </Styled.pageWrapper>
    <Styled.pageWrapper>
      <Styled.rightBgContainer>
        <RightBg width="100%" height="100%" viewBox="120 0 357.314 560.106" />
      </Styled.rightBgContainer>
      <Content
        pageTitle="Fitcircle"
        content="BetKing is an online crypto gambling casino offering sports betting, live dealer games and other provably fair casino games like dice and roulette. From September 2014 to December 2016."
        image="/static/images/mobile/work/fitcircleMobile.png"
        button="VIEW CASE STUDY"
        href="/#"
      />
      <Styled.fircircleStarBgContainer>
        <Star width="100%" height="100%" viewBox="0 0 158.595 154.538" />
      </Styled.fircircleStarBgContainer>
    </Styled.pageWrapper>
    <Styled.pageWrapper>
      <Styled.leftBgContainer>
        <LeftBg width="100%" height="100%" viewBox="120 0 357.314 560.106" />
      </Styled.leftBgContainer>
      <Content
        pageTitle="Radframe"
        content="BetKing is an online crypto gambling casino offering sports betting, live dealer games and other provably fair casino games like dice and roulette. From September 2014 to December 2016."
        image="/static/images/mobile/work/radframe.png"
        button="VIEW CASE STUDY"
        href="/#"
      />
      <Styled.bottomBgContainer>
        <BottomBg width="100%" height="100%" viewBox="0 0 332.557 370.838" />
      </Styled.bottomBgContainer>
    </Styled.pageWrapper>
    <FooterMobile />
  </Fragment>
);

export default WorkMobile;
