import React from "react";
import * as Styled from "./styles";

const amount = [
  {
    cost: "Below 1k",
    itemType: "budget"
  },
  {
    cost: "1k-10k",
    itemType: "budget"
  },
  {
    cost: "10k-30k",
    itemType: "budget"
  },
  {
    cost: "30k-50k",
    itemType: "budget"
  },
  {
    cost: "50k-above",
    itemType: "budget"
  }
];

export default class Budget extends React.Component {
  render() {
    const { selectedItems } = this.props;
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.title>Your Budget</Styled.title>
          <Styled.budgetRow>
            {amount.map((item, index) => (
              <Styled.singleBudgetBlocks
                key={index}
                onClick={() =>
                  this.props.onClickItem({
                    itemType: item.itemType,
                    field: item.cost
                  })
                }
                isSelected={selectedItems.includes(item.cost)}
              >
                <Styled.budgetAmount isSelected={selectedItems.includes(item.cost)}>{item.cost}</Styled.budgetAmount>
              </Styled.singleBudgetBlocks>
            ))}
          </Styled.budgetRow>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}
