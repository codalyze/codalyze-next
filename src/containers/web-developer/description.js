import React from "react";
import * as Styled from "./styles";

const Joblistings = props => (
  <Styled.listingContent>
    <Styled.descriptionBlock>
      <Styled.h3>{props.title}</Styled.h3>
    </Styled.descriptionBlock>
    <Styled.descriptionBlock>
      <Styled.p>{props.children}</Styled.p>
    </Styled.descriptionBlock>
  </Styled.listingContent>
);

const Description = () => (
  <Styled.JobDescriptionRow>
    <Joblistings title={"Job description"}>
      2+ years of experience in UI Development
      <br /> Good hands on experience in ReactJS/Redux and component based
      design
      <br /> Experience in AngularJS, ExtJS or similar UI framework.
      <br /> Extensive experience in HTML5/CSS3, SASS or LESS to manage the UI
      development
      <br /> Experience in JavaScript based unit testing framework like Mocha,
      Chai, Jasmine.
      <br /> Hands on experience in JSON, Jquery, Javascript and Ajax calls.
      <br /> Experience in any backend technology
    </Joblistings>
    <Joblistings title={"Open positions"}>2</Joblistings>
    <Joblistings title={"Skills required"}>
      HTML5, CSS3, React + Redux/Angular 4/VueJs
    </Joblistings>
    <Joblistings title={"Location"}>Mumbai</Joblistings>
    <Joblistings title={"Education/qualifications"}>
      Bachelor’s Degree in Computer Science or Information Technology
    </Joblistings>
    <Joblistings title={"Years of exp"}>Above 2 years</Joblistings>
  </Styled.JobDescriptionRow>
);

export default Description;
