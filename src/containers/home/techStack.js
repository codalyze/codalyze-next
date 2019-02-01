import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import TechStackBg from "../../static/images/techStackBg";

const OurServices = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.specializeBtn>START A PROJECT</Styled.specializeBtn>
  </Link>
);

const techLogo = [
  "../static/images/react-js.svg",
  "../static/images/elasticsearch.svg",
  "../static/images/react-native.svg",
  "../static/images/angularjs.svg",
  "../static/images/nodejs.svg",
  "../static/images/redis.svg"
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
              <Styled.techLogoBlock key={id}>
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
