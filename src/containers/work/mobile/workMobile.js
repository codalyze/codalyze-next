import React, { Component, Fragment } from "react";
import * as Styled from "./styles";
import Banner from "../../../components/HomeBannerMobile";
import WorkBannerBg from "./images/workBannerBg";
import FooterMobile from "../../../components/footer-mobile";
import Link from "next/link";

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
      <Content
        pageTitle="BetKing"
        content="BetKing is an online crypto gambling casino offering sports betting, live dealer games and other provably fair casino games like dice and roulette. From September 2014 to December 2016."
        image="/static/images/mobile/work/betKingMobile.png"
        button="VIEW CASE STUDY"
        href="/#"
      />
    </Styled.betKingWork>
    <Styled.khelomoreWork>
      <Content
        pageTitle="KheloMore"
        content="BetKing is an online crypto gambling casino offering sports betting, live dealer games and other provably fair casino games like dice and roulette. From September 2014 to December 2016."
        image="/static/images/mobile/work/khelomoreMobile.png"
        button="VIEW CASE STUDY"
        href="/#"
      />
    </Styled.khelomoreWork>
    <Styled.fitcircleWork>
      <Content
        pageTitle="Fitcircle"
        content="BetKing is an online crypto gambling casino offering sports betting, live dealer games and other provably fair casino games like dice and roulette. From September 2014 to December 2016."
        image="/static/images/mobile/work/fitcircleMobile.png"
        button="VIEW CASE STUDY"
        href="/#"
      />
    </Styled.fitcircleWork>
    <Styled.radframeWork>
      <Content
        pageTitle="Radframe"
        content="BetKing is an online crypto gambling casino offering sports betting, live dealer games and other provably fair casino games like dice and roulette. From September 2014 to December 2016."
        image="/static/images/mobile/work/radframe.png"
        button="VIEW CASE STUDY"
        href="/#"
      />
    </Styled.radframeWork>
    <FooterMobile />
  </Fragment>
);

export default WorkMobile;
