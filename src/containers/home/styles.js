import styled from "styled-components";
import * as global from "../../utils/globalStyles";
import { globalAgent } from "https";

export const strategyRow = styled.div`
  ${global.fullRow}
  ${global.flexRow}
  ${global.container}
`;

export const FlexContainer = styled.div`
  ${global.contentContainer}
`;

export const strategyBlock = styled.div`
  ${global.twoBlocks};
  ${global.flexRow}
`;

export const pageWrapper = styled.div`
  position: relative;
`;

export const bannerSvg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 300px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
    opacity: 0.4;
  }
`;

export const strategyBlockOne = styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  padding-left: 15px;
`;

export const strategyBlockTwo = styled.div`
  width: 40%;
  padding-right: 10%;
`;

export const strategyInfoNum = styled.h3`
  color: #fff;
  font-size: 25px;
`;

export const strategyInfoTitle = styled.h3`
  color: #fff;
  font-size: 20px;
`;

export const strategyTitle = styled.h2`
  color: #000;
  font-size: 60px;
  margin: -50px 0 39px;
`;

export const strategySubTitle = styled.h4`
  color: #1e1e1e;
  font-size: 34px;
  margin: 0 0 93px;
  line-height: 35px;
  letter-spacing: 1px;
  font-weight: inherit;
`;

export const Button = styled.button`
  color: #449968;
  background: #ffffff;
  font-size: 20px;
  padding: 10px 75px;
  border-radius: 10px;
  border: none;
`;

export const strategyStatsBlock = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 21%;
`;

export const strategyStats = styled.div`
  text-align: center;
`;

export const strategyStatsNum = styled.h5`
  color: #1e1e1e;
  font-size: 70px;
  margin-bottom: 10px;
  margin: 0;
  font-weight: inherit;
`;

export const strategyStatsTitle = styled.h6`
  color: #1e1e1e;
  font-size: 34px;
  margin: 0;
  font-weight: inherit;
`;

export const ourWorkBtn = styled.button`
  ${global.mainButton}
`;

export const specializeRow = styled.div`
  ${global.container}
`;

export const homepageBlocksTitle = styled.h2`
  font-size: 60px;
  color: #000;
  margin: 0 0 15px;
`;

export const specializeContent = styled.p`
  font-size: 34px;
  color: #000;
  margin: 0 0 15px;
`;

export const specializeAreas = styled.div`
  display: flex;
  margin: 100px 0 100px;
  justify-content: space-between;
`;

export const specializeAreasBlocks = styled.div`
  border: 1px solid rgba(208, 192, 192, 0.5);
  width: 412px;
  box-shadow: 0px 3px 2px #e1e1e2;
`;

export const specializeAreasTitle = styled.h5`
  font-size: 31px;
  text-align: center;
  margin: 78px 0 28px;
`;

export const specializeAreasContent = styled.p`
  font-size: 24px;
  margin: 0 50px 90px;
`;

export const specializeAreasImage = styled.img`
  ${global.CenterImg};
  padding-top: 87px;
`;

export const specializehelp = styled.p`
  font-size: 24px;
  text-align: center;
  margin: 0 0 20px;
`;

export const specializeBtn = styled.button`
  ${global.mainButton}
  margin: 0 auto;
  display: block;
`;

export const testimonialRow = styled.div`
  ${global.fullRow};
  padding: 180px 0 0;
  height: 1050px;
  position: relative;
`;

export const testimonialTitle = styled(homepageBlocksTitle)`
  text-align: center;
  margin: 0 0 53px;
`;

export const testimonialBlock = styled.div`
  padding-bottom: 50px;
  position: relative;
  background: #fff;
`;

export const testimonialImage = styled.img`
  margin: 0 auto;
  display: block;
  padding: 100px 0;
`;

export const testimonialHeading = styled.h5`
  font-size: 40px;
  text-align: center;
  margin: 0 0 15px;
`;

export const testimonialSubHeading = styled.h6`
  font-size: 30px;
  text-align: center;
  margin: 0 0 25px;
`;

export const testimonialParagraph = styled.p`
  font-size: 18px;
  padding: 0 15%;
`;

export const testimonialSvg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  z-index: -1;
  top: -27%;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
    opacity: 0.4;
  }
`;

export const testimonialContentSvg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: -8%;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
    opacity: 0.72;
  }
`;

export const reviewsRow = styled.div`
  ${global.fullRow};
`;

export const reviewsSection = styled.div`
  display: flex;
  align-items: center;
`;

export const reviewsSubTitle = styled.div`
  color: #242424;
  font-size: 34px;
  margin: 0 0 80px;
`;

export const reviewsProject = styled.button`
  ${global.mainButton}
`;

export const reviewsBlock = styled.div`
  ${global.twoBlocks};
  &:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const reviewImageBlocks = styled.div``;

export const reviewSingle = styled.div`
  width: 326px;
  border: 1px solid #e3e3e3;
  border-radius: 25px;
  margin-bottom: 30px;
  box-shadow: 0px 1px #e3e3e3;
`;

export const reviewImageTitle = styled.h6`
  font-size: 34px;
  margin: 15px 18px;
`;

export const reviewImageContent = styled.p`
  font-size: 24px;
  margin: 0 15px 25px;
`;

export const reviewImage = styled.img``;

export const techStackRow = styled.div`
  ${global.fullRow};
  background: #f9f7f7;
`;

export const techStack = styled.div`
  ${global.fullRow};
  ${global.container}
  padding: 75px 0;
`;

export const techStackTitle = styled(homepageBlocksTitle)`
  text-align: center;
`;

export const techStackSubTitle = styled(strategySubTitle)`
  text-align: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const techLogoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
 

`;

export const techLogoBlock = styled.div`
  ${global.threeBlocks}
  padding-bottom: 100px;
  &:nth-child(2) {
    margin: 0 auto;
    text-align: center;
  };
  &:nth-child(5) {
    margin: 0 auto;
    text-align: center;
  };
  &:nth-child(3) {
    margin: 0 auto;
    text-align: right;
  };
  &:nth-child(6) {
    margin: 0 auto;
    text-align: right;
  }`;
