import React from "react";
import * as Styled from "./styles";

const amount = [
  {
    cost: "Below 1k"
  },
  {
    cost: "1k-10k"
  },
  {
    cost: "10k-30k"
  },
  {
    cost: "30k-50k"
  },
  {
    cost: "50k-above"
  }
];

export default class Budget extends React.Component {
  render() {
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.title>Your Budget</Styled.title>
          <Styled.budgetRow>
            {amount.map((money, index) => (
              <Styled.singleBudgetBlocks key={index}>
                <Styled.budgetAmount>{money.cost}</Styled.budgetAmount>
              </Styled.singleBudgetBlocks>
            ))}
          </Styled.budgetRow>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}
