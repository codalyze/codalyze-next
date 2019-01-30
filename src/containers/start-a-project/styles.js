import styled from "styled-components";
import * as global from "../../utils/globalStyles";
import { globalAgent } from "https";

export const pageWrapper = styled.div`
  position: relative;
`;

export const containerFluid = styled.div`
  ${global.fullRow};
`;

export const container = styled.div`
  ${global.mainContainer};
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
`;

export const singleImageBlocks = styled.div`
  width: 240px;
  text-align: center;
  margin-right: 120px;
`;

export const blockImages = styled.img``;

export const blockShadow = styled.div`
  box-shadow: 0px 3px 10px #e3e3e3;
  border-radius: 10px;
  width: 158px;
  margin: 0 auto;
  min-height: 174px;
  display: flex;
  justify-content: space-evenly;
`;

export const paragraph = styled.p`
  font-size: 15px;
`;

export const budgetRow = styled(imageBlocksRow)`
  box-shadow: 0 3px 15px #e3e3e3;
  width: 805px;
  margin-bottom: 50px;
  border-radius: 10px;
`;

export const singleBudgetBlocks = styled.div`
  padding: 10px 35px;
  border-right: 1px solid #d6e0ef;
`;

export const budgetAmount = styled.p`
  font-size: 24px;
  color: #1C9868;
`;
