import styled from "styled-components";
import * as global from "../../utils/globalStyles"; 

export const Flex = styled.div`
  ${global.flexRow}
`;

export const FlexContainer = styled.div.attrs(({rowReversed}) => ({
rowReversed
}))`
  ${global.flexRow}
  ${global.container}
  padding: 125px 6vw;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-direction: ${props => props.rowReversed ? "row-reverse" : "row"};
  z-index: 1;
`;

export const mainTitle = styled.h2`
${global.fontFreightDispBold};
  font-size: 101px;
  margin: 0;
`;

export const subTitle = styled.h4`
${global.fontRobotoLight};  
font-size: 31px;
margin: 15 0 0;
opacity: inherit;
`;


export const twoBlocks = styled.div.attrs(({rowReversed}) => ({
  rowReversed
  }))`
  width: 100%;
  &:nth-child(2) {
    text-align: ${props => props.rowReversed ? "inherit" : "right"};;
  }
`;

export const bannerImage = styled.img`
  width: 80%;
`;
