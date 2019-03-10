import React from "react";
import * as Styled from "./styles";
import TeamMemberBg from "./images/teamMemberBg";
import LoveStatUpsBg from "./images/loveStartups";
import HitechBg from "./images/HiTechBg";

import {teamMembers, socialIcons} from "../commons/team-social";
import {SocialWrapper} from "../commons/styles";

export const HiTech = () => {
  return (
    <Styled.HitechMain>
      <HitechBg width="100%" height="100%" viewBox="0 0 1920 2143.35" />
      <Styled.HitechInner>
        <Styled.FlexContainer>
          <Styled.devisonDiv>
            <Styled.leftDiv>
              <Styled.imageRight src="/static/images/about-us/Artboard-7.png" />
            </Styled.leftDiv>
            <Styled.rightDiv>
              <Styled.h2>High Tech, Low Risk</Styled.h2>
              <Styled.p>
                Building custom software is risky and hard, but there’s a way to
                stack those odds in your favour. It’s all about the right people
                and process. We create hands-on partnerships with our clients
                and share a proven process we’ve honed over successful software
                projects.
              </Styled.p>
            </Styled.rightDiv>
          </Styled.devisonDiv>
        </Styled.FlexContainer>
      </Styled.HitechInner>
    </Styled.HitechMain>
  );
};

export const ProductTeams = () => {
  return (
    <Styled.ProducTeamWrapper>
      <Styled.ProducTeamInner>
        <Styled.FlexContainer>
          <Styled.devisonDiv>
            <Styled.leftDiv>
              <Styled.h2>Focused Product Teams</Styled.h2>
              <Styled.p>
                You’ll be working with a small, dedicated team built to fit the
                needs of your project. Enjoy deep focus and productive
                relationships. Partner with us and we'll make your code and team
                better.
              </Styled.p>
            </Styled.leftDiv>
            <Styled.rightDiv right>
              <Styled.imageRight src="/static/images/about-us/Artboard-5.png" />
            </Styled.rightDiv>
          </Styled.devisonDiv>
        </Styled.FlexContainer>
      </Styled.ProducTeamInner>
    </Styled.ProducTeamWrapper>
  );
};

export const TeamMember = () => {
  return (
    <Styled.TeamMain>
      <Styled.TeamBg>
        <TeamMemberBg width="100%" height="100%" viewBox="0 0 1920.998 700" />
      </Styled.TeamBg>
      <Styled.FlexContainer>
        <Styled.h2>
          The team that makes <br />
          it all possible
        </Styled.h2>
        <Styled.TeamPhotowrapper>
          {teamMembers.map(member => (
            <Styled.Photo key={member.id}>
              <Styled.WrapperBlock>
                <Styled.TeamMemberImage src={member.image} />
                <Styled.TeamMemberName>{member.name}</Styled.TeamMemberName>
                <Styled.TeamPosition>{member.position}</Styled.TeamPosition>
                <SocialWrapper>
                  {member.socialButtons.map(social =>
                    <a href={social.url} target="_blank" key={social.type}>
                      <img src={socialIcons[social.type]} height="24" height="24" />
                    </a>
                    )}
                </SocialWrapper>
              </Styled.WrapperBlock>
            </Styled.Photo>
          ))}
        </Styled.TeamPhotowrapper>
        <Styled.ButtonWrapper>
          <Styled.Button>START A PROJECT</Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.FlexContainer>
    </Styled.TeamMain>
  );
};

export const LoveStatUps = () => {
  return (
    <Styled.LoveStartupsDiv>
      <LoveStatUpsBg
        width="100%"
        height="100%"
        viewBox="0 0 1920.997 1275.951"
      />
      <Styled.innerDiv>
        <Styled.FlexContainer>
          <Styled.devisonDiv>
            <Styled.leftDiv>
              <Styled.imageRight src="/static/images/about-us/Artboard-6.png" />
            </Styled.leftDiv>
            <Styled.rightDiv>
              <Styled.h2>We Love Start-Ups</Styled.h2>

              <Styled.listUl>
                <Styled.li>
                  <Styled.circleDiv />
                  We share your passion for changing the world
                </Styled.li>
                <Styled.li>
                  <Styled.circleDiv />
                  We've helped ideas grow in the past and it feels beautiful
                </Styled.li>
                <Styled.li>
                  <Styled.circleDiv />
                  If you run a start-up and are looking for a tech partner,
                  please say Hi!
                </Styled.li>
              </Styled.listUl>
            </Styled.rightDiv>
          </Styled.devisonDiv>
        </Styled.FlexContainer>
      </Styled.innerDiv>
    </Styled.LoveStartupsDiv>
  );
};

const AboutOtherSections = () => {
  return (
    <Styled.mainDiv>
      <HiTech />
      <ProductTeams />
      <LoveStatUps />
      <TeamMember />
    </Styled.mainDiv>
  );
};

export default AboutOtherSections;
