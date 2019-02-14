import styled from "styled-components";
import * as global from "../../utils/globalStyles";
import { globalAgent } from "https";

export const containerFluid = styled.div`
  ${global.fullRow};
`;

export const container = styled.div`
  ${global.mainContainer};
`;

export const h1 = styled.h1`
  ${global.fontRobotoThin}
  font-size: 18vw;
  text-align: center;
  margin: 100px 0 80px;
`;

export const h2 = styled.h2`
  ${global.fontRobotoThin}
  font-size: 25vw;
  color: #d0ddee;
  margin: 0 0;
  position: absolute;
  left: -7%;
`;

export const h3 = styled.h3`
  padding: 72px 0 0;
  ${global.fontFreightDispBold};
  font-size: 96px;
`;

export const h4 = styled.h4`
  ${global.fontFreightDispBold};
  font-size: 50px;
  margin: 0 0 15px;
`;

export const h5 = styled.h5`
  ${global.fontFreightDispBold}
  font-size: 40px;
  margin: 0 0 15px;
`;

export const h6 = styled.h6`
  ${global.fontRobotoLight}
  font-size: 24px;
  margin: 0 0 15px;
  line-height: 35px;
`;

export const p = styled.p`
  ${global.fontRobotoLight}
  font-size: 20px;
  margin: 0 0 15px;
`;

export const banner = styled.img`
  width: 100%;
  height: auto;
`;

export const aboutBg = styled.img`
  width: 67%;
  padding: 24% 0;
  right: 0;
  background: #f8f9ff;
  position: absolute;
  z-index: -1;
`;

export const aboutBetking = styled.div`
  padding: 160px 0 120px;
  width: 60%;
`;

export const weDid = styled.div`
  width: 65%;
  position: relative;
  left: 25%;
  padding-left: 10%;
`;

export const numberRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10vw 0;
`;

export const titleSection = styled.div`
  width: 50%;
  position: relative;
  left: 25%;
`;

export const contentSection = styled.div.attrs(({ sectionIndex }) => ({
  sectionIndex
}))`
  position: relative;
  display: flex;
  flex-direction: ${props =>
    props.sectionIndex % 2 === 0 ? "row-reverse" : "inherit"};
  background: #f8f9ff;
  padding-bottom: 30px;
`;

export const screenshot = styled.img`
  width: 100%;
  margin-top: -6%;
`;

export const content = styled.div`
  position: relative;
  left: 14%;
  padding-right: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
`;

export const imageBlock = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const caseRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 175px 0 0;
`;

export const caseSection = styled.div`
  text-align: center;
  margin-bottom: 35px;
`;

export const caseBlock = styled.div.attrs(({ imgPath }) => ({
  imgPath
}))`
  position: relative;
  background-image: url(${props => props.imgPath});
  width: 100%;
  background-repeat: no-repeat;
  width: 364px;
  height: 292px;
  margin-bottom: 35px;
  text-align: center;
`;

export const caseStudyImage = styled.img`
  width: 100%;
  height: auto;
`;

export const caseBtn = styled.button`
  position: relative;
  font-size: 1em;
  color: #fff;
  top: 45%;
  background: transparent;
  border-radius: 50px;
  border: 1px solid #fff;
  box-shadow: none;
  text-transform: uppercase;
  padding: 11px 54px;
  cursor: pointer;
`;
