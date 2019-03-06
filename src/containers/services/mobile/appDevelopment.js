import React from "react";
import * as Styled from "./styles";
import Link from "next/link";

const StartProject = ({href}) => (
<Link href={href}>
    <Styled.appBtn>START A PROJECT</Styled.appBtn>
</Link>
);

const AppDevelopment = () => (
  <Styled.container>
    <Styled.image src="/static/images/mobile/services/appDevelopmentMobile.svg" />
    <Styled.title>App Development</Styled.title>
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
    <StartProject href={"/start-a-project"} />
  </Styled.container>
);

export default AppDevelopment;
