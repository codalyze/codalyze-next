import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const pageWrapper = styled.div`
  position: relative;
`;

export const openingsRow = styled.div`
  // ${global.fullRow}
  position: relative;
   
`;

export const FlexContainer = styled.div`
  // ${global.contentContainer}
 
`;

export const openingSection = styled.div`
  // position: absolute;
  // top: 24%;
  ${global.mainContainer}
  margin-top: 8%;
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
  justify-content: space-around;
`;

export const openingsBlock = styled.button`
  min-width: 300px;
  margin-bottom: 30px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #e3e3e3;
  border-radius: 10px;
  width: 30%;
  margin-right: 10px;
  padding: 58px 20px;
  min-height: 95px;
  text-align:left;
  border:0;
`;

export const designationTitle = styled.h5`
${global.fontRobotoMedium};
  font-size: 24px;
  margin: 0 0 10px;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const experienceSubTitle = styled.h6`
${global.fontRobotoLight};
  font-size: 16px;
  margin: 0 0 0;
  width: 80%;
`;

export const sendYourResume = styled.p`
${global.fontRobotoLight};
font-size: 20px;
margin: 20px auto 380px;
text-align: center;
a {
  color: #4AC88D;
  text-decoration: none;
}
`;

export const CareerBg = styled.div`
  left: 0;
  width: 100%;
  z-index: -1;
  position: absolute;
  bottom: 0;
  top: -275px;
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
  margin-top: 100px;
  margin-bottom: 50px;
`;
