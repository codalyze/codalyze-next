import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const commonDiv = styled.div``;

export const mobileBanner = styled.div`
  position: relative;
  padding: 70px 35px;
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
