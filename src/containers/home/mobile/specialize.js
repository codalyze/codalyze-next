import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import SpecializeMobileBg from "./images/specializeMobileBg";

const mobSpecialize = [
  {
    img: "../static/images/mobile/home/website.svg",
    title: "Website",
    content:
      "We build modern web applications of all shapes and sizes using the latest technologies."
  },
  {
    img: "../static/images/mobile/home/backend.svg",
    title: "Backend",
    content:
      "We develop bulletproof APIs, sockets, and databases. 100% reliable, scalable, and high- performing."
  },
  {
    img: "../static/images/mobile/home/mobileapps.svg",
    title: "Mobile Apps",
    content:
      "Our unique mobile app development process allows us to rapidly build cross-platform apps at a fraction of the cost."
  }
];

const OurService = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.greenBtn>our service</Styled.greenBtn>
  </Link>
);

const SpecializeInMobile = () => (
  <Styled.pageWrapper>
    <Styled.specializeContainer>
      <Styled.specializeContentBg>
        <SpecializeMobileBg
          width="100%"
          height="100%"
          viewBox="0 0 496.475 418.966"
        />
      </Styled.specializeContentBg>
      <Styled.splTitleSection>
        <Styled.title>We specialize in</Styled.title>
        <Styled.p>
          We align the goals of your organization to the needs of your
          customers— creating exceptional brand experiences.
        </Styled.p>
      </Styled.splTitleSection>
      <Styled.splRow>
        {mobSpecialize.map((i, index) => (
          <Styled.splAreasBlocks key={index}>
            <Styled.splAreasImage src={i.img} />
            <Styled.splAreasTitle>{i.title}</Styled.splAreasTitle>
            <Styled.p>{i.content}</Styled.p>
          </Styled.splAreasBlocks>
        ))}
      </Styled.splRow>
    </Styled.specializeContainer>
    <OurService href={"/services"} />
  </Styled.pageWrapper>
);

export default SpecializeInMobile;
