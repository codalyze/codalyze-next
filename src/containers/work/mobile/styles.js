import styled from "styled-components";
import * as global from "../../../utils/globalStyles";

export const pageWrapper = styled.div`
  position: relative;
  padding: 0 0 86px;
`;

export const workMobileBgContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 150px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
`;

export const title = styled.h1`
  ${global.mobileTitle}
  padding: 0 35px 10px;
`;

export const p = styled.p`
  ${global.mobileparagraph}
  margin: 0 35px 58px;
  padding-right: 80px;
`;

export const img = styled.img`
  ${global.CenterImg}
  margin-bottom: 67px;
`;

export const btn = styled.button`
  ${global.mobileButton}
  margin: 0 auto;
  display: block;
`;

export const betKingWork = styled.div`
padding: 50px 0 86px;
position: relative;
`;

export const leftBgContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: -245px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
`;

export const rightBgContainer = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  top: -245px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
`;

export const bottomBgContainer = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  bottom: -115px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
`;

export const betkingStarBgContainer = styled.div`
  position: absolute;
  right: -25px;
  top: 168px;
  width: 180px;
  z-index: -2;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
  }
`;

export const kheloBgStarContainer = styled.div`
  position: absolute;
  left: -65px;
  bottom: 90px;
  width: 180px;
  z-index: -2;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
  }
`;

export const fircircleStarBgContainer = styled.div`
  position: absolute;
  right: -55px;
  bottom: 15px;
  width: 180px;
  z-index: -2;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
  }
`;