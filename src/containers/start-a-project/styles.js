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
  transition: all 100ms ease;
  box-shadow: 0px 3px 10px #e3e3e3;
  border-radius: 10px;
  width: ${props => props.isSelected ? '9vw' : '10vw'};
  height: ${props => props.isSelected ? '10vw' : '11vw'};
  display: flex;
  justify-content: space-evenly;
  border: 0;
  background-color: ${(props) => props.isSelected ? '#5cca8f' : 'white'};
  cursor: pointer;
  margin-bottom: ${props => props.isSelected ? 'calc(20px + 1vw)' : '20px'};
  svg {
    path {
      fill: ${(props) => !props.isSelected ? '#5cca8f' : 'white'};
      stroke: ${(props) => !props.isSelected ? '#5cca8f' : 'white'};
    }
  }

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
  background-color: ${(props) => props.isSelected ? '#5cca8f' : '#eee'};
  p {
    color: ${props => props.isSelected ? 'white' : '#888'};
  }
  height: 8vw;
  flex-grow: 1;
  flex-basis: 0;
  @media (max-width: 780px) {
    height: 15vw;
  }

  &:hover {
    background: #fff;
    p {
      color: #5cca8f;
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
  color: ${(props) => !props.isSelected ? '#1c9868' : 'white'};
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
  border-bottom: 1px solid ${props => props.error ? 'red' : '#242424'};
  ${global.fontRobotoLight};
  border-top: 0;
  border-right: 0;
  border-left: 0;
  padding: 15px 0px;
  width: 50%;
  background: transparent;
  height: 32px;
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

export const TextArea = styled.textarea`
  border-bottom: 1px solid ${props => props.error ? 'red' : '#242424'};
  ${global.fontRobotoLight};
  border-top: 0;
  border-right: 0;
  border-left: 0;
  padding: 15px 0px;
  width: 50%;
  background: transparent;
  height: 96px;
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
  &:disabled {
    background-color: #888;
  }
`;

export const cubeWrapper = styled.div`
  position: absolute;
  right: -236px;
  top: 25%;
  z-index: -1;
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

export const errorMessage = styled.p`
  font-size: 16px;
  margin: 5px 0;
  padding: 0;
  color: red;
  text-align: right;
  width: 50%;
  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 480px) {
    width: calc(100% - 5vw);
  }
`;

export const successDiv = styled.div`
  width: calc(100% - 12vw);
  padding: 30px;
  background-color: #5cca8f;
  margin: 10px 6vw 30px;
  box-sizing: border-box;
  position: relative;
  span {
    position: absolute;
    right: 18px;
    top: 10px;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
`;

