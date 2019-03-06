import React from "react";
import * as Styled from "./styles";

const WebDevelopment = () => (
  <Styled.container>
    <Styled.image src="/static/images/mobile/services/webDevelopmentMobile.svg" />
    <Styled.title>
      Web <br />
      Development
    </Styled.title>
    <Styled.p>
      we’ve had a hand in training many of today’s web developers, and always
      seek to push the bar of quality higher.
    </Styled.p>
    <Styled.middleContent>
      <Styled.subTitle>Our Approach</Styled.subTitle>
      <Styled.p>
        Responsive, server rendered single page applications with progressive
        web app support.
      </Styled.p>
    </Styled.middleContent>
    <Styled.subTitle>Frameworks</Styled.subTitle>
    <Styled.ul>
      <Styled.li>ReactJS</Styled.li>
      <Styled.li>VueJS</Styled.li>
    </Styled.ul>
  </Styled.container>
);

export default WebDevelopment;
