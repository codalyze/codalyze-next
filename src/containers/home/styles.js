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
`;

export const strategyBlockOne = styled.div`
  ${global.twoBlocks};
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
  margin: 0 0 15px;
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