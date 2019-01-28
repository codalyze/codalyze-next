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
                <Styled.openingsBlock>
                  <Styled.designationTitle>
                    Web Development
                  </Styled.designationTitle>
                  <Styled.experienceSubTitle>
                    2+ years of experience in UI Development
                  </Styled.experienceSubTitle>
                </Styled.openingsBlock>
                <Styled.openingsBlock>
                  <Styled.designationTitle>UI design</Styled.designationTitle>
                  <Styled.experienceSubTitle>
                    2+ years of experience in UI Development
                  </Styled.experienceSubTitle>
                </Styled.openingsBlock>
                <Styled.openingsBlock>
                  <Styled.designationTitle>
                    App development
                  </Styled.designationTitle>
                  <Styled.experienceSubTitle>
                    2+ years of experience in UI Development
                  </Styled.experienceSubTitle>
                </Styled.openingsBlock>
                <Styled.openingsBlock>
                  <Styled.designationTitle>
                    Web Development
                  </Styled.designationTitle>
                  <Styled.experienceSubTitle>
                    2+ years of experience in UI Development
                  </Styled.experienceSubTitle>
                </Styled.openingsBlock>
                <Styled.openingsBlock>
                  <Styled.designationTitle>UI design</Styled.designationTitle>
                  <Styled.experienceSubTitle>
                    2+ years of experience in UI Development
                  </Styled.experienceSubTitle>
                </Styled.openingsBlock>
                <Styled.openingsBlock>
                  <Styled.designationTitle>
                    App development
                  </Styled.designationTitle>
                  <Styled.experienceSubTitle>
                    2+ years of experience in UI Development
                  </Styled.experienceSubTitle>
                </Styled.openingsBlock>
              </Styled.openingsList>
            </Styled.FlexContainer>
          </Styled.openingSection>
        </Styled.openingsRow>
      </Styled.pageWrapper>
    );
  }
}
