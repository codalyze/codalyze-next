import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import LazyLoad from 'react-lazyload';
import dynamic from 'next/dynamic'

const SpecializeStarBg = dynamic(() => import("./images/specializeStar"));

const special = [
  {
    img: "../static/images/home/website.svg",
    title: "Web Development",
    content:
      "We build modern web applications of all shapes and sizes using the latest technologies."
  },
  {
    img: "../static/images/home/backend.svg",
    title: "Backend Architecture and Development",
    content:
      "We develop bulletproof APIs, sockets, and databases. 100% reliable, scalable, and high- performing."
  },
  {
    img: "../static/images/home/mobileapps.svg",
    title: "Mobile Apps",
    content:
      "Our unique mobile app development process allows us to rapidly build cross-platform apps at a fraction of the cost."
  }
];

const OurService = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.specializeBtn>Our Services</Styled.specializeBtn>
  </Link>
);

const SpecializeIn = () => (
  <Styled.specializeRow>
    <Styled.specializeStarBg>
      <SpecializeStarBg
        width="100%"
        height="100%"
        viewBox="0 0 421.867 456.583"
      />
    </Styled.specializeStarBg>
    <Styled.specializeStarBgTwo>
    <SpecializeStarBg
        width="100%"
        height="100%"
        viewBox="0 0 421.867 456.583"
      />
    </Styled.specializeStarBgTwo>
    <Styled.FlexContainer>
      <Styled.homepageBlocksTitle>We specialize in</Styled.homepageBlocksTitle>
      <Styled.specializeContent>
        We align the goals of your organisation to the needs of <br /> your
        customers - creating exceptional brand experiences.
      </Styled.specializeContent>
      <Styled.specializeAreas>
        
        {special.map((i, index) => (
          <Styled.specializeAreasBlocks key={index}>
            <LazyLoad height={150} once offset={100}><Styled.specializeAreasImage src={i.img} /></LazyLoad>
            <Styled.specializeAreasTitle>{i.title}</Styled.specializeAreasTitle>
            <Styled.specializeAreasContent>
              {i.content}
            </Styled.specializeAreasContent>
          </Styled.specializeAreasBlocks>
        ))}
      </Styled.specializeAreas>
      <Styled.specializehelp>
        See how can we be of your help.
      </Styled.specializehelp>
      <OurService href={"/services"} />
    </Styled.FlexContainer>
  </Styled.specializeRow>
);

export default SpecializeIn;
