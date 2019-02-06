import styled from "styled-components";
import * as global from "../../utils/globalStyles";
import { globalAgent } from "https";


export const pageWrapper = styled.div`
  position: relative;
`;


export const cubeWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 6%;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
`;
