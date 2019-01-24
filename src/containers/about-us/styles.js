import styled, { css, keyframes } from "styled-components";
import {media} from "../../utils/globalStyles";
import * as global from "../../utils/globalStyles";

export const mainDiv = styled.div`
${global.fullRow}
`;

export const commonDiv = styled.div``;

export const bannerSvg = styled.div`
position: absolute;
    left: 0;
    width: 100%;
    top: 490px;
    z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
    opacity: 0.4;
  }
`;

export const FlexContainer = styled.div`
 ${global.contentContainer}
`;

export const pageWrapper = styled.div`
position: relative;
`;

export const whoeWe = styled.h1`
  font-size: 94px;
  text-align: center;
`;

export const aboutText = styled.div`
font-size: 34px;
    text-align: center;
    color: #242424;
`;
export const secOneImg = styled.img`
width:100%
`;

export const FirstSecImage = styled.div``;

export const sectionFirst = styled.div`
height:2508px
`;

export const sectionSecond = styled(sectionFirst)`
height:auto
`;

export const devisonDiv = styled.div`
flex-direction: row;
    justify-content: space-between;
    display: flex;
    align-items: center;
    //position:relative;
`

export const leftDiv = styled.div`
${global.twoBlocks}
`;
export const rightDiv = styled.div`
${global.twoBlocks}   
`;

export const para = styled.p`
font-size: 24px;
    text-align: left;
    margin:0;
`;

export const h2 = styled.h2`
font-size: 60px;
margin: 30px 0;
`;

export const imageRight = styled.img``;

export const TeamBg  = styled.div`
position: absolute;   
width: 100%;    
z-index: -1;
bottom:0;
svg {
  width: 100%;
  height: auto;
  bottom:0
}
`;

export const TeamMain = styled(mainDiv)`
//position:relative;
margin-top:10%
`

export const TeamPhotowrapper = styled(devisonDiv)`
justify-content: space-between;
flex-wrap: wrap;
`;
export const Photo = styled(commonDiv)`
width: 33.3%;
margin-bottom:50px;
&:nth-child(2) { 
  justify-content: center;
    display: flex;
}
&:nth-child(5) {  
  justify-content: center;
  display: flex;
}
&:nth-child(3) { 
  justify-content: flex-end;
    display: flex;
}
&:nth-child(6) {  
  justify-content: flex-end;
    display: flex;
}
`;
export const TeamMemberImage = styled(imageRight)`
`;
export const TeamMemberName = styled(commonDiv)`
    color: #242424;
    font-size: 24px;    
`;

export const TeamPosition = styled(commonDiv)`
    color: #909090;
    font-size: 20px;
    font-style: italic;     
`;

export const WrapperBlock = styled(commonDiv)`
width: 331px;
text-align: left;
`;

export const Button = styled.button`
${global.mainButton}
`;

export const ButtonWrapper = styled(commonDiv)`
  text-align:center;
  padding: 50px 0;
`;

export const LoveStartupsDiv = styled(commonDiv)`
position: relative;
min-height: 915px;
`;



export const LoveBanner = styled(TeamBg)`
position: absolute;
    width: 100%;
    z-index: -1;
    top: -350px;
    bottom: 0;
`

export const listUl = styled.ul`
list-style: none;
    padding-left: 22px;
`;

export const li =  styled.li`
margin: 32px 0;
    font-size: 24px;
    position: relative;
`;

export const circleDiv = styled(commonDiv)`
background: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    left: -27px;
    z-index: -1;
    top: -12px;
`;

export const HitechMain = styled(commonDiv)`
  position:relative;
  height:2165px;  
`;

export const HitechBanner = styled(LoveBanner)`
  
`;