import styled from "styled-components";
import * as global from "../../utils/globalStyles"; 

export const Flex = styled.div`
  ${global.flexRow}
`;

export const FlexContainer = styled.div`
  ${global.flexRow}
  ${global.container}
  padding: 125px 6vw;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

export const mainTitle = styled.h2`
  font-size: 101px;
  margin: 0;
`;

export const subTitle = styled.h4`
  font-size: 31px;
  margin: 15px 0 0;
`;

export const twoBlocks = styled.div`
  width: 100%;
  &:nth-child(2) {
    text-align: right;
  }
`;

export const bannerImage = styled.img`
  width: 80%;
`;
