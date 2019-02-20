import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const pageWrapper = styled.div`
  position: relative;
`;

export const heading = styled.div`
  margin-top: 30;
`;

export const container = styled.div`
  ${global.container}
`;

export const openingsRow = styled.div`
  ${global.fullRow}
  position: relative;
`;

export const HomeBannerWrap = styled.div`
  margin-top: 5%;
`;

export const contentBgTablet = styled.div`
  
`;

export const openingSection = styled.div`
  position: absolute;
  top: 24%;
  width: 100%;
`;

export const title = styled.h4`
  ${global.fontRobotoLight};
  text-align: center;
  font-size: 48px;
  opacity: inherit;
  margin: 0 0 26px;
`;

export const openingsList = styled.div`
  ${global.mainContainer}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const openingsBlock = styled.button`
  margin-bottom: 30px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #e3e3e3;
  border-radius: 10px;
  width: 30%;
  margin-right: 10px;
  padding: 58px 20px;
  min-height: 95px;
  text-align: left;
  border: 0;
`;

export const designationTitle = styled.h5`
  ${global.fontRobotoMedium};
  font-size: 34px;
  margin: 0 0 10px;
`;

export const experienceSubTitle = styled.h6`
  ${global.fontRobotoLight};
  font-size: 20px;
  margin: 0 0 0;
  width: 65%;
`;

export const CareerBg = styled.div`
  left: 0;
  bottom: 0;
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

export const viewMore = styled.button`
  ${global.mainButton}
  display: block;
  margin: 0 auto;
  margin-top: 106px;
`;

export const paginationWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const paginationFirst = styled.div`
  padding: 10px 15px;
  min-width: 15px;
  background: #1c9868;
  color: #ffffff;
  border-right: 1px solid #fff;
  text-align: center;
`;

export const paginationUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const paginationLi = styled.li`
  padding: 10px 15px;
  list-style: none;
  background: #1c9868;
  // border-right: 1px solid #fff;
  text-align: center;
  color: #fff;
  cursor: pointer;
  &:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: #fff;
    color: #000;
  }
  &:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: #fff;
    color: #000;
  }
`;

export const rightImage = styled.div`
  position: absolute;
  right: 0;
  top: 13%;
`;
