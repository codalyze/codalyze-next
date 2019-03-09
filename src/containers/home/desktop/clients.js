import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import LazyLoad from 'react-lazyload';

const techStackRowBg = "../../static/images/home/techstackBackground.png";

const OurServices = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.specializeBtn>START A PROJECT</Styled.specializeBtn>
  </Link>
);

const clientLogos = [
  "../static/images/home/clients/betking.svg",
  "../static/images/home/clients/fitcircle.svg",
  "../static/images/home/clients/hotstar.svg",
  "../static/images/home/clients/khelomore.svg",
  "../static/images/home/clients/radframe.svg"
];

const Clients = () => (
  <Styled.techStackRow techBg={techStackRowBg}>
    <Styled.FlexContainer>
      <Styled.techStackTitle>Our clients</Styled.techStackTitle>
      {/* <Styled.techStackSubTitle>
        we’ve had a hand in training many of today’s web
        <br /> developers, and always seek to push the bar of
        <br /> quality higher.
      </Styled.techStackSubTitle> */}
      <Styled.techLogoRow>
        {clientLogos.map((x, id) => {
          return (
            <Styled.techLogoBlock key={id}>
              <LazyLoad height={78} once offset={100}>
                <img src={x} width="200" />
              </LazyLoad>
            </Styled.techLogoBlock>
          );
        })}
      </Styled.techLogoRow>
      <OurServices href={"/start-a-project"} />
    </Styled.FlexContainer>
  </Styled.techStackRow>
);

export default Clients;
