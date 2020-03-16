import styled from "styled-components";
import * as global from "../../utils/globalStyles";

export const pageWrapper = styled.div``;

export const footerTitle = styled.h1`
  ${global.fontRobotoMedium}
  color: #fff;
  font-size: 15px;
  margin: 0 0 15px;
`;

export const name = styled.div`
  ${global.fontRobotoThin}
  font-size: 15px;
  color: #fff;
  margin: 0 0 7px;
`;

export const ul = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const li = styled.li`
  ${global.fontRobotoLight}
  font-size: 15px;
  color: #fff;
  margin: 0 0 18px;
  cursor: pointer;
`;

export const footerParagraph = styled.p`
  ${global.fontRobotoLight}
  font-size: 15px;
  color: #fff;
  margin: 0 0 18px;
`;

export const footerRowMob = styled.div`
  padding: 80px 53px 60px 35px;
  background: #242424;
`;

export const footerBlockOne = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const footerlinksSocial = styled.div``;

export const footerSocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const footerSocialImg = styled.img`
  margin-right: 18px;
`;

export const footerImgAligned = styled.div`
  width: 30px;
`;

export const footerSocialPage = styled.a`
  ${global.fontRobotoLight}
  font-size: 15px;
  color: #fff;
  margin: 0;
  text-decoration: none;
`;

export const footerBlockTwo = styled.div`
  padding: 80px 60px 0 0;
`;

export const footerConnectBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const footerContact = styled.a`
  ${global.fontRobotoLight}
  font-size: 15px;
  color: #fff;
  margin: 0 0 7px;
  text-decoration: none;
`;
