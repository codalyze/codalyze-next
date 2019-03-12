import React, { Fragment } from "react";
import * as Styled from "../styles";

const ContentBody = ({ mq }) => (
  <Fragment>
    <Styled.p mq={mq}>
      KheloMore is an online sports aggregator; bringing together young athletes
      and coaches/academies, on one digital platform, for a better performance
      on field.
    </Styled.p>
    <Styled.p mq={mq}>
      So if you are a parent exploring your child’s first steps into sports, or
      looking to further enhance their game-skills, or even a professional who
      wants to turn their sporty school memories into fitness routine today,
      KheloMore is for you. KheloMore is the dream child of Jatin Paranjape,
      former Mumbai and India cricketer and former Sports Marketing leader from
      India and Europe in Nike, who strongly feels that India needs to be pushed
      towards becoming a nation of participants from being a nation of viewers.
    </Styled.p>
    <Styled.p mq={mq}>
      We developed a mobile optimised web platform and mobile apps (android and
      iOS), including an admin panel for KheloMore to manage the platform. We’ve
      been involved right from the concept stage and are still involved in
      improving the product and adding on features after the launch.
    </Styled.p>
    {/* <a target="_blank" href="https://www.khelomore.com/">
      KheloMore Website
    </a>
    <br />
    <a
      target="_blank"
      href="https://itunes.apple.com/in/app/khelomore/id1241509644?mt=8"
    >
      KheloMore on the App Store
    </a>
    <br />
    <a
      target="_blank"
      href="https://play.google.com/store/apps/details?id=com.khelomore.player&amp;hl=en"
    >
      KheloMore on Google Play
    </a> */}
  </Fragment>
);

export default ContentBody;
