import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const workBgContainer = styled.div`
  svg {
    width: 100vw;
    height: 60vw;
  }
  @media (max-width: 992px) {
    position: relative;
    top: unset;
    padding-top: 50px;
    svg {
      width: 100vw;
      height: 140vw;
    }
  }
  position: absolute;
  left: 0;
  width: 100%;
  top: 150px;
  z-index: -1;
  overflow: hidden;
`;

export const title = styled.h1`
  ${props => props.mq === "desktop" ? global.titleDesktop : global.title}
  font-size: ${props => props.mq === "desktop" ? "50px;" : "24px;"}
  padding: 0 35px 10px;
`;

export const p = styled.p`
${props => props.mq === "desktop" ? global.paragraphDesktop : global.paragraph}
  font-size: ${props => props.mq === "desktop" ? "24px;" : "15px;"}
  margin: 0 35px 58px;
  padding-right: 80px;
`;

export const img = styled.img`
  ${global.CenterImg}
  margin-bottom: 67px;
`;

export const btn = styled.button`
  ${global.button}
  margin: 0 auto;
  display: block;
`;

export const bannerContainer = styled.div`
  position: relative;
`;

export const bannerContents = styled.div`
  @media (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  @media (min-width: 993px) {
    height: 80vh;
  }
`;

export const pageSection = styled.div`
  margin-top: 100px;
`;

// height: ${props => props.mq !== "desktop" ? "80vh" : "70vh"}

export const projectBackground = styled.div`
  .bg-image {
    position: absolute;
    top: 0;
    left: ${props => props.index % 2 === 1 ? '0' : 'unset'};
    right: ${props => props.index % 2 === 0 ? '0' : 'unset'};
    z-index: -1;
    transform: translateY(-25%);
    width: 40vw;
    @media (max-width: 992px) {
      width: 100%;
      transform: translateY(-40%);
      right: unset;
      left: 0;
    }
  }
`;

export const projectDesktopContainer = styled.div`
  width: 67vw;
  background: white;
  position: relative;
  box-shadow: ${props => props.index % 2 === 0 ?
    '2px 2px 5px 0px rgba(0,0,0,0.2)' :
    '-2px 2px 5px 0px rgba(0,0,0,0.2)'}
`; 

export const specializeBtn = styled.button`
  ${global.mainButton}
  margin: 0 auto;
  display: block;
`;