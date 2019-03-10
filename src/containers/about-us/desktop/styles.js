import styled, { css, keyframes } from "styled-components";
import * as global from "../../../utils/globalStyles";

export const mainDiv = styled.div`
  ${global.fullRow}
`;

export const commonDiv = styled.div``;

export const bannerSvg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 410px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
    opacity: 0.4;
  }
`;

export const FlexContainer = styled.div`
  ${global.mainContainer}
`;

export const pageWrapper = styled.div`
  position: relative;
`;

export const whoeWe = styled.h1`
  ${global.fontFreightDispBold};
  text-align: center;
  font-size: 50px;
`;

export const aboutText = styled.p`
  ${global.fontRobotoLight};
  font-size: 24px;
  text-align: center;
  color: #242424;
  line-height: 1.5em;
`;
export const secOneImg = styled.img`
  width: 100%;
`;

export const FirstSecImage = styled.div`
  margin-top: 8%;
`;

export const sectionFirst = styled.div`
  @media (min-width: 768px) and (max-width: 1024px) {
    height: inherit;
    margin-top: 20%;
  }
`;

export const sectionSecond = styled(sectionFirst)`
`;

export const otherSections = styled(sectionFirst)`
`;

export const devisonDiv = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  align-items: center;
  //position:relative;
  @media (min-width: 768px) and (max-width: 1024px) {
    align-items: end;
  }
`;

export const leftDiv = styled.div`
  ${global.twoBlocks}
`;
export const rightDiv = styled.div`
${global.twoBlocks}
text-align: ${props => (props.right ? "right" : "")};
`;

export const p = styled.p`
  ${global.fontRobotoLight};
  text-align: left;
  margin: 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
    margin: 0 15px;
  }
`;

export const h2 = styled.h2`
  ${global.fontFreightDispBold};
  font-size: 50px;
  margin: 30px 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 38px;
    margin: 0 15px 15px;
  }
`;

export const imageRight = styled.img`
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
`;

export const TeamBg = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
  bottom: 0;
  svg {
    width: 100%;
    height: auto;
    bottom: 0;
  }
`;

export const TeamMain = styled(mainDiv)`
  //position:relative;
  margin-top: 10%;
`;

export const TeamPhotowrapper = styled(devisonDiv)`
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Photo = styled(commonDiv)`
  width: 33.3%;
  margin-bottom: 50px;
  &:nth-child(2) {
    justify-content: center;
    display: flex;
  }
  &:nth-child(5) {
    justify-content: center;
    display: flex;
  }
  &:nth-child(3) {
    justify-content: flex-end;
    display: flex;
  }
  &:nth-child(6) {
    justify-content: flex-end;
    display: flex;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: inherit;
  }
`;
export const TeamMemberImage = styled(imageRight)``;
export const TeamMemberName = styled.h3`
  ${global.fontRobotoMedium};
  font-size: 24px;
  margin: 0 0px 3px 0;
`;

export const TeamPosition = styled.h4`
  ${global.fontRobotoLight};
  color: #909090;
  font-size: 20px;
  font-style: italic;
  margin: 0 0;
`;

export const WrapperBlock = styled(commonDiv)`
  width: 331px;
  text-align: left;
`;

export const Button = styled.button`
  ${global.mainButton}
`;

export const ButtonWrapper = styled(commonDiv)`
  text-align: center;
  padding: 50px 0;
`;

export const LoveStartupsDiv = styled(mainDiv)`
  position: relative;
  margin-top: 10%;
`;

export const listUl = styled.ul`
  list-style: none;
  padding-left: 22px;
`;

export const li = styled.li`
  ${global.fontRobotoLight};
  margin: 32px 0;
  position: relative;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const circleDiv = styled(commonDiv)`
  background: #e0e0e0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: -27px;
  z-index: -1;
  top: -12px;
  @media (min-width: 768px) and (max-width: 1024px) {
    left: -10px;
  }
`;

export const innerDiv = styled(commonDiv)`
  position: absolute;
  top: 25%;
  width: 100%;
`;

export const HitechMain = styled(LoveStartupsDiv)`
  position: relative;
  margin-top: 0;
`;

export const HitechInner = styled(innerDiv)`
  top: 35%;
  @media (min-width: 768px) and (max-width: 1024px) {
    top: 25%;
  }
`;

export const ProducTeamWrapper = styled(commonDiv)`
  height: 400px;
  top: -230px;
  position: relative;
`;

export const ProducTeamInner = styled(commonDiv)`
  // position: absolute;
  // bottom:0;
  @media (min-width: 768px) and (max-width: 1024px) {
    top: 25%;
  }
`;

export const circleImages = styled(commonDiv)`
  position: absolute;
  bottom: -93px;
  left: -90px;
  z-index: -1;
`;
