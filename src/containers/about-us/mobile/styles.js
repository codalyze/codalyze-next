import styled from "styled-components";
import * as global from "../../../utils/globalStyles";

export const title = styled.h1`
  ${global.mobileTitle}
  padding: 0 35px 0;
`;

export const p = styled.p`
  ${global.mobileparagraph}
  margin: 15px 35px 0;
  padding-right: 80px;
`;

export const startContent = styled.p`
  ${global.mobileparagraph}
  margin: 15px 35px 0;
  padding-right: 80px;
`;

export const img = styled.img`
  ${global.CenterImg}
  margin-top: 58px;
  margin-bottom: 86px;
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

export const whoweareContainer = styled.div`
  position: relative;
  margin-bottom: 100px;
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

export const techStackContainer = styled.div`
  position: relative;
  padding: 0 35px 50px;
`;

// export const techMobileBgBlock = styled.div`
//   position: absolute;
//   left: 0;
//   width: 100%;
//   z-index: -1;
//   bottom: 0;
//   svg {
//     width: 100%;
//     height: auto;
//   }
//   .a {
//   }
// `;

export const techStackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  padding-top: 40px;
`;

export const techStackBlock = styled.div`
  ${global.twoBlocks}
  padding-bottom: 50px;
`;

export const techStackLogo = styled.img``;

export const greenBtn = styled.button`
  ${global.mobileButton}
  margin: 0 auto;
  display: block;
`;
