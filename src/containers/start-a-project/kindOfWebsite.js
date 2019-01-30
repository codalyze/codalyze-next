import React from "react";
import * as Styled from "./styles";

const helpIcons = [
  {
    image: "/static/images/start-a-project/e-commerce.svg",
    subtitle: "E-commerce"
  },
  {
    image: "/static/images/start-a-project/b2b.svg",
    subtitle: "B2B"
  },
  {
    image: "/static/images/start-a-project/banking-services.svg",
    subtitle: "Banking services"
  }
];

export default class KindOfWebsite extends React.Component {
  render() {
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.title>What kind of website do you want to develop?</Styled.title>
          <Styled.imageBlocksRow>
            {helpIcons.map((icons, index) => (
              <Styled.singleImageBlocks key={index}>
                <Styled.blockShadow>
                  <Styled.blockImages src={icons.image} />
                </Styled.blockShadow>
                <Styled.subtitle>{icons.subtitle}</Styled.subtitle>
                <Styled.paragraph>{icons.paragraph}</Styled.paragraph>
              </Styled.singleImageBlocks>
            ))}
          </Styled.imageBlocksRow>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}
