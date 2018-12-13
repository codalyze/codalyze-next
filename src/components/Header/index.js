import React from 'react';
import Link from 'next/link';
import * as Styled from './styles';

const headerLinks = [{
}];

const HeaderLink = ({href, name}) => (
  <Link href={href} passHref prefetch>
    <Styled.HeaderA>
      {name}
    </Styled.HeaderA>
  </Link>
);

export default () => (
  <Styled.Nav>
    <Styled.FlexContainer>
      <div>
        <Link href="/" passHref prefetch>
          <Styled.LogoA>
            <img src="/static/images/logo.png" />
          </Styled.LogoA>
        </Link>
      </div>

      <Styled.Flex>
        <HeaderLink href="/work" name="Work" />
        <HeaderLink href="/services" name="Services" />
        <HeaderLink href="/about-us" name="About" />
        <HeaderLink href="/career" name="Career" />
        <HeaderLink href="/start-a-project" name="Start a project" />
      </Styled.Flex>
    </Styled.FlexContainer>
  </Styled.Nav>
);

// export default () => (
//   <div>xx</div>
// )
