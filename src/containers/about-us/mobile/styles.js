import styled from "styled-components";
import * as global from "../../../utils/globalStyles";

export const pageWrapper = styled.div`
  position: relative;
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
`;

export const whoweareBanner = styled.img`
  ${global.CenterImg}
    width: 100%
`;

export const btn = styled.button`
  ${global.mobileButton}
  margin: 0 auto;
  display: block;
`;

export const whoweare = styled.div`
  margin-left: 70px;
`;

export const whoweareTitle = styled.h1`
${global.mobileTitle}
padding: 0 35px 10px;
text-align: right;
`;

export const whoweareContent = styled.p`
${global.mobileparagraph}
padding: 0 35px 58px;
`;

export const aboutBannerMobile = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: -480px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
`;
