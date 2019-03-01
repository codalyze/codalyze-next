import styled from 'styled-components';
import * as global from '../../../utils/globalStyles';

export const HeaderA = styled(global.A)`
  margin-left: 40px;
  font-size: 20px;
  color: ${props => props.active ? '#4AC88D' : '#000'};
  text-decoration: none;
  &:hover {
    color: #4AC88D;
  }
`;

export const LogoA = styled(global.A)`
  display: block;
`;

export const Nav = styled.nav`
  padding: 20px 6vw 5px;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 12vw);
  z-index: 21;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const Flex = styled.div`
  ${global.flexRow}
`;

export const FlexContainer = styled.div`
  ${global.flexRow}
  ${global.container}
`;

export const Underline = styled.div`
  position: absolute;
  left: ${props => props.left === 'unset' ? 'unset' : `${props.left}px`};
  top: ${props => 30 + props.top}px;
  width: ${props => props.width}px;
  right: ${props => props.right};
  height: 5px;
  border-radius: 2px;
  background-color: #4AC88D;
  transition: all 500ms ease;
`;