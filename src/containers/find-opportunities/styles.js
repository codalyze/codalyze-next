import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const pageWrapper = styled.div`
  position: relative;
`;

export const heading =  styled.div`
 margin-top:30
`;

export const container =  styled.div`
${global.container}
`;

export const HomeBannerWrap =  styled.div`
margin-top: 5%;
`;

export const bannerSvg = styled.div`
position: absolute;
  left: 0;
  width: 100%; 
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }  
`;