import styled from "styled-components";
import * as global from "./../../utils/globalStyles";
import { media } from "../../utils/globalStyles";

export const mainContainer = styled.div``;

export const formContainer = styled.div`
  display: flex;
  margin-top: 110px;
  flex-wrap: nowrap;
  padding: 6vw;
  ${media.desktop`
margin-top: 0;
flex-wrap: wrap;
padding: 0 35px;
`}
`;

export const outerContainer = styled.div`
  padding: 6vw;
  ${media.desktop`
padding: 0 35px;`}
`;

export const techLogoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
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
  padding: 80px 6vw 125px;
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
  ${media.desktop`
    font-size: 24px;
  `}
`;

export const orange = styled.span`
  color: #ef543d;
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
  flex-direction: column;
  margin-top: 20px;
`;

export const ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  width: 70%;
  padding: 0;

  ${media.desktop`
flex-direction: column;
  `}
`;

export const li = styled.li`
  margin: 30px 0;
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 10px 5% 10px 2%;
  width: 100%;
  margin-left: 6%;
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
  width: 65%;
  margin: 0 auto;
  position: relative;
  padding: 2vw 0 0 0;
  height: 10%;
  ${media.desktop`
  width: 100%;
  `}
`;

// export const projectContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `;



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

;
`