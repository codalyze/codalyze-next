import React from "react";
import HomeBanner from "../../components/HomeBanner";
import * as Styled from "./styles";
import CubeBg from "./images/cubeBg";
import StartAProjectBg from "../start-a-project/desktop/images/startAProject"; 
import ContactForm from "./form";
import MapAddress from "./mapAddress";

export default class Contactus extends React.Component {
  render() {
    return (
      <Styled.pageWrapper>
        <HomeBanner title="Get in touch" secondryTitle="with us" titleBreak />
        <Styled.cubeWrapper>
          <CubeBg width="100%" height="100%" viewBox="0 0 340.942 837.71" />
        </Styled.cubeWrapper>
        <Styled.containerFluid>
          <Styled.pageWrapper>
            <Styled.bannerSvg>
              <StartAProjectBg
                width="100%"
                height="100%"
                viewBox="450 0 2175.68 2000.44"
                preserveAspectRatio="none"
              />
            </Styled.bannerSvg>
            
              <Styled.commonDiv>
                <ContactForm />
                <MapAddress />
              </Styled.commonDiv>
          
          </Styled.pageWrapper>
        </Styled.containerFluid>
      </Styled.pageWrapper>
    );
  }
}
