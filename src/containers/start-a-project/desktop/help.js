import React from "react";
import * as Styled from "./styles";

import AppDevelopment from "./images/AppDevelopment";
import NotSure from "./images/NotSure";
import WebDevelopment from "./images/WebDevelopment";
import BackendArchitechture from "./images/BackendArchitechture";

const helpIcons = [
  {
    image: WebDevelopment,
    subtitle: "Web Development",
    itemType: "help-item"
  },
  {
    image: BackendArchitechture,
    subtitle: "Backend Architechture",
    itemType: "help-item"
  },
  {
    image: AppDevelopment,
    subtitle: "App Development",
    itemType: "help-item"
  },
  {
    image: NotSure,
    subtitle: "Not sure",
    paragraph: "We will provide you with free consultation",
    itemType: "help-item"
  }
];

export default class Help extends React.Component {
  render() {
    const { selectedItems } = this.props;
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.title>How can we help you?</Styled.title>
          <Styled.imageBlocksRow>
            {helpIcons.map((Icon, index) => {
              return (
                <Styled.singleImageBlocks key={index}>
                  <Styled.blockShadow
                    onClick={() =>
                      this.props.onClickItem({
                        itemType: Icon.itemType,
                        field: Icon.subtitle
                      })
                    }
                    isSelected={selectedItems.includes(Icon.subtitle)}
                  >
                    <Icon.image />
                  </Styled.blockShadow>
                  <Styled.subtitle>{Icon.subtitle}</Styled.subtitle>
                  <Styled.paragraph>{Icon.paragraph}</Styled.paragraph>
                </Styled.singleImageBlocks>
              );
            })}
          </Styled.imageBlocksRow>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}
