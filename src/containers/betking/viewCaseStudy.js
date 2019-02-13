import React from "react";
import * as Styled from "./styles";

const ViewCaseStudy = () => (
  <Styled.containerFluid>
    <Styled.container>
      <Styled.caseRow>
        <Styled.caseBlock>
          <Styled.caseStudyImage src="/static/images/betking/Radframe.png" />
          <Styled.caseBtn>View Case</Styled.caseBtn>
        </Styled.caseBlock>
        <Styled.caseBlock>
          <Styled.caseStudyImage src="/static/images/betking/KheloMore.png" />
          <Styled.caseBtn>View Case</Styled.caseBtn>
        </Styled.caseBlock>
        <Styled.caseBlock>
          <Styled.caseStudyImage src="/static/images/betking/Fitcircle.png" />
          <Styled.caseBtn>View Case</Styled.caseBtn>
        </Styled.caseBlock>
      </Styled.caseRow>
    </Styled.container>
  </Styled.containerFluid>
);

export default ViewCaseStudy;
