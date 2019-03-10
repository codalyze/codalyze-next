import styled from "styled-components";
import * as global from "../../../utils/globalStyles";

export const mobileContainer = styled.div`
  position: relative;
  z-index: 21;
`;

export const mobileNav = styled.div`
  padding: 21px 30px 0 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const mobileHeaderImg = styled.img``;

export const mobileMenuItems = styled.div`
  position: relative;
  padding: 64px 0 0;
`;

export const menuToggleBtn = styled.button`
  background: transparent;
  border: none;
  padding: 0;
`;

export const mobileToggleMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #fff;
  z-index: 88888;
  overflow: auto;
`;

export const ul = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const li = styled.li`
  ${global.fontRobotoLight}
  font-size: 24px;
  margin: 0 0 50px;
  color: #000;
  cursor: pointer;
  text-align: center;
`;

export const mobileMenuStarBg = styled.div`
  position: absolute;
  left: 10px;
  bottom: -100px;
  width: 145px;
  height: 142px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
  }
`;