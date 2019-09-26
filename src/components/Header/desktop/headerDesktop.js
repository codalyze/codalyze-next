import React from "react";
import Link from "next/link";
import * as Styled from "./styles";
import SvgCodalyzeLogo from "../SvgCodalyzeLogo";
import Router from "next/router";

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
  },
  {
    name: "Blogs",
    href: "clutch-leader"
  },
  {
    name: "Contract Staffing",
    href: "contract-staffing"
  }
];

class HeaderLink extends React.Component {
  render() {
    const { href, name, linkRef, active } = this.props;
    return (
      <Link href={href} passHref prefetch>
        <Styled.HeaderA active={active} ref={linkRef}>
          {name}
        </Styled.HeaderA>
      </Link>
    );
  }
}

export default class HeaderDesktop extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      headerTop: 0
    };
    this.navRef = null;
    this.lastScrollTop = 0;
    this.didScroll = false;
    this.timer = null;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    Router.events.on("routeChangeStart", this.handleRouteChangeStart);
    this.timer = window.setInterval(() => {
      if (this.didScroll) {
        this.hasScrolled();
        this.didScroll = false;
      }
    }, 200);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    Router.events.off("routeChangeStart", this.handleRouteChangeStart);
  }

  onScroll = e => {
    this.didScroll = true;
  };

  hasScrolled = () => {
    const st = window.pageYOffset;
    if (!this.navRef) return;
    const navBarHeight = this.navRef.getBoundingClientRect().height;

    if (Math.abs(this.lastScrollTop - st) <= 10) {
      return;
    }

    if (st > this.lastScrollTop && st > navBarHeight) {
      this.setState({ headerTop: -1 * navBarHeight });
    } else {
      const body = document.body;
      const html = document.documentElement;
      const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      if (st + window.innerHeight < documentHeight) {
        this.setState({ headerTop: 0 });
      }
    }

    this.lastScrollTop = st;
  };

  handleRouteChangeStart = () => {
    this.setState({ headerTop: 0 });
  };

  render() {
    const { top, markerWidth: width, left, right, href } = this.props;
    return (
      <Styled.Nav
        headerTop={this.state.headerTop}
        ref={ref => (this.navRef = ref)}
      >
        <Styled.FlexContainer>
          <div>
            <Link href="/" passHref prefetch>
              <Styled.LogoA>
                <SvgCodalyzeLogo width="200px" height="54px" />
              </Styled.LogoA>
            </Link>
          </div>

          <Styled.Flex>
            {headerLinks.map((x, index) => {
              return (
                <HeaderLink
                  href={`/${x.href}`}
                  active={x.href === href}
                  name={x.name}
                  key={index}
                  linkRef={ref => this.props.addRef(x.href, ref)}
                />
              );
            })}
          </Styled.Flex>

          <Styled.Underline {...{ top, width, left, right }} />
        </Styled.FlexContainer>
      </Styled.Nav>
    );
  }
}
