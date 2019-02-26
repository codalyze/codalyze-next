import React from "react";
import * as Styled from "./styles";
import Link from "next/link";

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
    <Styled.splTitleSection>
      <Styled.title>We specialize in</Styled.title>
      <Styled.p>
        We align the goals of your organization to the needs of your customers—
        creating exceptional brand experiences.
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
    <OurService href={"/services"} />
  </Styled.pageWrapper>
);

export default SpecializeInMobile;
