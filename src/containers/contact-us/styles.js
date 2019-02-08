import styled from "styled-components";
import * as global from "../../utils/globalStyles";
import { globalAgent } from "https";

export const pageWrapper = styled.div`
  position: relative;
`;

export const containerFluid = styled.div`
  ${global.fullRow};
`;

export const container = styled.div`
  ${global.mainContainer};
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

export const bannerSvg = styled.div`
  z-index: -2;
`;

export const commonDiv = styled.div`
  position: absolute;
  top: 0;
  margin: 0 auto;
  width: 100%;
`;

export const Input = styled.input`
  border-bottom: 1px solid #242424;
  ${global.fontRobotoLight};
  border-top: 0;
  border-right: 0;
  border-left: 0;
  padding: 15px 0px;
  width: 46%;
  background: transparent;
  min-height: 30px;
  ::placeholder {
    ${global.fontRobotoLight};
    color: #929292;
    font-size: 24px;
  }
  &:focus {
    outline-color: transparent;
  }
`;

export const inputDiv = styled.div`
  margin: 0 0 50px;
`;

export const button = styled.button`
  ${global.mainButton}
  margin-top: 20px;
`;

export const locationRow = styled.div`
  display: flex;
  margin: 200px 0 0;
`;

export const blocks = styled.div`
  ${global.twoBlocks}
  &:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 16%;
  }
`;

export const img = styled.img``;

export const locationBlock = styled.div`

`;

export const h6 = styled.h6`
  ${global.fontRobotoLight}
  font-size: 24px;
  margin: 0;
`;

export const h5 = styled.h5`
  font-size: 24px;
  ${global.fontRobotoBold}
  margin: 0;
`;

export const a = styled.a`
  ${global.fontRobotoLight}
  font-size: 28px;
  text-decoration: none;
  margin: 0;
`;

export const getDirection = styled.button`
  ${global.mainButton}
  font-size: 24px;
  width: 270px;
  height: 64px;
`;
