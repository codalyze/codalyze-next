import React, { Fragment } from "react";
import * as Styled from "./styles";
import Link from "next/link";
import Star from './images/star';
import TeamBg from './images/teambottomBg';

import {teamMembers, socialIcons} from "../commons/team-social";
import {SocialWrapper} from "../commons/styles";

const OurServices = ({ href }) => (
    <Link href={href} passHref prefetch>
      <Styled.greenBtn>OUR SERVICES</Styled.greenBtn>
    </Link>
  );

const teamMobile = () => (
<Fragment>
    <Styled.teamContainer>
      <Styled.teamStarBgContainer>
        <Star
          width="100%"
          height="100%"
          viewBox="0 0 158.595 154.538"
        />
      </Styled.teamStarBgContainer>
      <Styled.TeamHeader>The team that makes it all possible</Styled.TeamHeader>
      <Styled.teamRow>
        {teamMembers.map((member, index) => (
          <Styled.teamBlock key={index}>
            <Styled.teamMemberImg src={member.image} />
            <Styled.teamTitle>{member.name}</Styled.teamTitle>
            <Styled.teamPosition>{member.position}</Styled.teamPosition>
            <SocialWrapper>
                  {member.socialButtons.map(social =>
                    <a href={social.url} target="_blank" key={social.type}>
                      <img src={socialIcons[social.type]} height="24" height="24" />
                    </a>
                    )}
                </SocialWrapper>
          </Styled.teamBlock>
        ))}
      </Styled.teamRow>
      <OurServices href={"/start-a-project"} />
      <Styled.teamBgContainer>
        <TeamBg
          width="100%"
          height="100%"
          viewBox="200 0 500.763 450.412"
        />
      </Styled.teamBgContainer>
    </Styled.teamContainer>
  </Fragment>
);

 export default teamMobile;