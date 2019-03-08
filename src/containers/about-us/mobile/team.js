import React, { Fragment } from "react";
import * as Styled from "./styles";
import Link from "next/link";
import Star from './images/star';
import TeamBg from './images/teambottomBg';

const OurServices = ({ href }) => (
    <Link href={href} passHref prefetch>
      <Styled.greenBtn>OUR SERVICES</Styled.greenBtn>
    </Link>
  );
  
  const teamMembers = [
    {
      image:"../static/images/mobile/about/naisheel.png",
      name:"Naisheel",
      designation: "CEO & Founder"
    },
    {
      image:"../static/images/mobile/about/harry.png",
      name:"Harry",
      designation: "CEO & Founder"
    },
    {
      image:"../static/images/mobile/about/gaurav.png",
      name:"Gaurav",
      designation: "CEO & Founder"
    },
    {
      image:"../static/images/mobile/about/rakesh.png",
      name:"Rakesh",
      designation: "CEO & Founder"
    },
    {
      image:"../static/images/mobile/about/rishabh.png",
      name:"Rishabh",
      designation: "CEO & Founder"
    },
    {
      image:"../static/images/mobile/about/surbhi.png",
      name:"Surbhi",
      designation: "CEO & Founder"
    }
  ];

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
      <Styled.teamRow>
        {teamMembers.map((member, index) => (
          <Styled.teamBlock key={index}>
            <Styled.teamMemberImg src={member.image} />
            <Styled.teamTitle>{member.name}</Styled.teamTitle>
            <Styled.teamPosition>{member.designation}</Styled.teamPosition>
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