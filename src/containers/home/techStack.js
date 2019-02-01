import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import TechStackBg from "./images/techStackBg";

const OurServices = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.specializeBtn>START A PROJECT</Styled.specializeBtn>
  </Link>
);

const techLogo = [
  "../static/images/home/react-js.svg",
  "../static/images/home/elasticsearch.svg",
  "../static/images/home/react-native.svg",
  "../static/images/home/angularjs.svg",
  "../static/images/home/nodejs.svg",
  "../static/images/home/redis.svg"
];

const TechStack = () => (
  <Styled.techStackRow>
    <Styled.techStackSvg>
          <TechStackBg width="100%" height="100%" viewBox="0 0 1920.998 1400"/>
        </Styled.techStackSvg>
    <Styled.techStack>
      <Styled.FlexContainer>
        <Styled.techStackTitle>Our Tech Stack</Styled.techStackTitle>
        <Styled.techStackSubTitle>
          we've had a hand in training many of today's web developers, and
          always seeks to push the bar of
        </Styled.techStackSubTitle>
        <Styled.techLogoRow>
          {techLogo.map((x, id) => {
            return (
              <Styled.techLogoBlock>
                <img src={x} />
              </Styled.techLogoBlock>
            );
          })}
        </Styled.techLogoRow>
        <OurServices href={"/services"} />
      </Styled.FlexContainer>
    </Styled.techStack>
  </Styled.techStackRow>
  
);

export default TechStack;
