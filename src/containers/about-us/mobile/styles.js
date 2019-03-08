import styled from "styled-components";
import * as global from "../../../utils/globalStyles";

export const pageWrapper = styled.div`
  position: relative;
`;


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

export const teamContainer = styled.div`
  position: relative;
  padding: 0 35px 50px;
`;

export const teamStarBgContainer = styled.div`
  position: absolute;
  left: -50px;
  top: -90px;
  width: 158px;
  z-index: -2;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
  }
`;

export const teamRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 40px;
`;

export const teamBlock = styled.div`
  padding-bottom: 50px;
`;

export const teamMemberImg = styled.img``;

export const teamTitle = styled.h5`
  ${global.fontRobotoMedium}
  font-size: 15px;
  margin: 0 0 0;
`;

export const teamPosition = styled.h5`
  ${global.fontRobotoLight}
  font-style: italic;
  font-size: 15px;
  margin: 0 0 0;
`;

export const greenBtn = styled.button`
  ${global.mobileButton}
  margin: 0 auto;
  display: block;
`;

export const teamBgContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  z-index: -2;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
  }
`;

export const optBgContainer = styled.div`
  position: absolute;
  right: -70px;
  top: -70px;
  width: 158px;
  z-index: -2;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
  }
`;

export const highBgContainer = styled.div`
  position: absolute;
  right: 0;
  top: -300px;
  width: 100%;
  z-index: -2;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
  }
`;

export const focusedBgContainer = styled.div`
  position: absolute;
  right: -17px;
  top: 90px;
  width: 158px;
  z-index: -2;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
  }
`;

export const loveBgContainer = styled.div`
  position: absolute;
  right: 0;
  top: -30px;
  width: 100%;
  z-index: -2;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
  }
`;