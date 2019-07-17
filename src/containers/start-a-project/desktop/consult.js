import React from "react";
import * as Styled from "./styles";
import B2b from "./images/B2b";
import BankingServices from "./images/BankingServices";
import Ecommerce from "./images/ECommerce";

import Fade from "react-reveal/Fade";

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

export default class Consultation extends React.Component {
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

          <Fade>
            <Styled.SectionWrapper>
              <Styled.FlexContainer>
                <Styled.devisonDiv>
                  <Styled.leftDiv>
                    <img
                      className="code-cube"
                      src="/static/images/rubik-cube-banner.png"
                    />
                  </Styled.leftDiv>
                  <Styled.rightDiv>
                    <Styled.h2>Book a FREE 30 minute consultation</Styled.h2>
                    <Styled.p>
                      Tell us more about your projects, we would love to help
                      out. More text here.
                    </Styled.p>
                  </Styled.rightDiv>
                </Styled.devisonDiv>
              </Styled.FlexContainer>
            </Styled.SectionWrapper>
          </Fade>

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
      </Styled.containerFluid>
    );
  }
}
