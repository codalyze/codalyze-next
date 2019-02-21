import React from "react";
import * as Styled from "./styles";
import Link from "next/link";

const techStackRowBg = "../../static/images/home/techstackBackground.png";

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
  <Styled.techStackRow techBg={techStackRowBg}>
    <Styled.FlexContainer>
      <Styled.techStackTitle>Our Tech Stack</Styled.techStackTitle>
      <Styled.techStackSubTitle>
        we’ve had a hand in training many of today’s web
        <br /> developers, and always seek to push the bar of
        <br /> quality higher.
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
  </Styled.techStackRow>
);

export default TechStack;
