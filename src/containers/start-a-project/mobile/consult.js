import React from "react";
import * as Styled from "../styles";
import B2b from "./images/B2b";
import BankingServices from "./images/BankingServices";
import Ecommerce from "./images/ECommerce";
import Fade from "react-reveal/Fade";

import AboutComponent from "../../about-us/mobile/aboutComponent";

const helpIcons = [
  {
    image: Ecommerce,
    subtitle: "E-commerce",
    itemType: "kow"
  },
  {
    image: B2b,
    subtitle: "B2B",
    itemType: "kow"
  },
  {
    image: BankingServices,
    subtitle: "Banking services",
    itemType: "kow"
  }
];

export default class ConsultationMob extends React.Component {
  render() {
    const { selectedItems } = this.props;
    return (
      <Styled.containerFluid>
        <Styled.container>
          {/* <Styled.conHead>Book a FREE 30 minute consultation</Styled.conHead> */}

          {/* <Styled.centeredDiv>
            <img
              src="/static/images/rubik-cube-banner.png"
              alt="rubix cube image"
            />
          </Styled.centeredDiv> */}
          {/* <img src="/static/images/about-us/Artboard-5.png" /> */}

          {/* <Styled.imageBlocksRow>
            {helpIcons.map((Icon, index) => (
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
            ))}
          </Styled.imageBlocksRow> */}
        </Styled.container>

        <Fade>
          <Styled.pageWrapper>
            <Styled.optBgContainer />
            <AboutComponent
              headingOne="Book a FREE 30 minute consultation"
              content="The first step to a great website or app is free with us."
              image="/static/images/rubik-cube-banner.png"
            />
          </Styled.pageWrapper>
        </Fade>
      </Styled.containerFluid>
    );
  }
}
