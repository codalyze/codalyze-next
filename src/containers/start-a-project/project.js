import React from "react";
import * as Styled from "./styles";

const amount = [
  {
    cost: "Less than a month"
  },
  {
    cost: "1-3 months"
  },
  {
    cost: "3-6 months"
  },
  {
    cost: "More than 6 months"
  }
];

export default class Project extends React.Component {
  render() {
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.title>How long will we be working on the project?</Styled.title>
          <Styled.termRow>
            {amount.map((money, index) => (
              <Styled.singleProjectBlocks key={index}>
                <Styled.budgetAmount>{money.cost}</Styled.budgetAmount>
              </Styled.singleProjectBlocks>
            ))}
          </Styled.termRow>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}
