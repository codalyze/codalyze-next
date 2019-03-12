import React from "react";
import * as Styled from "./styles";

const term = [
  {
    displayName: "Less than a month",
    itemType: "duration"
  },
  {
    displayName: "1-3 months",
    itemType: "duration"
  },
  {
    displayName: "3-6 months",
    itemType: "duration"
  },
  {
    displayName: "More than 6 months",
    itemType: "duration"
  }
];

export default class Project extends React.Component {
  render() {
    const { selectedItems } = this.props;
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.title>
            How long will we be working on the project?
          </Styled.title>
          <Styled.budgetRow>
            {term.map((item, index) => (
              <Styled.singleBudgetBlocks
                key={index}
                onClick={() =>
                  this.props.onClickItem({
                    itemType: item.itemType,
                    field: item.displayName
                  })
                }
                isSelected={selectedItems.includes(item.displayName)}
              >
                <Styled.budgetAmount
                  isSelected={selectedItems.includes(item.cost)}
                >
                  {item.displayName}
                </Styled.budgetAmount>
              </Styled.singleBudgetBlocks>
            ))}
          </Styled.budgetRow>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}
