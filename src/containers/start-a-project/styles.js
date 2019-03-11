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
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const paragraph = styled.p`
  ${global.fontRobotoLight}
  font-size: 15px;
  margin: 0;
`;

export const termRow = styled(imageBlocksRow)`
  box-shadow: 0 3px 15px #e3e3e3;
  width: 60%;
  margin-bottom: 85px;
  border-radius: 10px;
  background: #fff;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 700px;
  }
`;

export const budgetRow = styled(imageBlocksRow)`
  box-shadow: 0 3px 15px #e3e3e3;
  width: 55%;
  margin-bottom: 85px;
  border-radius: 10px;
  background: #fff;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 700px;
  }
`;

export const singleBudgetBlocks = styled.button`
  background-color: #fff;

  border-right: 1px solid #d6e0ef;
  border-top: 0;
  border-bottom: 0;
  flex-grow: 1;
  flex-basis: 0;
  height: 100px;
  cursor: pointer;
  :nth-last-child(1) {
    border-right: 0;
    flex-grow: 2;
    flex-basis: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  :first-child {
    border-left: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:focus {
    outline: none;
  }
`;

export const budgetAmount = styled.p`
  font-size: 24px;
  color: #1c9868;
  width: auto;
  margin: 0 auto;
  font-weight: 300;
  padding: 5%;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const singleProjectBlocks = styled.button`
  border-right: 1px solid #d6e0ef;
  cursor: pointer;
  text-align: center;
  border-top: 0;
  border-bottom: 0;
  background-color: #fff;
  height: 100px;
  flex-grow: 1;
  flex-basis: 0;
  padding: 0% 5%;
  :nth-last-child(1) {
    border-right: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    flex-grow: 2;
    flex-basis: 0;
   
  }
  :first-child {
    border-left: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    min-width: 200px;
    padding: 0;
  }
  &:focus {
    outline: none;
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
  padding: 10px;
  ::placeholder {
    ${global.fontRobotoLight};
    color: #929292;
    font-size: 24px;
  }
  &:focus {
    outline: none;
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
  &:focus {
    outline: none;
  }
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
