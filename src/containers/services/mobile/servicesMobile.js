import React, { Fragment } from "react";
import * as Styled from "./styles";
import Banner from "../../../components/HomeBannerMobile";
import Bg from "./images/servicesMobileBg";
import WebDevelopment from "./webDevelopment";
import Backend from "./backend";
import AppDevelopment from "./appDevelopment";
import FooterMobile from "../../../components/footer-mobile";

export default class ServicesMobile extends React.Component {
  render() {
    return (
      <Styled.pageWrapper>
        <Styled.servicesMobileBgContainer>
          <Bg width="100%" height="100%" viewBox="0 0 469.574 381.003" />
        </Styled.servicesMobileBgContainer>
        <Banner
          banner="/static/images/mobile/services/servicesBannerMobile.png"
          title="Codalyze Services"
          subTitle="We offer services in following verticals"
        />
        <WebDevelopment />
        <Backend />
        <AppDevelopment />
        <FooterMobile />
      </Styled.pageWrapper>
    );
  }
}
