import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const commonDiv = styled.div``;

export const mobileBanner = styled.div`
  position: relative;
  padding: 88px 35px 70px;
`;

export const bannerImg = styled.img`
  ${global.CenterImg};
  width: 80%;
  padding-bottom: 50px;
`;

export const mainTitle = styled.h2`
  ${global.mobileTitle};
`;

export const subTitle = styled.h4`
  ${global.mobileparagraph};
  margin: 25px 80px 0 0;
`;

export const pageTitle = styled.h1`
  margin: 0;
  text-align: center;
`;

export const part1 = styled.span`
  font-size: 20px;
  color: #76686a;
`;

export const part2 = styled.span`
  font-size: 28px;
  display: block;
  margin: 10px 0;
  color: #ef543d;
  white-space: nowrap;
`;

export const part3 = styled.span`
  font-size: 20px;
  color: #76686a;
`;
