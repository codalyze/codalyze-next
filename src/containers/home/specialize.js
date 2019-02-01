import React from "react";
import * as Styled from "./styles";
import Link from "next/link";

const OurService = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.specializeBtn>our service</Styled.specializeBtn>
  </Link>
);

const SpecializeIn = () => (
  <Styled.specializeRow>
    <Styled.FlexContainer>
    <Styled.homepageBlocksTitle>We specialize in</Styled.homepageBlocksTitle>
    <Styled.specializeContent>
      We align the goals of your organisation to the needs of <br /> your
      customers - creating exceptional brand experiences.
    </Styled.specializeContent>
    <Styled.specializeAreas>
      <Styled.specializeAreasBlocks>
        <Styled.specializeAreasImage src="../static/images/home/website.svg" />
        <Styled.specializeAreasTitle>Website</Styled.specializeAreasTitle>
        <Styled.specializeAreasContent>
          We build modern web applications of all shapes and sizes using the
          latest technologies.
        </Styled.specializeAreasContent>
      </Styled.specializeAreasBlocks>

      <Styled.specializeAreasBlocks>
        <Styled.specializeAreasImage src="../static/images/home/backend.svg" />
        <Styled.specializeAreasTitle>Backend</Styled.specializeAreasTitle>
        <Styled.specializeAreasContent>
          We develop bulletproof APIs, sockets, and databases. 100% reliable,
          scalable, and high- performing.
        </Styled.specializeAreasContent>
      </Styled.specializeAreasBlocks>

      <Styled.specializeAreasBlocks>
        <Styled.specializeAreasImage src="../static/images/home/mobileapps.svg" />
        <Styled.specializeAreasTitle>Mobile Apps</Styled.specializeAreasTitle>
        <Styled.specializeAreasContent>
          Our unique mobile app development process allows us to rapidly build
          cross-platform apps at a fraction of the cost.
        </Styled.specializeAreasContent>
      </Styled.specializeAreasBlocks>
    </Styled.specializeAreas>
    <Styled.specializehelp>
      See how can we be of your help.
    </Styled.specializehelp>
    <OurService href={"/services"} />
    </Styled.FlexContainer>
  </Styled.specializeRow>
);

export default SpecializeIn;
