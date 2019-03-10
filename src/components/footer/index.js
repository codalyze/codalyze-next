import React from "react";
import Link from "next/link";
import * as Styled from "./styles";
import LazyLoad from 'react-lazyload';

const footerLinks = [
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
    name: "Contact",
    href: "#"
  },
  {
    name: "Start a project",
    href: "start-a-project"
  }
];

class FooterLink extends React.Component {
  render() {
    const { href, name, linkRef, active } = this.props;
    return (
      <Link href={href} passHref prefetch>
        <Styled.ul>
          <Styled.li ref={linkRef}>{name}</Styled.li>
        </Styled.ul>
      </Link>
    );
  }
}

export default class Footer extends React.PureComponent {
  render() {
    const { top, width, left, right, href } = this.props;
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.footerRow>
            <Styled.footerPages>
              {footerLinks.map((x, index) => {
                return (
                  <FooterLink
                    href={`/${x.href}`}
                    name={x.name}
                    key={index}
                  />
                );
              })}
            </Styled.footerPages>
            <Styled.footerContent>
              <Styled.h3>Reach Us At :</Styled.h3>
              <Styled.h4>
                Work Square, 1st Floor, Urmi
                <br /> Corporate Park, Near Solaris - D,
                <br /> Opp. L&T Gate - 6, Saki Vihar Road,
                <br /> Chandivali, Mumbai,
                <br /> Maharashtra 400072
              </Styled.h4>
              <Styled.h3>Connect with us</Styled.h3>
              <Styled.socialImages>
                <LazyLoad height={64} offset={100} once>
                  <Styled.img src="/static/images/footer/fb.png" />
                  <Styled.img src="/static/images/footer/instagram.png" />
                  <Styled.img src="/static/images/footer/linkedin.png" />
                  <Styled.img src="/static/images/footer/twitter.png" />
                </LazyLoad>
              </Styled.socialImages>
              <Styled.contactUs href="mailto: mail@codalyze.com">
                mail@codalyze.com
              </Styled.contactUs>
              <br />
              <Styled.contactUs href="telto: +91-9833-692503">
                +91- 9833-692503
              </Styled.contactUs>
            </Styled.footerContent>
          </Styled.footerRow>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}
