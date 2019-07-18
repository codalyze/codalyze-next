import React, { Component, Fragment } from "react";
import * as Styled from "./styles";
import Banner from "../../components/Banner";
import WorkBannerBg from "./images/workBannerBg";
import Footer from "../../components/footer";
import Link from "next/link";
import LeftBg from "./images/workBgLeft";
import RightBg from "./images/workBgRight";
import BottomBg from "./images/workBottomBg";
import Star from "./images/star";
import Fade from "react-reveal/Fade";
import {
  Betking,
  Khelomore,
  Radframe,
  Fitcircle,
  LoudCloud,
  Bitsafe
} from "./content";

import Work1 from "./images/Work1";

import dynamic from "next/dynamic";

const Work2 = dynamic(() => import("./images/Work2"), { loading: () => null });

import LazySvgLoader from "../../components/LazySvgLoader";

const ProjectData = [
  {
    pageTitle: "BetKing",
    image: "/static/images/mobile/work/betKingMobile.jpg",
    button: "TAKE A LOOK",
    href: "https://betking.io/",
    content: Betking
  },
  {
    pageTitle: "Bitsafe",
    image: "/static/images/mobile/work/bitsafe.png",
    button: "TAKE A LOOK",
    href: "/#",
    content: Bitsafe
  },
  {
    pageTitle: "LoudCloud",
    image: "/static/images/mobile/work/loudcloud.jpg",
    button: "TAKE A LOOK",
    href: "https://www.bnedloudcloud.com/",
    content: LoudCloud
  },
  {
    pageTitle: "KheloMore",
    image: "/static/images/mobile/work/khelomoreMobile.png",
    button: "TAKE A LOOK",
    href: "https://www.khelomore.com/",
    content: Khelomore
  },
  {
    pageTitle: "Radframe",
    image: "/static/images/mobile/work/radframe.png",
    button: "TAKE A LOOK",
    href: "https://radframe.com/#!/",
    content: Radframe
  }
];

const ProjectBackground = ({ mq, index }) => (
  <Styled.projectBackground index={index}>
    <div className="bg-image">
      {index !== 0 && index % 2 === 1 && (
        <LeftBg width="100%" height="100%" mq={mq} />
      )}
      {index !== 0 && index % 2 === 0 && (
        <RightBg width="100%" height="100%" mq={mq} />
      )}
    </div>
  </Styled.projectBackground>
);

const ProjectImageDesktop = ({ image, index }) => (
  <img
    src={image}
    style={{
      ...{
        position: "absolute",
        top: "50%",
        width: 320
      },
      ...(index % 2 === 0
        ? {
            right: 0,
            transform: "translate(50%, -50%)"
          }
        : {
            position: "absolute",
            left: 0,
            transform: "translate(-50%, -50%)"
          })
    }}
  />
);

const getStarStyleByIndex = index => {
  if ([0, 1, 2].indexOf(index) === -1)
    return {
      display: "none"
    };

  switch (index) {
    case 0:
      return {
        right: 0,
        top: -50
      };
    case 1:
      return {
        left: 0,
        bottom: 50
      };
    case 2:
      return {
        right: 0,
        bottom: 50
      };
  }
};

const Content = ({
  pageTitle,
  content: Content,
  image,
  button,
  href,
  mq,
  index
}) =>
  mq !== "desktop" ? (
    <Fragment>
      <div style={{ position: "relative" }}>
        <ProjectBackground mq={mq} index={index} />
        <Fade>
          <Styled.title mq={mq}>{pageTitle}</Styled.title>
          <Content mq={mq} />
        </Fade>
        {/* <Styled.p mq={mq}>{content}</Styled.p> */}
      </div>
      <Fade>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              zIndex: -1,
              ...getStarStyleByIndex(index)
            }}
          >
            <Star width="30vw" />
          </div>
          <Styled.img src={image} />
        </div>
      </Fade>
      {/* <Link href={href} passHref prefetch> */}
      <Styled.a target="_blank" href={href}>
        <Styled.mobileBtn>{button}</Styled.mobileBtn>
      </Styled.a>
      {/* </Link> */}
    </Fragment>
  ) : (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
        position: "relative"
      }}
    >
      <Fragment>
        <ProjectBackground mq={mq} index={index} />
        <Fade>
          <Styled.projectDesktopContainer mq={mq} index={index}>
            <div
              style={{
                padding: "10vw",
                paddingLeft: index % 2 === 0 ? "10vw" : 150,
                paddingRight: index % 2 === 1 ? "10vw" : 150
              }}
            >
              <Styled.title mq={mq}>{pageTitle}</Styled.title>
              <Content mq={mq} />
              {/* <Styled.p mq={mq}>{content}</Styled.p> */}
              <ProjectImageDesktop mq={mq} index={index} image={image} />

              {/* <Link target="_blank" href={href} passHref prefetch> */}
              <Styled.a target="_blank" href={href}>
                <Styled.workBtn>{button}</Styled.workBtn>
              </Styled.a>
              {/* </Link> */}
            </div>
            {index !== 0 && (
              <div
                style={{
                  position: "absolute",
                  left: index % 2 === 0 ? 100 : "unset",
                  right: index % 2 === 1 ? 100 : "unset",
                  top: -200,
                  zIndex: -1
                }}
              >
                <Star width="15vw" />
              </div>
            )}
          </Styled.projectDesktopContainer>
        </Fade>
      </Fragment>
    </div>
  );

const Project = ({ index, mq, children }) => <Fragment>{children}</Fragment>;

export default class Work extends React.PureComponent {
  render() {
    const props = this.props;
    return (
      <Fragment>
        <div style={{ position: "relative" }}>
          <Styled.bannerContainer {...props}>
            <Styled.workBgContainer>
              <WorkBannerBg width="100%" mq={props.mq} />
            </Styled.workBgContainer>
            <Banner
              BannerSvg={() => (
                <LazySvgLoader
                  FirstImage={Work1}
                  LazyImage={Work2}
                  isMobile={props.mq === "mobile"}
                />
              )}
              title="Puzzles solved"
              secondryTitle="successfully."
              subTitle="Clients we've grown with and ideas we've helped cultivate"
              titleBreak
              {...props}
            />
          </Styled.bannerContainer>
          {ProjectData.map((project, index) => (
            <Styled.pageSection
              index={index}
              mq={props.mq}
              key={project.pageTitle}
            >
              <Project>
                <Content
                  pageTitle={project.pageTitle}
                  content={project.content}
                  image={project.image}
                  button={project.button}
                  href={project.href}
                  index={index}
                  mq={props.mq}
                />
              </Project>
            </Styled.pageSection>
          ))}
          <div
            style={{
              marginTop: 30,
              position: "relative"
            }}
          >
            <BottomBg
              width="100%"
              style={{
                bottom: props.mq === "desktop" ? 350 : 550,
                zIndex: -1
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 150,
                left: "50%",
                transform: "translateX(-50%)"
              }}
            >
              <Link href={"/start-a-project"} passHref prefetch>
                <Styled.specializeBtn>START A PROJECT</Styled.specializeBtn>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}
