import React, { Fragment } from "react";
import * as Styled from "../styles";

const ContentBody = ({ mq }) => (
  <Fragment>
    <Styled.p mq={mq}>
      FitCircle arranges community-based fitness programmes for individuals and
      corporate groups. It allows users to chat with nutritionists and health
      experts. The startup provides daily workout challenges and enables users
      to track their activities through their smartphones. Users can buy fitness
      products recommended by experts. FitCircle members avail full body workout
      sessions at various locations across Mumbai.
    </Styled.p>
    <Styled.p mq={mq}>
      We developed an iOS app integrated with teamchat to build an engaging
      fitness solution.
    </Styled.p>
    {/* <a target="_blank" href="http://fitcircle.in/">
      FitCircle Website
    </a> */}
  </Fragment>
);

export default ContentBody;
