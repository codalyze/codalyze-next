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

export const aboutBetking = styled.div`
  margin: 160px 0 120px;
  width: 60%;
`;

export const weDid = styled.div`
  margin: 120px 0 40px;
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

export const contentSection = styled.div`
  position: relative;
`;

export const screenshot = styled.img`
  height: auto;
  position: absolute;
  right: 0;
  top: -67%;
  width: 50%;
`;
