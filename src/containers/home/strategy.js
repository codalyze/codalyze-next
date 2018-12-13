import React from "react";
import * as Styled from "./styles";

const Strategy = () => (
  <Styled.strategyRow>
    <Styled.FlexContainer>
      <Styled.strategyBlockOne>
          Hello
      </Styled.strategyBlockOne>
      <Styled.strategyBlockTwo>
        <Styled.strategyTitle>
          Strategy led solutions for fast moving companies.
        </Styled.strategyTitle>
        <Styled.strategySubTitle>
          The proof is the pudding. While there isn't a way to eat our interfaces (yet), you can sample a large offering of non-perishable case studies on our work page.
        </Styled.strategySubTitle>
        <Styled.Button>Our Work</Styled.Button>
      </Styled.strategyBlockTwo>
    </Styled.FlexContainer>
  </Styled.strategyRow>
);

export default Strategy;
