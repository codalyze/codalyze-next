import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const strategyRow = styled.div`
  ${global.fullRow};
  background: #449968;
  padding: 100px 0;
  display: flex;
`;

export const FlexContainer = styled.div`
  ${global.flexRow}
  ${global.container}
  align-items: inherit;
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
  color: #fff;
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
  color: #fff;
  font-size: 50px;
  margin: 10px 0 15px;
`;

export const strategySubTitle = styled.h4`
  color: #fff;
  font-size: 27px;
  margin: 0 0 35px;
  line-height: 30px;
  letter-spacing: 1px;
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
  color: #fff;
  font-size: 35px;
  margin-bottom: 10px;
  margin: 0;
`;

export const strategyStatsTitle = styled.h6`
  color: #fff;
  font-size: 25px;
  margin: 0;
`;

export const specializeRow = styled.div`
  ${global.fullRow};
  ${global.container}
  padding: 50px 0 25px;
`;

export const homepageBlocksTitle = styled.h2`
  font-size: 45px;
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
  margin: 100px 0 35px;
`;

export const specializeAreasBlocks = styled.div`
${global.threeBlocks};
&:nth-child(1) {
  text-align: left;
}

&:nth-child(2) {
  text-align: center;
}
&:nth-child(3) {
  text-align: right;
}
`;

export const specializeAreasTitle = styled.h5`
  font-size: 25px;
  margin: 0 0 10px;
`;

export const specializeAreasContent = styled.p`
  font-size: 20px;
  margin: 0;
`;

