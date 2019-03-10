import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import TechStackBg from "../desktop/images/techStackBg";
import {clientLogos} from '../commons/data';
import LazyLoad from 'react-lazyload';

const OurServices = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.greenBtn>OUR SERVICES</Styled.greenBtn>
  </Link>
);

const TechStackMobile = () => (
  <Styled.pageWrapper>
    <Styled.techStackContainer>
      <Styled.techMobileBgBlock>
        <TechStackBg 
          width="100%"
          height="100%"
          viewBox="400 0 1050.371 1400.229"
        />
      </Styled.techMobileBgBlock>
      <Styled.title>Our Clients</Styled.title>
      <Styled.techStackRow>
        {clientLogos.map((logo, index) => (
          <Styled.techStackBlock key={index}>
            <LazyLoad height={32} offset={100} once>
              <Styled.techStackLogo width="100" src={logo} />
            </LazyLoad>
          </Styled.techStackBlock>
        ))}
      </Styled.techStackRow>
      <OurServices href={"/start-a-project"} />
    </Styled.techStackContainer>
  </Styled.pageWrapper>
);

export default TechStackMobile;
