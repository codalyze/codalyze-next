import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const strategyRow = styled.div`
  ${global.fullRow}
  display: flex;
`;

export const FlexContainer = styled.div`
  ${global.flexRow}
  ${global.container}
`;

export const strategyBlock = styled.div`
  ${global.twoBlocks};
  ${global.flexRow}
  
`;

export const pageWrapper = styled.div`
  position: relative;
`;

export const bannerSvg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 300px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
    opacity: 0.4;
  }
`;

export const strategyBlockOne = styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  grid-column-gap: 15%;
  grid-row-gap: 10%;
`;

export const strategyBlockTwo = styled.div`
  ${global.twoBlocks};
`;

export const strategyInfoNum = styled.h3`
  color: #fff;
  font-size: 25px;
`;

export const strategyInfoTitle = styled.h3`
  color: #fff;
  font-size: 20px;
`;

export const strategyTitle = styled.h2`
  color: #000;
  font-size: 50px;
  margin: 10px 0 15px;
`;

export const strategySubTitle = styled.h4`
  color: #1e1e1e;
  font-size: 27px;
  margin: 0 0 35px;
  line-height: 30px;
  letter-spacing: 1px;
  font-weight: inherit;
`;

export const Button = styled.button`
  color: #449968;
  background: #ffffff;
  font-size: 20px;
  padding: 10px 75px;
  border-radius: 10px;
  border: none;
`;

export const strategyStatsBlock = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 21%;
`;

export const strategyStats = styled.div`
  text-align: center;
`;

export const strategyStatsNum = styled.h5`
  color: #1e1e1e;
  font-size: 70px;
  margin-bottom: 10px;
  margin: 0;
  font-weight: inherit;
`;

export const strategyStatsTitle = styled.h6`
  color: #1e1e1e;
  font-size: 25px;
  margin: 0;
  font-weight: inherit;
`;

export const ourWorkBtn = styled.button`
  ${global.mainButton}
`;