import styled from "styled-components";
import { css } from "styled-components";

export const metrics = {
  containerWidth: 1200
};

export const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export const Title2 = styled.h1`
  color: black;
  font-size: 50px;
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
