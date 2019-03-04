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
 
class HeaderLink extends React.Component {
  render () {
    const { href, name, linkRef, active } = this.props;
    return (
      <Link href={href} passHref prefetch>
        <Styled.HeaderA active={active} ref={linkRef}>{name}</Styled.HeaderA>
      </Link>
    );
  }
}

export default class HeaderDesktop extends React.PureComponent {  
  render () {
    const {top, width, left, right, href} = this.props;
    console.log(this.props);
    return (
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
              return <HeaderLink href={`/${x.href}`} active={x.href === href} name={x.name} key={index} linkRef={ref => this.props.addRef(x.href, ref)} />;
            })}
          </Styled.Flex>

          <Styled.Underline {...{top, width, left, right}} />
        </Styled.FlexContainer>
      </Styled.Nav>
    );
  }
}
