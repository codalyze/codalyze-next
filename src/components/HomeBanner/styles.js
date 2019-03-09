import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const Flex = styled.div`
  ${global.flexRow}
`;

export const FlexContainer = styled.div.attrs(({ rowReversed, isHomePage }) => ({
  rowReversed,
  isHomePage
}))`
  ${global.flexRow}
  ${global.container}
  padding: 125px 6vw;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-bottom: ${props => (props.isHomePage ? '10px' : '125px')};
  flex-direction: ${props => (props.rowReversed ? "row-reverse" : "row")};
  z-index: 1;
  @media (max-width: 992px) {
    padding: 15px 6vw;
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;

export const pageTitle = styled.h1`
  margin: 0;
`;

export const part1 = styled.span`
  font-size: 64px;
  color: #76686a;
  @media (max-width: 1440px) {
    font-size: 48px;
  }
`;

export const part2 = styled.span`
  font-size: 84px;
  display: block;
  margin: 10px 0;
  color: #ef543d;
  white-space: nowrap;
  @media (max-width: 1440px) {
    font-size: 64px;
  }
`;

export const part3 = styled.span`
  font-size: 32px;
  color: #76686a;
  @media (max-width: 1440px) {
    font-size: 28px;
  }
`;

export const mainTitle = styled.h2`
  ${global.fontFreightDispBold};
  font-size: 84px;
  margin: 0;
  @media (max-width: 992px) {
    font-size: 40px;
  }
`;

export const subTitle = styled.h4`
  ${global.fontRobotoLight};
  font-size: 24px;
  margin: 15px 0 0;
  opacity: inherit;
`;

export const twoBlocks = styled.div.attrs(({ rowReversed }) => ({
  rowReversed
}))`
  width: 100%;
  &:nth-child(2) {
    text-align: ${props => (props.rowReversed ? "inherit" : "right")};
  }
`;

export const bannerImage = styled.img`
  width: 80%;
`;
