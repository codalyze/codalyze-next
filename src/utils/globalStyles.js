import styled, { css } from "styled-components";

export const metrics = {
  containerWidth: 1800
};

export const Title = styled.h1`
  color: red;
  font-size: 50px;
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
  width: 100%;
  max-width: ${metrics.containerWidth}px;
  margin: 0 auto;
`;

export const fullRow = css`
  width: 100%;
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

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
