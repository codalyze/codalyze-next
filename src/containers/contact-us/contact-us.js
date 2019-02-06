import React from "react";
import HomeBanner from "../../components/HomeBanner";
import * as Styled from "./styles";
import CubeBg from "./images/cubeBg";

export default class Contactus extends React.Component {
  render() {
    return (
      <Styled.pageWrapper>
        <HomeBanner title="Get in touch" secondryTitle="with us" titleBreak />
        <Styled.cubeWrapper>
          <CubeBg width="100%" height="100%" viewBox="0 0 340.942 837.71" />
        </Styled.cubeWrapper>
      </Styled.pageWrapper>
    );
  }
}
