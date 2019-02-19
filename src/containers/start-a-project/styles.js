import styled from "styled-components";
import * as global from "../../utils/globalStyles";
import { globalAgent } from "https";

export const pageWrapper = styled.div`
  position: relative;
`;

export const Wrapper = styled(pageWrapper)``;

export const containerFluid = styled.div`
  ${global.fullRow};
`;

export const container = styled.div`
  ${global.mainContainer};
`;

export const commonDiv = styled.div`
  position: absolute;
  top: 0;
  margin: 0 auto;
  width: 100%;
`;

export const title = styled.h4`
  ${global.fontRobotoLight};
  font-size: 34px;
  margin: 0 0 22px;
`;

export const subtitle = styled.h5`
  ${global.fontRobotoLight};
  font-size: 24px;
  margin: 15px 0;
`;

export const imageBlocksRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 75px;
`;

export const singleImageBlocks = styled.div`
  width: 240px;
  text-align: center;
  margin: 0 60px 15px 0;
`;

export const blockImages = styled.img``;

export const blockShadow = styled.button`
  box-shadow: 0px 3px 10px #e3e3e3;
  border-radius: 10px;
  width: 158px;
  margin: 0 auto;
  min-height: 174px;
  display: flex;
  justify-content: space-evenly;
  border: 0;
  background-color: #fff;
`;

export const paragraph = styled.p`
  ${global.fontRobotoLight}
  font-size: 15px;
  margin: 0;
`;

export const budgetRow = styled(imageBlocksRow)`
  box-shadow: 0 3px 15px #e3e3e3;
  width: 805px;
  margin-bottom: 85px;
  border-radius: 10px;
  background: #fff;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 700px;
  }
`;

export const singleBudgetBlocks = styled.button`
  background-color: #fff;
  padding: 19px 33px;
  border-right: 1px solid #d6e0ef;
  border-top: 0;
  border-bottom: 0;
  :nth-last-child(1) {
    border-right: 0;
  }
  :first-child {
    border-left: 0;
  }
`;

export const budgetAmount = styled.p`
  font-size: 24px;
  color: #1c9868;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const singleProjectBlocks = styled.button`
  padding: 5px 39px;
  border-right: 1px solid #d6e0ef;
  width: 199px;
  text-align: center;
  border-top: 0;
  border-bottom: 0;
  background-color: #fff;
  :nth-last-child(1) {
    border-right: 0;
  }
  :first-child {
    border-left: 0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 165px;
  }
`;

export const formHead = styled.p`
  ${global.fontRobotoRegular};
  font-size: 24px;
  color: #242424;
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
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 75%;
  }
`;

export const inputDiv = styled.div`
  margin: 35px 0;
`;

export const ButtonWrapper = styled.button`
  ${global.mainButton};
  margin-top: 20px;
  margin-bottom: 70px;
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