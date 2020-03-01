import React from "react";
import Link from "next/link";
import * as Styled from "./styles";
import MobileMenuStar from "./images/specializeStar";
import CodalyzeLogo from "../SvgCodalyzeLogo";
import MenuToggle from "./images/MenuToggle";

const HeaderLinkList = [
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
  },
  {
    name: "Blogs",
    href: "clutch-leader"
  },
  {
    name: "Contract Staffing",
    href: "contract-staffing"
  },
  {
    name: "App Development",
    href: "app-development"
  }
];

const ToggleMenu = ({ href, addRef, toggleMenuState }) => {
  return (
    <Styled.mobileToggleMenu>
      <Styled.mobileNav>
        <Link href="/" passHref prefetch>
          <CodalyzeLogo width="125px" />
        </Link>
        <Styled.menuToggleBtn onClick={toggleMenuState}>
          <MenuToggle width="50px" />
        </Styled.menuToggleBtn>
      </Styled.mobileNav>
      <Styled.mobileMenuItems>
        {HeaderLinkList.map((x, index) => {
          return (
            <HeaderLinkMobile
              href={`/${x.href}`}
              active={x.href === href}
              name={x.name}
              key={index}
              linkRef={ref => addRef(x.href, ref)}
              toggleMenuState={toggleMenuState}
            />
          );
        })}
        <Styled.mobileMenuStarBg>
          <MobileMenuStar
            width="100%"
            height="100%"
            viewBox="0 0 421.867 456.583"
          />
        </Styled.mobileMenuStarBg>
      </Styled.mobileMenuItems>
    </Styled.mobileToggleMenu>
  );
};

class HeaderLinkMobile extends React.Component {
  render() {
    const { href, name, linkRef, active, toggleMenuState } = this.props;
    return (
      <Link href={href} passHref prefetch>
        <Styled.ul>
          <Styled.li onClick={toggleMenuState} ref={linkRef}>
            {name}
          </Styled.li>
        </Styled.ul>
      </Link>
    );
  }
}

export default class HeaderMobile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleMenuState = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { href, addRef } = this.props;
    return (
      <Styled.mobileContainer>
        <Styled.mobileNav>
          <Link href="/" passHref prefetch>
            <CodalyzeLogo width="125px" />
          </Link>
          <Styled.menuToggleBtn onClick={this.toggleMenuState}>
            <MenuToggle width="50px" />
          </Styled.menuToggleBtn>
          {this.state.isOpen ? (
            <ToggleMenu
              toggleMenuState={this.toggleMenuState}
              href={href}
              addRef={addRef}
            />
          ) : null}
        </Styled.mobileNav>
      </Styled.mobileContainer>
    );
  }
}
