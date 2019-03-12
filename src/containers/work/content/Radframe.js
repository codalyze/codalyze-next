import React, { Fragment } from "react";
import * as Styled from "../styles";

const ContentBody = ({ mq }) => (
  <Fragment>
    <div
      class="project-detail-item project-details__radframe isVisible"
      data-project="Radframe"
    >
      {" "}
      <blockquote>
        {" "}
        Working with Naisheel and Codalyze has been a great experience.
        Communication has been great and he’s always been willing to go the
        extra mile to get things done the way we want them - even when there’s
        some kind of misunderstanding. We’ve worked with Naisheel for about two
        years now and we’ll continue to work together going forward.{" "}
        <cite>Bryce York, CTO</cite>{" "}
      </blockquote>{" "}
      <br />{" "}
      {/* <em>Fusion Labs provides innovation services to large enterprises</em>{" "} */}
      <Styled.p mq={mq}>
        {" "}
        RadFrame assembles easy-to-apply roadmaps of world-leading innovation
        practices, tailored to each project’s unique needs. It provides a
        repeatable and proven approach to swiftly navigate the uncertainty of
        innovation and deliver and track results across a portfolio of
        activities.{" "}
      </Styled.p>{" "}
      <Styled.p mq={mq}>
        {" "}
        In its first year of trading, RadFrame has already been used in 20% of
        Australia's ASX 100 (the 20 largest publicly listed companies in the
        country). As well as internationally in MBA programs and a large
        insurance company.{" "}
      </Styled.p>{" "}
      <Styled.p mq={mq}>
        {" "}
        We were outsourced the majority of the front-end development. Have been
        involved since the prototype stage and have a continued engagement after
        the launch for further product development.{" "}
      </Styled.p>{" "}
      {/* <a target="_blank" href="https://radframe.com/">
        Radframe Marketing Website
      </a>{" "} */}
    </div>
  </Fragment>
);

export default ContentBody;
