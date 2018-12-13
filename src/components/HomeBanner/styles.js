import styled from "styled-components";
import * as global from "../../utils/globalStyles"; 

export const Flex = styled.div`
  ${global.flexRow}
`;

export const FlexContainer = styled.div`
  ${global.flexRow}
  ${global.container}
  padding: 50px 0;
`;

export const mainTitle = styled.h2`
  font-size: 75px;
  margin-bottom: 15px;
`;

export const subTitle = styled.h4`
  font-size: 25px;
  margin: 0;
`;

export const twoBlocks = styled.div`
  width: 50%;
`;
