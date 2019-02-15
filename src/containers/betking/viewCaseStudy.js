import React from "react";
import * as Styled from "./styles";

const study = [
  {
    src: "/static/images/betking/Radframe.png",
    button: "View Case",
    title: "Radframe",
    url: "#"
  },
  {
    src: "/static/images/betking/KheloMore.png",
    button: "View Case",
    title: "KheloMore",
    url: "#"
  },
  {
    src: "/static/images/betking/Fitcircle.png",
    button: "View Case",
    title: "Fitcircle",
    url: "#"
  }
];

const ViewCaseStudy = () => (
  <Styled.containerFluid>
    <Styled.container>
      <Styled.caseRow>
        {study.map((cases, index) => (
          <Styled.caseSection key={index}>
            <Styled.caseBlock imgPath={cases.src}>
              <Styled.caseBtn>{cases.button}</Styled.caseBtn>
            </Styled.caseBlock>
            <Styled.h5>{cases.title}</Styled.h5>
          </Styled.caseSection>
        ))}
      </Styled.caseRow>
    </Styled.container>
  </Styled.containerFluid>
);

export default ViewCaseStudy;
