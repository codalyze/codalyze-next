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

export const img = css`
  width: 100%;
`;

export const CenterImg = css`
  text-align: center;
  margin: 0 auto;
  display: block;
`;

export const paragraphCenter = css`
  text-align: center;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const mainButton = css`
  background: #5cca8f;
  border: none;
  color: #fff;
  padding: 14px 68px;
  font-size: 22px;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
`;
