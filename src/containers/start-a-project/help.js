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
    field: "web-development"
  },
  {
    image: BackendArchitechture,
    subtitle: "Backend Architechture",
    field: "backend-architechture"
  },
  {
    image: AppDevelopment,
    subtitle: "App Development",
    field: "app-development"
  },
  {
    image: NotSure,
    subtitle: "Not sure",
    field: "not-sure",
    paragraph: "We will provide you with free consultation"
  }
];

export default class Help extends React.Component {
  render() {
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.title>How can we help you?</Styled.title>
          <Styled.imageBlocksRow>
            {helpIcons.map((Icon, index) => (
              <Styled.singleImageBlocks key={index}>
                <Styled.blockShadow>
                  <Icon.image />
                </Styled.blockShadow>
                <Styled.subtitle>{Icon.subtitle}</Styled.subtitle>
                <Styled.paragraph>{Icon.paragraph}</Styled.paragraph>
              </Styled.singleImageBlocks>
            ))}
          </Styled.imageBlocksRow>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}
