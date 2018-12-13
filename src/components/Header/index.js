import React from "react";
import Link from "next/link";
import * as Styled from "./styles";

const headerLinks = [
  {
    name: "Work",
    href: "work"
  },
  {
    name: "Services",
    href: "services"
  },
  {
    name: "About",
    href: "about-us"
  },
  {
    name: "Career",
    href: "career"
  },
  {
    name: "Start a project",
    href: "start-a-project"
  }
];

const HeaderLink = ({ href, name }) => (
  <Link href={href} passHref prefetch>
    <Styled.HeaderA>{name}</Styled.HeaderA>
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
        {headerLinks.map((x, index) => {
          return <HeaderLink href={`/${x.href}`} name={x.name} key={index} />;
        })}
      </Styled.Flex>
    </Styled.FlexContainer>
  </Styled.Nav>
);

// export default () => (
//   <div>xx</div>
// )
