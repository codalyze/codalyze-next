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
  padding-left: 15px;
`;

export const strategyBlockTwo = styled.div`
  width: 40%;
  padding-right: 10%;
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
  font-size: 60px;
  margin: -50px 0 39px;
`;

export const strategySubTitle = styled.h4`
  color: #1e1e1e;
  font-size: 34px;
  margin: 0 0 93px;
  line-height: 35px;
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
  font-size: 34px;
  margin: 0;
  font-weight: inherit;
`;

export const ourWorkBtn = styled.button`
  ${global.mainButton}
`;

export const specializeRow = styled.div`
  padding: 125px 6vw;
`;

export const homepageBlocksTitle = styled.h2`
  font-size: 60px;
  color: #000;
  margin: 0 0 15px;
`;

export const specializeContent = styled.p`
  font-size: 30px;
  color: #000;
  margin: 0 0 15px;
`;

export const specializeAreas = styled.div`
  display: flex;
  margin: 100px 0 100px;
  justify-content: space-between;
`;

export const specializeAreasBlocks = styled.div`
  border: 1px solid rgba(208, 192, 192, 0.5);
  width: 412px;
  box-shadow: 0px 3px 2px #e1e1e2;
`;

export const specializeAreasTitle = styled.h5`
  font-size: 31px;
  text-align: center;
  margin: 78px 0 28px;
`;

export const specializeAreasContent = styled.p`
  font-size: 24px;
  margin: 0 50px 90px;
`;

export const specializeAreasImage = styled.img`
  ${global.CenterImg};
  padding-top: 87px;
`;

export const specializehelp = styled.p`
  font-size: 24px;
  text-align: center;
  margin: 0 0 20px;
`;

export const specializeBtn = styled.button`
  ${global.mainButton}
  margin: 0 auto;
  display: block;
`;
