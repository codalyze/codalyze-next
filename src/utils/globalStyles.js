import styled, { css, createGlobalStyle } from "styled-components";

createGlobalStyle`
@font-face {
  font-family: Freight-Disp-Bold;
  src: url('../fonts/Freight-Disp-Bold.otf') format('opentype');
}
`;

export const metrics = {
  containerWidth: 1800
};

export const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export const fontFreightDispBold = css`
  font-family: Freight-Disp-Bold;
  font-weight: 600;
  font-size: 94px;
  color: #242424;
`;

export const fontRobotoLight = css`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #242424;
`;

export const fontRobotoMedium = css`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #242424;
`;

export const fontRobotoRegular = css`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #242424;
`;

export const fontRobotoBold = css`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;

export const fontRobotoThin = css`
  font-family: "Roboto", sans-serif;
  font-weight: 100;
`;

export const Title2 = styled.h1`
  color: black;
  font-size: 50px;
  margin-top: 0;
`;

export const A = styled.a``;

export const flexRow = css`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const container = css`
  // width: 100%;
  max-width: ${metrics.containerWidth}px;
  margin: 0 auto;
`;

export const fullRow = css`
  width: 100%;
`;

export const mainContainer = css`
  max-width: ${metrics.containerWidth}px;
  margin: 0 auto;
  padding: 0 6vw;
`;

export const twoBlocks = css`
  width: 50%;
`;

export const threeBlocks = css`
  width: 33.3%;
`;

export const fourBlocks = css`
  width: 25%;
`;

export const contentContainer = css`
  padding: 0 6vw;
`;

export const mainButton = css`
  background: #5cca8f;
  border: none;
  color: #fff;
  font-size: 38px;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
  width: 439px;
  height: 74px;
`;

export const CenterImg = css`
  text-align: center;
  margin: 0 auto;
  display: block;
`;

export const mobileTitle = css`
  ${fontFreightDispBold}
  font-size: 35px;
  margin: 0 0 0;
  line-height: 1;
`;

export const mobileparagraph = css`
  ${fontRobotoLight}
  font-size: 15px;
  margin: 0 0 0;
`;

export const mobileButton = css`
  ${fontRobotoRegular}
  background: #5cca8f;
  border: none;
  color: #fff;
  font-size: 21px;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
  width: 214px;
  height: 36px;
`;

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
