import React from "react";
import * as Styled from "./styles";
import Link from "next/link";

const OurServices = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.greenBtn>OUR SERVICES</Styled.greenBtn>
  </Link>
);

const techLogoMob = [
  "../static/images/mobile/home/reactjsMobile.svg",
  "../static/images/mobile/home/elasticsearchMobile.svg",
  "../static/images/mobile/home/angularJsMobile.svg",
  "../static/images/mobile/home/nodeMobile.svg",
  "../static/images/mobile/home/reactnativeMobile.svg",
  "../static/images/mobile/home/redisMobile.svg"
];

const TechStackMobile = () => (
  <Styled.pageWrapper>
    <Styled.techStackContainer>
      <Styled.title>Our Tech Stack</Styled.title>
      <Styled.p>
        we’ve had a hand in training many of today’s web developers, and always
        seek to push the bar of quality higher.
      </Styled.p>
      <Styled.techStackRow>
        {techLogoMob.map((logo, index) => (
          <Styled.techStackBlock key={index}>
            <Styled.techStackLogo src={logo} />
          </Styled.techStackBlock>
        ))}
      </Styled.techStackRow>
      <OurServices href={"/start-a-project"} />
    </Styled.techStackContainer>
  </Styled.pageWrapper>
);

export default TechStackMobile;
