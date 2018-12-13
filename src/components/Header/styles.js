import styled from 'styled-components';
import * as global from '../../utils/globalStyles';

export const HeaderA = styled(global.A)`
  margin-left: 20px;
`;

export const LogoA = styled(global.A)`
  display: block;
`;

export const Nav = styled.nav`

`;

export const Flex = styled.div`
  ${global.flexRow}
`;

export const FlexContainer = styled.div`
  ${global.flexRow}
  ${global.container}
`;
