import styled, { css, keyframes } from "styled-components";
import { media } from "../../utils/globalStyles";
import WebDev from "./images/WebDev";
import Performance from "./images/Performance";
import Responsive from "./images/Responsive";
import Reusable from "./images/Reusable";
import * as global from "../../utils/globalStyles";

export const PerformanceImage = styled(Performance)`
  .performance_svg__arrow {
    animation: ${rotateArrow} 4s linear infinite;
    transform-origin: 250px 317px;
  }
`;

const rotateArrow = keyframes`
  0% {
    transform: rotate(15deg);
  }

  50% {
    transform: rotate(54deg);
  }

  100% {
    transform: rotate(15deg);
  }
`;

const translatePie = keyframes`
  0% {
    transform: translate(0, -25px);
  }
  50% {
    transform: translate(0, 0px);
  }
  100% {
    transform: translate(0, -25px);
  }
`;

export const ResponsiveImage = styled(Responsive)``;

export const ReusableImage = styled(Reusable)`
  .reusable_svg__pie {
    animation: ${translatePie} 5s ease-in-out infinite;
  }
`;

export const blogContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  margin-bottom: 20px;
  ${media.desktop`
  width: 90%;
  `}
`;

export const bannerContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  position: relative;
  padding: 6vw 0 0 0;
  height: 10%;
  ${media.desktop`
  width: 100%;
  `}
`;

export const bottomSvg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 350px;
  z-index: -1;
  ${media.desktop`
    top: 15vw;
    left: unset;
  `}
`;

export const bannerText = styled.p`
  position: absolute;
  color: #242424;
  font-size: 46px;
  margin: 0;
  ${media.desktop`
    font-size: 16px;
    font-weight: bold;
  `}
`;
export const bannerMobileText = styled.span`
  display: block;
  color: #ef543d;
  white-space: nowrap;
  font-size: 20px;
`;
export const bannerMobileTextContainer = styled.div`
  padding: 10% 0;
`;

export const blockquote = styled.blockquote`
  font-size: 34px;
  font-weight: 700;
  font-style: italic;
  margin-top: 5%;
  text-align: center;

  ${media.desktop`
  font-size: 16px;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;`}
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
  ${media.desktop`
  top: 400px;`}
`;

export const textArea = styled.textarea`
  height: 200px;
  width: 100%;
`;

export const technologies = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  max-width: 1800px;
  margin: 0 auto;
  padding: 6vw 0 0 0;
`;

export const technologyItem = styled.div`
  @media (max-width: 1280px) {
    svg {
      width: 160px;
    }
  }
`;

export const section = styled.section`
  margin: 80px auto 150px;
  ${media.desktop`
    margin: 10px auto;
  `}
`;

export const contentsFromLeft = styled.div`
  position: relative;
  background-color: white;
  box-sizing: border-box;
  width: 80%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-weight: 300;
  ${props =>
    props.isRightAligned
      ? `
    left: 20%;
    padding: 80px 6vw 80px 6vw;
    h2, p {
      padding-left: 200px;
    }
    li {
      padding-left: 200px;
      p {
        padding-left: unset;
      }
    }
  `
      : `
    left: initial;
    padding: 80px 2vw 80px 6vw;
    h2, p {
      padding-right: 200px;
    }
  `};
  ${media.desktop`
    width: 100%;
    box-shadow: unset;
    background-color: transparent;
    padding: 30px 6vw;
    h2, p {
      padding-right: unset;
      padding-left: unset;
    }
    left: unset;
    li {
      padding-left: unset;
        p {
          padding-left: unset;
        }
    }
  `}
`;

// export const StickyContainerDiv = styled(StickyContainer)`
//   display: block;
//   width: 100%;
//   position: relative;
// `;
export const WebDevImage = styled(WebDev)`
  ${media.desktop`
    width: 300px;
    height: 300px;
  `}
`;

export const WebDevImageContainer = styled.div`
  position: absolute;
  top: 100px;
  ${props => (props.isRightAligned ? "left: -200px" : "right: -200px")};
  ${media.desktop`
    display: none;
  `}
`;

export const h2 = styled.h2`
  ${global.fontFreightDispBold};
  font-size: 50px;
  ${media.desktop`
    font-size: 30px;
    padding-right: unset;
    margin: 15px 0;
  `}
`;

export const h3 = styled.h3`
  ${global.fontFreightDispBold};
  font-size: 30px;
  margin-top: 0;
  ${media.desktop`
    font-size: 24px;
  `}
`;

export const p = styled.p`
  ${global.fontRobotoLight};
  font-size: 24px;
  font-weight: 300;
  text-align: justify;
  ${media.desktop`
    padding-right: unset;
    font-size: 16px;
  `}
`;
export const ul = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
`;

export const li = styled.li`
  margin: 60px 0;
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 10px 5% 0 2%;
  p {
    font-size: 16px;
  }
  ${media.desktop`
  width: 100%;
  box-shadow: unset;
  background-color: transparent;
  padding: 30px 6vw;
  h2, p {
    padding-right: unset;
    padding-left: unset;
  }
  left: unset;
  li {
    padding-left: unset;
      p {
        padding-left: unset;
      }
  }
`}
`;

export const liImage = styled.div`
  width: 10vw;
  margin-right: 4vw;
  flex-grow: 0;
  flex-shrink: 0;
  svg {
    width: 8vw;
    min-width: 150px;
  }
  ${media.desktop`
    width: unset;
    svg {
      min-width: 80px;
    }
  `}
`;

export const liContent = styled.div`
  margin-left: 30px;
  ${media.desktop`
  margin-left: unset;
`}
`;

export const pageWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  ${global.mainButton}
`;

export const ButtonWrapper = styled("div")`
  text-align: center;
  padding: 0 0 60px 0;
  margin-top: -30px;
`;

export const specializeBtn = styled.button`
  ${props => (props.mq === "desktop" ? global.mainButton : global.mobileButton)}
  margin: 0 auto;
  display: block;
`;
