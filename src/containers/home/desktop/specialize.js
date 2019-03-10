import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import LazyLoad from 'react-lazyload';
import SpecializeStarBg from "./images/specializeStar";
import {specialize} from '../commons/data';

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
        
        {specialize.map((i, index) => (
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
