import React from "react";
import * as Styled from "./styles";

const StrategyStats = [
  {
    number: "8+",
    title: "Employees"
  },
  {
    number: "5+",
    title: "Awards"
  },
  {
    number: "6+",
    title: "Tools"
  },
  {
    number: "20+",
    title: "Clients"
  },
  {
    number: "30+",
    title: "Projects"
  },
  {
    number: "2500+",
    title: "Hours of coding"
  }
];

const Strategy = () => (
  <Styled.strategyRow>
    <Styled.FlexContainer>
      <Styled.strategyBlockOne>

      {StrategyStats.map((x, id) => {
        return (
        <Styled.strategyStatsBlock>
          <Styled.strategyStats>
            <Styled.strategyStatsNum>{x.number}</Styled.strategyStatsNum>
            <Styled.strategyStatsTitle>{x.title}</Styled.strategyStatsTitle>
          </Styled.strategyStats>
         
        </Styled.strategyStatsBlock>
  );
})}
    
        
      </Styled.strategyBlockOne>

      <Styled.strategyBlockTwo>
        <Styled.strategyTitle>
          Strategy led solutions for fast moving companies.
        </Styled.strategyTitle>
        <Styled.strategySubTitle>
          The proof is the pudding. While there isn't a way to eat our
          interfaces (yet), you can sample a large offering of non-perishable
          case studies on our work page.
        </Styled.strategySubTitle>
        <Styled.Button>Our Work</Styled.Button>
      </Styled.strategyBlockTwo>
    </Styled.FlexContainer>
  </Styled.strategyRow>
);

export default Strategy;
