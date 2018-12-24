import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const Flex = styled.div`
  ${global.flexRow}
  background: #272727;
  color: #fff;
`;

export const FlexContainer = styled.div`
  ${global.flexRow}
  ${global.container}
`;

export const FooterNavLinks = styled.div`
  ${global.threeBlocks}
  
`;

export const FooterLink = styled.div`
  
  
`;


export const HeaderA = styled(global.A)`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
`;
