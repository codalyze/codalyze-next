import React, { Fragment } from "react";
import * as Styled from "./styles";
import Link from "next/link";

const OurServices = ({ href }) => (
    <Link href={href} passHref prefetch>
      <Styled.greenBtn>OUR SERVICES</Styled.greenBtn>
    </Link>
  );
  
  const techLogoMob = [

    "../static/images/mobile/about/gaurav.png",
    "../static/images/mobile/about/harry.png",
    "../static/images/mobile/about/surbhi.png",
    "../static/images/mobile/about/naisheel.png",
    "../static/images/mobile/about/rakesh.png",
    "../static/images/mobile/about/rishabh.png"
  ];

const teamMobile = () => (
<Fragment>
    <Styled.techStackContainer>
      {/* <Styled.techMobileBgBlock>
        <TechStackBg 
          width="100%"
          height="100%"
          viewBox="400 0 1050.371 1400.229"
        />
      </Styled.techMobileBgBlock> */}
      <Styled.techStackRow>
        {techLogoMob.map((logo, index) => (
          <Styled.techStackBlock key={index}>
            <Styled.techStackLogo src={logo} />
          </Styled.techStackBlock>
        ))}
      </Styled.techStackRow>
      <OurServices href={"/start-a-project"} />
    </Styled.techStackContainer>
  </Fragment>
);

 export default teamMobile;