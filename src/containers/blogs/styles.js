import styled from "styled-components";
import * as global from "../../utils/globalStyles";
export const containerFluid = styled.div`
  ${global.fullRow};
`;

export const container = styled.div`
  ${global.mainContainer};
`;

export const blogContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  margin-bottom: 20px;
  @media (max-width: 992px) {
    width: 96%;
  }
`;

export const h4 = styled.h4`
  ${global.fontFreightDispBold};
  font-size: 50px;
  text-align: center;
  padding: 72px 0 0;

  @media (max-width: 640px) {
    ${global.mobileTitle}
  }
`;

export const span = styled.span`
  display: inline-block;
  margin: 0;
`;

export const p = styled.p`
  ${global.fontRobotoLight}
  font-size: 20px;
  margin: 0 0 15px;
  line-height: 1.5;
  @media (max-width: 640px) {
    ${global.mobileparagraph};
    padding-bottom: 14px;
    text-align: justify;
  }
`;

export const clutchImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 320px;
  margin-bottom: 20px;

  @media (max-width: 640px) {
    width: 80%;
    padding-top: 5%;
  }
`;
export const block = styled.div`
  width: 100%;
  right: 0;
  position: absolute;
  z-index: -1;
`;

export const aboutBg = styled.img`
  width: 67%;
  padding: 24% 0;
  right: 0;
  background: #f8f9ff;
  position: absolute;
  z-index: -1;
`;

export const blogContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const a = styled.a`
  color: #4ac88d;
  text-decoration: none;
`;
