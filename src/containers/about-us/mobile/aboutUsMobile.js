import React, { PureComponent, Fragment } from "react";
import Fade from "react-reveal/Fade";
import * as Styled from "./styles";
import Banner from "../../../components/HomeBannerMobile";
import AboutComponent from "./aboutComponent";
import TeamMobile from "./team";
import Footer from "../../../components/footer-mobile";
import Star from "./images/star";
import HighTechBg from "./images/highTechBg";
import LoveBg from "./images/loveBg";

import About1 from "../commons/About1";

import dynamic from "next/dynamic";

const About2 = dynamic(() => import("../commons/About2"), {
  loading: () => null
});

import LazySvgLoader from "../../../components/LazySvgLoader";

export default class AboutUsMobile extends PureComponent {
  render() {
    return (
      <Fragment>
        <Banner
          BannerSvg={() => (
            <LazySvgLoader FirstImage={About1} LazyImage={About2} isMobile />
          )}
          title="Meet the"
          secondryTitle="team behind it"
          subTitle="We aid you in achieving a tight deadline and help you get to market fast."
          titleBreak
        />
        <Fade>
          <Styled.pageWrapper>
            <Styled.focusedBgContainer>
              <Star width="100%" height="100%" viewBox="0 0 158.595 154.538" />
            </Styled.focusedBgContainer>
            <AboutComponent
              headingOne="Who We Are"
              content="Based out of Powai, Mumbai, Codalyze is a diverse community of people committed to using modern JavaScript and software development best practices to build beautiful web & mobile applications for our clients. We are dedicated to helping startups and enterprises move to the modern web."
            />
          </Styled.pageWrapper>
        </Fade>
        <Fade>
          <Styled.pageWrapper>
            <Styled.optBgContainer>
              <Star width="100%" height="100%" viewBox="0 0 158.595 154.538" />
            </Styled.optBgContainer>
            <AboutComponent
              headingOne="Optimize Approach"
              content="We aid you in achieving a tight deadline and help you get to market fast. We design and develop web and mobile apps for growth-minded companies - both startups and big enterprises."
              image="/static/images/mobile/about/optimizeMobile.png"
            />
          </Styled.pageWrapper>
        </Fade>
        <Fade>
          <Styled.pageWrapper>
            <Styled.highBgContainer>
              <HighTechBg
                width="100%"
                height="100%"
                viewBox="100 0 300.267 758.327"
              />
            </Styled.highBgContainer>
            <AboutComponent
              headingOne="High Tech, Low Risk"
              content="Building custom software is risky and hard, but there’s a way to stack those odds in your favour. It’s all about the right people and process. We create hands-on partnerships with our clients and share a proven process we’ve honed over successful software projects."
              image="/static/images/mobile/about/hightechMobile.png"
            />
          </Styled.pageWrapper>
        </Fade>
        <Fade>
          <Styled.pageWrapper>
            <Styled.focusedBgContainer>
              <Star width="100%" height="100%" viewBox="0 0 158.595 154.538" />
            </Styled.focusedBgContainer>
            <AboutComponent
              headingOne="Focused Product Teams"
              content="You’ll be working with a small, dedicated team built to fit the needs of your project. Enjoy deep focus and productive relationships. Partner with us and we'll make your code and team better."
              image="/static/images/mobile/about/teamMobile.png"
            />
          </Styled.pageWrapper>
        </Fade>
        <Fade>
          <Styled.pageWrapper>
            <Styled.loveBgContainer>
              <LoveBg
                width="100%"
                height="100%"
                viewBox="100 0 370.462 515.44"
              />
            </Styled.loveBgContainer>
            <AboutComponent
              headingOne="We Love Start-Ups"
              contentTwo="We share your passion for changing the world"
              contentThree="We've helped ideas grow in the past and it feels beautiful"
              contentFour="If you run a start-up and are looking for a tech partner, please say Hi!"
              image="/static/images/mobile/about/startupMobile.png"
              hide
              multiple
            />
          </Styled.pageWrapper>
        </Fade>
        <Fade>
          <TeamMobile />
        </Fade>
        <Footer />
      </Fragment>
    );
  }
}
