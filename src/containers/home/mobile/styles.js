import styled from "styled-components";
import * as global from "../../../utils/globalStyles";

export const pageWrapper = styled.div``;

export const title = styled.h1`
  ${global.mobileTitle}
  color: #000;
  margin: 0 0 15px;
`;

export const p = styled.p`
  ${global.mobileparagraph}
  color: #000;
`;

export const HomeMobileBgSvg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 41%;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
    opacity: 0.4;
  }
`;

export const strategyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 35px;
`;


export const strategyBlockOne = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  margin-left: -10px;
  padding: 25px 0;
`;

export const strategyBlockTwo = styled.div``;

export const strategyInfoNum = styled.h3`
  color: #fff;
  font-size: 25px;
`;

export const strategySubTitle = styled.h4`
  ${global.fontRobotoLight};
  color: #1e1e1e;
  font-size: 24px;
  margin: 0 0 50px;
  line-height: 35px;
  letter-spacing: 1px;
  font-weight: inherit;
`;

export const strategyStatsBlock = styled.div`
  margin-bottom: 25%;
`;

export const strategyStats = styled.div`
  text-align: center;
`;

export const strategyStatsNum = styled.h5`
  ${global.fontRobotoLight};
  color: #111111;
  font-size: 28px;
  margin: 0 0 0px;
`;

export const strategyStatsTitle = styled.h6`
  ${global.mobileparagraph};

`;

export const greenBtn = styled.button`
  ${global.mobileButton}
  margin: 0 auto;
`;




