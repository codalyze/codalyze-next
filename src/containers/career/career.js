import React, { PureComponent } from "react";
import * as Styled from "./styles";
import HomeBanner from "../../components/Banner";
// import HomeBanner from "../../components/HomeBanner";
import CareerBgSvg from "../../static/images/career/careerBg";
import Footer from "../../components/footer";

import Career1 from './images/Career1';

import dynamic from 'next/dynamic'

const Career2 = dynamic(() => import('./images/Career2'), {loading: () => null});

import LazySvgLoader from '../../components/LazySvgLoader';

const openings = [
  {
    designation: "Frontend Developer",
    experience: "2+ years of experience in either ReactJS or VueJS. Expertise in Styled Components / CSS Modules is a plus."
  },
  {
    designation: "Senior NodeJS Developer",
    experience: "2+ years of experience in NodeJS. Experience in MongoDB / Postgres desired. Must have experience in TypeScript."
  },
  {
    designation: "React Native / Flutter Developer",
    experience: "1+ years of experience in React Native or Flutter. Relevant experience in Android / IOS Development"
  }
  // {
  //   designation: "Web Development",
  //   experience: "2+ years of experience in UI Development"
  // },
  // {
  //   designation: "UI design",
  //   experience: "2+ years of experience in UI Development"
  // },
  // {
  //   designation: "App development",
  //   experience: "2+ years of experience in UI Development"
  // }
];

export default class Career extends PureComponent {
  render() {
    return (
      <Styled.pageWrapper>
        <HomeBanner
          title="Wanna join"
          secondryTitle="the team?"
          subTitle="Everyday, we work on problems no one has dared to solve before."
          banner="/static/images/career/careerBanner.png"
          titleBreak
          rowReversed
          BannerSvg={() => <LazySvgLoader FirstImage={Career1} LazyImage={Career2} isMobile={props => props.mq === 'mobile'} rowReversed />}
        />
        <Styled.openingsRow>
          <Styled.CareerBg>
            <CareerBgSvg
              width="100%"
              height="100%"
              viewBox="0 0 1920.998 1600"
            />
          </Styled.CareerBg>
          <Styled.openingSection>
            <Styled.FlexContainer>
              <Styled.title>Current openings</Styled.title>
              <Styled.openingsList>
                {openings.map((list, index) => (
                  <Styled.openingsBlock key={index}>
                  <Styled.designationTitle>
                    {list.designation}
                  </Styled.designationTitle>
                  <Styled.experienceSubTitle>
                    {list.experience}
                  </Styled.experienceSubTitle>
                </Styled.openingsBlock>
                ))}
              </Styled.openingsList>
              <Styled.sendYourResume>
                Send your resumes to <a href="mailto:mail@codalyze.com" title="mail@codalyze.com">mail@codalyze.com</a>
              </Styled.sendYourResume>
              {/* <Styled.viewMore>View More</Styled.viewMore> */}
            </Styled.FlexContainer>
          </Styled.openingSection>
        </Styled.openingsRow>
        <Footer />  
      </Styled.pageWrapper>
    );
  }
}
