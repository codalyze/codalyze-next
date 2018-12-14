import styled from 'styled-components';
import * as global from '../../utils/globalStyles';

export const HeaderA = styled(global.A)`
  margin-left: 40px;
  font-size: 20px;
  color: #000;
  text-decoration: none;
`;

export const LogoA = styled(global.A)`
  display: block;
`;

export const Nav = styled.nav`
  margin: 20px 0 0;
`;

export const Flex = styled.div`
  ${global.flexRow}
`;

export const FlexContainer = styled.div`
  ${global.flexRow}
  ${global.container}
`;

