import React from "react";
import * as Styled from "./styles";
import Link from "next/link";

// const OurServices = ({ href }) => (
//   <Link href={href} passHref prefetch>
//     <Styled.specializeBtn>START A PROJECT</Styled.specializeBtn>
//   </Link>
// );

const techLogo = [
  "../static/images/home/react-js.svg",
  "../static/images/home/elasticsearch.svg",
  "../static/images/home/react-native.svg",
  "../static/images/home/angularjs.svg",
  "../static/images/home/nodejs.svg",
  "../static/images/home/redis.svg"
];

const TechStackMobile = () => (
  <Styled.contentPadding>
    <Styled.techStackTitleSection>
      <Styled.title>Our Tech Stack</Styled.title>
      <Styled.p>
        we’ve had a hand in training many of today’s web developers, and always
        seek to push the bar of quality higher.
      </Styled.p>
      <Styled.techStackRow>
        <Styled.techStackBlock>
          <Styled.techStackLogo src="../static/images/mobile/home/reactjsMobile.svg" />
        </Styled.techStackBlock>
        <Styled.techStackBlock>
          <Styled.techStackLogo src="../static/images/mobile/home/elasticsearchMobile.svg" />
        </Styled.techStackBlock>
        <Styled.techStackBlock>
          <Styled.techStackLogo src="../static/images/mobile/home/angularJsMobile.svg" />
        </Styled.techStackBlock>
        <Styled.techStackBlock>
          <Styled.techStackLogo src="../static/images/mobile/home/nodeMobile.svg" />
        </Styled.techStackBlock>
        <Styled.techStackBlock>
          <Styled.techStackLogo src="../static/images/mobile/home/reactnativeMobile.svg" />
        </Styled.techStackBlock>
        <Styled.techStackBlock>
          <Styled.techStackLogo src="../static/images/mobile/home/redisMobile.svg" />
        </Styled.techStackBlock>
      </Styled.techStackRow>
    </Styled.techStackTitleSection>
  </Styled.contentPadding>
);

export default TechStackMobile;
