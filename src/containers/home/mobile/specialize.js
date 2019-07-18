import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import SpecializeMobileBg from "./images/specializeMobileBg";
import MobileStarBg from "../desktop/images/specializeStar";
import { specialize } from "../commons/data";
import LazyLoad from "react-lazyload";

const OurService = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.greenBtn>Our Services</Styled.greenBtn>
  </Link>
);

const SpecializeInMobile = () => (
  <Styled.pageWrapper>
    <Styled.specializeContainer>
      <Styled.specializeStarContainerBg>
        <MobileStarBg
          width="100%"
          height="100%"
          viewBox="0 0 421.867 456.583"
        />
      </Styled.specializeStarContainerBg>
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
          We align the goals of your organization to the needs of your customers
          by creating exceptional brand experiences.
        </Styled.p>
      </Styled.splTitleSection>
      <Styled.splRow>
        {specialize.map((i, index) => (
          <Styled.splAreasBlocks key={index}>
            <LazyLoad height={138.65} offset={100} once>
              <Styled.splAreasImage src={i.img} />
            </LazyLoad>
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
