import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const pageWrapper = styled.div`
  position: relative;
`;

export const openingsRow = styled.div`
  ${global.fullRow}
  position: relative;

`;

export const FlexContainer = styled.div`
  ${global.contentContainer}
`;

export const openingSection = styled.div`
  position: absolute;
  top: 30%;
`;

export const title = styled.h4`
  ${global.fontRobotoLight};
  text-align: center;
  font-size: 48px;
  opacity: inherit;
  margin: 0 0 26px;
`;

export const openingsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const openingsBlock = styled.div`
  padding: 58px 102px 48px 20px;
  margin-bottom: 30px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #e3e3e3;
  border-radius: 10px;
`;

export const designationTitle = styled.h5`
  font-size: 34px;
  margin: 0 0 10px;
`;

export const experienceSubTitle = styled.h6`
  font-size: 20px;
  margin: 0 0 0;
  width: 65%;
`;


export const CareerBg = styled.div`
  left: 0;
  width: 100%;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
    opacity: 0.5;
  }
`;