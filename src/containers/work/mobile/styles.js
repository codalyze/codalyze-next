import styled from "styled-components";
import * as global from "../../../utils/globalStyles";

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
`;

export const khelomoreWork = styled.div`
padding: 0 0 86px;
`;

export const fitcircleWork = styled.div`
padding: 0 0 86px;
`;

export const radframeWork = styled.div`
padding: 0 0 86px;
`;