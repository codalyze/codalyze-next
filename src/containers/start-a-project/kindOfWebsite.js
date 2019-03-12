import React from "react";
import * as Styled from "./styles";
import B2b from "./images/B2b";
import BankingServices from "./images/BankingServices";
import Ecommerce from "./images/ECommerce";

const helpIcons = [
  {
    image: Ecommerce,
    subtitle: "E-commerce"
  },
  {
    image: B2b,
    subtitle: "B2B"
  },
  {
    image: BankingServices,
    subtitle: "Banking services"
  }
];

export default class KindOfWebsite extends React.Component {
  render() {
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.title>
            What kind of website do you want to develop?
          </Styled.title>
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
