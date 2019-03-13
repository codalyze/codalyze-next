import styled from "styled-components";
import * as global from "../../../utils/globalStyles";

export const PageWrapper = styled.div`
  position: relative;
`;

export const bannerSvg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 410px;
  z-index: -1;
  svg {
    width: 100%;
  }
  .a {
    opacity: 0.4;
  }
`;

export const FlexContainer = styled.div`
  ${global.mainContainer}
  padding: 80px 6vw;
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

export const devisonDiv = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1024px) {
    align-items: end;
  }
`;

export const leftDiv = styled.div`
  ${global.twoBlocks}
  img {
    width: 100%;
  }
  margin-right: 30px;
`;
export const rightDiv = styled.div`
${global.twoBlocks}
img {
  width: 100%;
}
margin-left: 30px;
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

export const TeamPhotowrapper = styled(devisonDiv)`
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Photo = styled('div')`
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
  &:nth-child(8) {
    justify-content: center;
    display: flex;
  }
  &:nth-child(9) {
    justify-content: flex-end;
    display: flex;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: inherit;
  }
`;
export const TeamMemberImage = styled('img')`
  width: 300px;
`;

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

export const WrapperBlock = styled('div')`
  width: 331px;
  text-align: left;
`;

export const Button = styled.button`
  ${global.mainButton}
`;

export const ButtonWrapper = styled('div')`
  text-align: center;
  padding: 50px 0;
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

export const circleDiv = styled('div')`
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

export const ProducTeamInner = styled('div')`
  // position: absolute;
  // bottom:0;
  @media (min-width: 768px) and (max-width: 1024px) {
    top: 25%;
  }
`;

export const circleImages = styled('div')`
  position: absolute;
  z-index: -1;
  width: 100%;
`;

export const SectionWrapper = styled('div')`
  margin: 100px 0;
`;

export const TeamWrapper = styled('div')`
  margin-top: 100px;
  position: relative;
`;
