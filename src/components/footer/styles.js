import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const containerFluid = styled.div`
  ${global.fullRow};
  background: #242424;
`;

export const container = styled.div`
  ${global.mainContainer};
`;

export const footerRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 65px 0 40px;
`;

export const footerPages = styled.div`
  color: #ffffff;
`;

export const footerContent = styled.div`
  color: #ffffff;
  text-align: right;
`;

export const ul = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const li = styled.li`
  ${global.fontRobotoLight}
  font-size: 20px;
  margin: 0 0 25px;
  color: #ffffff;
  cursor: pointer;
`;

export const h3 = styled.h3`
  ${global.fontRobotoMedium}
  margin: 0 0 10px;
  font-size: 24px;
  color: #ffffff;
`;

export const h4 = styled.h4`
  ${global.fontRobotoLight}
  margin: 0 0 30px;
  font-size: 20px;
  color: #ffffff;
`;

export const h5 = styled.h5`
  ${global.fontRobotoLight}
  font-size: 20px;
  color: #ffffff;
`;

export const contactUs = styled.a`
  text-decoration: none;
  ${global.fontRobotoLight}
  font-size: 20px;
  color: #ffffff;
`;

export const socialImages = styled.div``;

export const img = styled.img`
  margin: 0 0 10px 15px;
`;
