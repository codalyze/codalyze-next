import React, { Component } from "react";
import * as Styled from "./styles";
import HomeBanner from "../../components/HomeBanner";
import CareerBgSvg from "../../static/images/career/careerBg";

const openings = [
  {
    designation: "Web Development",
    experience: "2+ years of experience in UI Development"
  },
  {
    designation: "UI design",
    experience: "2+ years of experience in UI Development"
  },
  {
    designation: "App development",
    experience: "2+ years of experience in UI Development"
  },
  {
    designation: "Web Development",
    experience: "2+ years of experience in UI Development"
  },
  {
    designation: "UI design",
    experience: "2+ years of experience in UI Development"
  },
  {
    designation: "App development",
    experience: "2+ years of experience in UI Development"
  }
];

export default class Career extends Component {
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
        />
        <Styled.openingsRow>
          <Styled.CareerBg>
            <CareerBgSvg
              width="100%"
              height="100%"
              viewBox="0 0 1920.998 1200"
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
              <Styled.viewMore>View More</Styled.viewMore>
            </Styled.FlexContainer>
          </Styled.openingSection>
        </Styled.openingsRow>
      </Styled.pageWrapper>
    );
  }
}
