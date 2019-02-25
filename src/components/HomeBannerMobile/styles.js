import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const commonDiv = styled.div``;

export const mobileBanner = styled.div`
  position: relative;
  padding: 200px 35px;
`;

export const bannerImg = styled.img`
  ${global.CenterImg};
  width: 80%;
  padding-bottom: 100px;
`;

export const mainTitle = styled.h2`
  ${global.fontFreightDispBold};
  font-size: 101px;
  margin: 0 0 15px;
  line-height: 1;
`;

export const subTitle = styled.h4`
  ${global.fontRobotoRegular};
  font-size: 34px;
  margin: 25px 0 0;
  opacity: inherit;
`;
