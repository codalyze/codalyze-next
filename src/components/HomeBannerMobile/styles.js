import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const commonDiv = styled.div``;

export const mobileBanner = styled.div`
  position: relative;
  padding: 200px 15px;
`;

export const bannerImg = styled.img`
  ${global.CenterImg};
  width: 100%;
`;

export const mainTitle = styled.h2`
  ${global.fontFreightDispBold};
  font-size: 40px;
  margin: 0 0 15px;
`;

export const subTitle = styled.h4`
  ${global.fontRobotoLight};
  width: 40%;
  font-size: 30px;
  margin: 15px 0 0;
  opacity: inherit;
`;
