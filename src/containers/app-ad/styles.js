import styled from "styled-components";
import * as global from "./../../utils/globalStyles";
import { media } from "../../utils/globalStyles";

export const mainContainer = styled.div`
  padding: 6vw;
`;

export const FlexContainer = styled.div`
  ${global.mainContainer}
`;

export const formContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  ${media.desktop`
margin-top: 0;
flex-wrap: wrap;
padding: 0 35px;
`}
@media (max-width: 767px){
  padding: 0;
}
`;

export const reviewsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const reviewImageBlocks = styled.div`
  @media (max-width: 1280px) {
    display: ${props => (props.hideOnSmallScreen ? "none" : "block")};
  }
`;

export const reviewSingle = styled.div`
  width: 326px;
  border: 1px solid #e3e3e3;
  border-radius: 25px;
  margin: 0 0 30px 30px;
  box-shadow: 0px 1px #e3e3e3;
  @media (min-width: 1280px) {
    display: ${props => (props.showOnSmallScreen ? "none" : "block")};
  }
  @media (max-width: 767px){
    margin: 0 0 30px 0px;
  }
`;

export const reviewImageTitle = styled.h6`
  ${global.fontRobotoMedium}
  font-size: 30px;
  margin: 15px 18px;
  @media (max-width: 1440px) {
    font-size: 24px;
  }
`;

export const reviewImageContent = styled.p`
  ${global.fontRobotoLight}
  font-size: 20px;
  margin: 0 15px 25px;
  @media (max-width: 1440px) {
    font-size: 16px;
  }
`;

export const reviewImage = styled.img`
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const instaremImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #989898;
`;

export const reviewsRow = styled.div`
  ${global.fullRow};
  padding: 2vw;
  @media (max-width: 767px){
    padding: 0;
  }
`;

export const homepageBlocksTitle = styled.h2`
  ${global.fontFreightDispBold}
  font-size: 50px;
  color: #000;
  margin: 0 0 15px;
  width: 100%;
`;

export const reviewsTitle = styled(homepageBlocksTitle)`
  font-size: 36px;
  @media (max-width: 1440px) {
    font-size: 32px;
  }
`;

export const reviewsSubTitle = styled.div`
  ${global.fontRobotoLight}
  color: #242424;
  font-size: 24px;
  margin: 0 0 20px;
  width: 100%;
  text-align: center;
  @media (max-width: 1440px) {
    font-size: 18px;
  }
`;

export const reviewsProject = styled.button`
  ${global.mainButton}
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 0 25px;
  }
`;

export const reviewsBlock = styled.div`
  &:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const outerContainer = styled.div`
  ${media.desktop`
padding: 0 35px;`}

  .abc {
    h2 {
      margin-bottom: 2vw !important;
    }
    padding: 0;
    .slider22 {
      background: green;
      max-width: 70%;
      margin: 0 auto;

      .aws-sld {
        img {
          width: 150px;
        }
        h5 {
          font-size: 24px;
        }

        h6 {
          font-size: 22px;
        }

        p {
          font-size: 16px;
        }
        background: yellow;
        .aws-sld__bullets {
          position: absolute;
          z-index: 2;
          bottom: 20px;
          .aws-sld__bullets--active {
            background: #4ac88d;
          }
          .aws-sld__bullets--loading {
            border: 1px #4ac88d solid;
          }
          .aws-sld__bullets .aws-sld__bullets--active:hover {
            background: #4ac88d;
          }
          button {
            width: 10px;
            height: 10px;
            background: #a9a9a9;
          }
        }
      }
    }
    h2 {
      margin: 0;
    }

    img {
      padding: 0;
    }
  }
`;

export const text2 = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 6vw;
  position: relative;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  margin-top: 2vw;
  @media (max-width: 767px){
    display: block;
    padding: 0;
}
`;

export const test = styled.div`
  input {
    height: 24px;
    font-size: 18px;
  }
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    font-size: 18px;
  }
  #contact-form {
    .container {
      background: red;
    }
  }
`;

export const text3 = styled.div``;

export const techLogoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vw;
`;

export const techLogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 20px;
`;

export const technologies = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  max-width: 1800px;
  margin: 0 auto;
`;

export const technologyItem = styled.div`
  @media (max-width: 1280px) {
    svg {
      width: 160px;
    }
  }
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
  text-align: center;

  ${media.desktop`
    font-size: 24px;
  `}
`;

export const orange = styled.span`
  color: #4ac88d;
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

export const headerText = styled.p`
  color: #242424;
  font-size: 36px;
  margin: 0;
  ${media.desktop`
    font-size: 16px;
    font-weight: bold;
  `}
`;

export const topTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 767px){
    display:block;
  }
`;

export const text1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 767px){
    width: 100%;
  }
`;

export const ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;

  ${media.desktop`
flex-direction: column;
  `}
`;

export const li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 2vw;

  justify-content: center;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  width: 33%;
  margin: 1vw;

  p {
    font-size: 16px;
    margin: 5px 0 15px;
  }
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  ${media.desktop`
    width: 100%;
    box-shadow: unset;
    background-color: transparent;
    padding: 30px 6vw;
    h3 {
      margin-top: unset;
      margin-bottom: unset;
    }
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
  ${media.desktop`
  margin-left: unset;
`}
`;

export const projectListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: auto;

  width: calc(100vw - 70px);
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  padding: 0 35px;
`;

export const splAreasBlocks = styled.div`
  width: 214px;
  margin-right: 20px;
  border: 1px solid rgba(208, 192, 192, 0.5);
  box-shadow: 0px 3px 2px #e1e1e2;
  background: #fff;
  padding: 0px 15px 42px;
`;

export const imgContainer = styled.div`
  padding: 6vw 0;
  ${media.desktop`
  width: 100%;
  `}
  @media (max-width:767px){
    width: 80%;  
    margin: 0 auto;
    display: block;
  }
`;

export const SvgWrapper = styled.div`
  background: red;
`;

export const projectDetails = styled.div`
  display: flex,
  flex-direction: column;
  padding-top: 12%;
  margin: 30px;
  width: 80%;
`;

export const title = styled(h3)``;
export const description = styled(p)``;
export const image = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;
