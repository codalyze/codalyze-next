import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const containerFluid = styled.div`
  ${global.fullRow};
  background: #242424;
`;

export const container = styled.div`
  ${global.mainContainer};
`;

export const footerPages = styled.div``;

export const footerRow = styled.div`
  ${global.fontRobotoLight}
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 65px 0 40px;
  font-size: 20px;
  color: #ffffff;
  ${global.media.desktop`
    font-size: 14px;
    padding: 30px 0;
  `}
`;


export const footerContent = styled.div`
  text-align: right;
`;

export const ul = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const li = styled.li`
  margin: 0 0 25px;
  cursor: pointer;
`;

export const h3 = styled.h3`
  font-weight: 500;
  margin: 0 0 10px;
  font-size: 24px;
  ${global.media.desktop`
    font-size: 16px;
  `}
`;

export const h4 = styled.h4`
  margin: 0 0 30px;
`;

export const contactUs = styled.a`
  text-decoration: none;

`;

export const socialImages = styled.div``;

export const img = styled.img`
  margin: 0 0 10px 15px;
  ${global.media.desktop`
    height: 30px;
  `}
`;
