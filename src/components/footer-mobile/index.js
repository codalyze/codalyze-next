import React from "react";
import Link from "next/link";
import * as Styled from "./styles";
import LazyLoad from "react-lazyload";

const footerPages = [
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
    name: "App Development",
    href: "app-development"
  }
  // {
  //   name: "Contract Staffing",
  //   href: "contract-staffing"
  // }
];

const SocialMediaLinks = [
  // {
  //   name: "FaceBook",
  //   src: "/static/images/footer/mobile/fbMobile.png",
  //   href: "https://www.facebook.com"
  // },
  // {
  //   name: "Instagram",
  //   src: "/static/images/footer/mobile/instagramMobile.png",
  //   href: "https://www.facebook.com"
  // },
  {
    name: "Twitter",
    src: "/static/images/footer/mobile/twitterMobile.png",
    href: "https://twitter.com/codalyze"
  },
  {
    name: "LinkedIn",
    src: "/static/images/footer/mobile/linkedinMobile.png",
    href: "https://in.linkedin.com/company/codalyze-tech"
  }
];

class FooterLinkComponent extends React.Component {
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

export default class FooterMobile extends React.PureComponent {
  render() {
    return (
      <Styled.footerRowMob>
        <Styled.footerBlockOne>
          <Styled.footerlinksSocial>
            <Styled.footerTitle>Navigate:</Styled.footerTitle>
            {footerPages.map((x, index) => {
              return (
                <FooterLinkComponent
                  href={`/${x.href}`}
                  name={x.name}
                  key={index}
                />
              );
            })}
          </Styled.footerlinksSocial>
          <Styled.footerlinksSocial>
            <Styled.footerTitle>Connect With Us</Styled.footerTitle>
            {SocialMediaLinks.map((media, index) => (
              <Styled.footerSocialMedia key={index}>
                <Styled.footerImgAligned>
                  <LazyLoad height={17} offset={100} once>
                    <Styled.footerSocialImg src={media.src} />
                  </LazyLoad>
                </Styled.footerImgAligned>

                <Styled.footerSocialPage href={media.href}>
                  {media.name}
                </Styled.footerSocialPage>
              </Styled.footerSocialMedia>
            ))}
          </Styled.footerlinksSocial>
        </Styled.footerBlockOne>
        <Styled.footerBlockTwo>
          <Styled.footerTitle>Reach Us At</Styled.footerTitle>
          <Styled.footerConnectBlock>
            <Styled.footerContact href="mailto: mail@codalyze.com">
              mail@codalyze.com
            </Styled.footerContact>
            <Styled.name>Gaurav Kumar :&nbsp;
            <Styled.footerContact href="telto: +91-8940-544033">
              +91-8940-544033
            </Styled.footerContact>
            </Styled.name>
          </Styled.footerConnectBlock>
          <Styled.footerParagraph>
            Work Square, 1st Floor, Urmi Corporate Park, Near Solaris - D, Opp.
            L&T Gate - 6, Saki Vihar Road, Chandivali, Mumbai, Maharashtra
            400072
          </Styled.footerParagraph>
        </Styled.footerBlockTwo>
      </Styled.footerRowMob>
    );
  }
}
