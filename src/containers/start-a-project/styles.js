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
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const subtitle = styled.div`
  ${global.fontRobotoLight};
  font-size: 24px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const imageBlocksRow = styled.div`
  display: flex;
  overflow: auto;
  margin-bottom: 5vw;
  justify-content: flex-start;
  align-items: flex-start;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1024px) {
    margin-bottom: 10vw;
  }
`;

export const singleImageBlocks = styled.div`
  margin-right: 3vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const blockImages = styled.svg`
  width: 50px;
  height: 50px;
`; //rm this

export const blockShadow = styled.button`
  box-shadow: 0px 3px 10px #e3e3e3;
  border-radius: 10px;
  width: 10vw;
  height: 11vw;
  display: flex;
  justify-content: space-evenly;
  border: 0;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background: #5cca8f;
    svg {
      path {
        fill: white;
        stroke: white;
      }
    }
    .backend-architechture_svg__a,
    .backend-architechture_svg__b,
    .webDevelopment_svg__a,
    .e-commerce_svg__b,
    .b2b_svg__b,
    .banking-services_svg__b,
    .not-sure_svg__b {
      fill: white;
    }
  }
  &:focus {
    outline: none;
  }
  svg {
    width: 94px;
    height: 94px;
  }

  @media (max-width: 1024px) {
    width: 19vw;
    height: 21vw;
    cursor: pointer;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 19vw;
    height: 21vw;
    cursor: pointer;
    margin-bottom: 10px;
    svg {
      width: 70px;
      height: 70px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 46px;
      height: 46px;
    }
  }
`;

export const paragraph = styled.p`
  ${global.fontRobotoLight}
  font-size: 15px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
    margin-top: 3px;
  }
`;

export const budgetRow = styled(imageBlocksRow)`
  box-shadow: 0 3px 15px #e3e3e3;
  width: 60%;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 5vw;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
    margin-top: 3px;
  }
`;

export const singleBudgetBlocks = styled.button`
  border-right: 1px solid #d6e0ef;
  cursor: pointer;
  text-align: center;
  border-top: 0;
  border-bottom: 0;
  background-color: #fff;
  height: 8vw;
  flex-grow: 1;
  flex-basis: 0;
  @media (max-width: 780px) {
    height: 15vw;
  }

  &:hover {
    background: #5cca8f;
    p {
      color: white;
    }
  }
  :nth-last-child(1) {
    border-right: 0;
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

  @media (max-width: 1330px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const formHead = styled.p`
  ${global.fontRobotoRegular};
  font-size: 20px;
  color: #242424;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  border-bottom: 1px solid #242424;
  ${global.fontRobotoLight};
  border-top: 0;
  border-right: 0;
  border-left: 0;
  padding: 15px 0px;
  width: 50%;
  background: transparent;
  height: 5vw;
  padding: 10px;
  ::placeholder {
    ${global.fontRobotoLight};
    color: #dadada;
    font-size: 24px;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 1024px) {
    width: 75%;
    font-size: 18px;
    ::placeholder {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    width: calc(100% - 5vw);
    font-size: 16px;
    ::placeholder {
      font-size: 16px;
    }
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
  @media (max-width: 480px) {
  }
`;

export const bannerSvgTrans = styled.div`
  svg {
    transform: rotate(180deg);
  }
`;

export const bannerSvg = styled.div`
  z-index: -2;
  width: 100%;
  height: auto;
  svg {
    z-index: -2;
    width: 100%;
    height: auto;
    position: absolute;
  }
`;
