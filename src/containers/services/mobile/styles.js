import styled from "styled-components";
import * as global from "../../../utils/globalStyles";

export const pageWrapper = styled.div`
  position: relative;
`;

export const servicesMobileBgContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 200px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
`;

export const middleContent = styled.div`
  padding: 45px 0;
`;

export const container = styled.div`
  position: relative;
  padding: 15px 35px 60px;
`;

export const title = styled.h1`
  ${global.mobileTitle}
  margin-bottom: 10px;
`;

export const subTitle = styled.h2`
  ${global.fontFreightDispBold}
  margin: 0 0 10px;
  font-size: 20px;
`;

export const image = styled.img`
  ${global.CenterImg}
  margin-bottom: 40px;
`;

export const p = styled.p`
  ${global.mobileparagraph}
  padding-right: 80px;
`;

export const ul = styled.ul`
  padding: 0 0 0 20px;
`;

export const li = styled.li`
  ${global.mobileparagraph}
`;

export const listContainer = styled.div`
  display: flex;
`;

export const listSection = styled.div`
  &:nth-child(1) {
    margin-right: 72px;
  }
`;

export const appBtn = styled.button`
  ${global.mobileButton}
  margin: 0 auto;
  display: block;
`;

export const backendMobileBgContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: -260px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
`;
