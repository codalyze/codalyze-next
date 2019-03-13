import React, { Fragment } from "react";
import * as Styled from "../styles";

const ContentBody = ({ mq }) => (
  <Fragment>
    <Styled.p mq={mq}>
      LoudCloud builds software that helps colleges and universities deliver
      personalized learning and support to their students. It improves
      communication channels, extracts useful data, and drives positive student
      outcomes. It offers students personalized engagement tools to provide
      “just-in-time” interventions and recommendations. For instructors, this
      platform presents actionable intelligence throughout the learning process,
      not simply at the end.
    </Styled.p>
    <Styled.p mq={mq}>
      LoudCloud, now acquired by Barnes &amp; Noble has partnerships with Unizin
      (Consortium of 22 Leading Universities) and universities such as
      Southeastern Illinois College, Southern Illinois University-Edwardsville,
      Australia’s Swinburne Online, University of Florida Lastinger Center.
    </Styled.p>
    <Styled.p mq={mq}>
      We were engaged to speed up the development process for Courseware OER,
      which was successfully launched last year. Further, we have been involved
      in revamping of a couple of products to support mobile devices and use an
      entirely new stack on the front end.
    </Styled.p>
  </Fragment>
);

export default ContentBody;
