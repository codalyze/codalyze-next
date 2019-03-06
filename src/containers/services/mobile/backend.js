import React from "react";
import * as Styled from "./styles";
import Bg from "./images/backendBg";

const BackendServices = () => (
  <Styled.container>
      <Styled.backendMobileBgContainer>
          <Bg 
            width="100%"
            height="100%"
            viewBox="400 0 350.305 900.88"
          />
      </Styled.backendMobileBgContainer>
    <Styled.image src="/static/images/mobile/services/backendMobile.svg" />
    <Styled.title>
      Backend <br /> Architecture and <br />
      Development
    </Styled.title>
    <Styled.p>
      we’ve had a hand in training many of today’s web developers, and always
      seek to push the bar of quality higher.
    </Styled.p>
    <Styled.middleContent>
      <Styled.subTitle>Our Approach</Styled.subTitle>
      <Styled.p>
        Scalable, reliable and fast servers, micro-services architecture,
        event-sourcing/CQRS, cache driven applications.
      </Styled.p>
    </Styled.middleContent>
    <Styled.listContainer>
      <Styled.listSection>
        <Styled.subTitle>Databases</Styled.subTitle>
        <Styled.ul>
          <Styled.li>Postgresql</Styled.li>
          <Styled.li>mysql</Styled.li>
          <Styled.li>mongodb</Styled.li>
          <Styled.li>redis</Styled.li>
          <Styled.li>elasticsearch</Styled.li>
        </Styled.ul>
      </Styled.listSection>
      <Styled.listSection>
        <Styled.subTitle>Frameworks</Styled.subTitle>
        <Styled.ul>
          <Styled.li>ReactJS</Styled.li>
          <Styled.li>VueJS</Styled.li>
        </Styled.ul>
      </Styled.listSection>
    </Styled.listContainer>
  </Styled.container>
);

export default BackendServices;
