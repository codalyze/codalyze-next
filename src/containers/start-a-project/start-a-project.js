import React from "react";
import HomeBanner from "../../components/HomeBanner";
import * as Styled from "./styles";
import Help from "./help";
import KindOfWebsite from "./kindOfWebsite";
import Budget from "./budget";
import Project from "./project";
import StartAProjectBg from "./images/startAProject";
import ContactForm from "./contactForm";
import CubeBg from "./images/cubeBg";
import Footer from "../../components/footer";

export default class StartAProject extends React.Component {
  render() {
    return (
      <Styled.pageWrapper>
        <HomeBanner
          title="Let’s work"
          secondryTitle="together"
          subTitle="Start a project, schedule a talk or just say hello!"
          titleBreak
        />
        <Styled.cubeWrapper>
          <CubeBg width="100%" height="100%" viewBox="0 0 340.942 837.71" />
        </Styled.cubeWrapper>
        <Styled.containerFluid>
          <Styled.Wrapper>
            <Styled.bannerSvg>
              <StartAProjectBg
                width="100%"
                height="100%"
                viewBox="450 0 2175.68 2359.44"
                preserveAspectRatio="none"
              />
            </Styled.bannerSvg>
            <Styled.commonDiv>
              <Help />
              <KindOfWebsite />
              <Budget />
              <Project />
              <ContactForm />
              <Footer />
            </Styled.commonDiv>
          </Styled.Wrapper>
        </Styled.containerFluid>
      </Styled.pageWrapper>
    );
  }
}
