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

const ProjectData = [
  {
    pageTitle: "BetKing",
    content:
      "BetKing is one of the most trusted online crypto casino and exchange (raised $6.5 million in ICO)",
    image: "/static/images/mobile/work/betKingMobile.png",
    button: "VIEW CASE STUDY",
    href: "/#"
  },
  {
    pageTitle: "Fitcircle",
    content:
      "App for fitness: chat bot and e-commerce",
    image: "/static/images/mobile/work/fitcircleMobile.png",
    button: "VIEW CASE STUDY",
    href: "/#"
  },
  {
    pageTitle: "KheloMore",
    content:
      "Founded by former Indian cricketer, athelete and Sports Managing Head for Nike, Jatin Paranjape, KheloMore is a digital platform bringing together young atheletes and coaches / academies online for an exceptional performance off-line.",
    image: "/static/images/mobile/work/khelomoreMobile.png",
    button: "VIEW CASE STUDY",
    href: "/#"
  },
  {
    pageTitle: "Radframe",
    content:
      "RadFrame assembles easy-to-apply roadmaps of world-leading innovation practices, tailored to each project’s unique needs. It provides a repeatable and proven approach to swiftly navigate the uncertainty of innovation and deliver and track results across a portfolio of activities",
    image: "/static/images/mobile/work/radframe.png",
    button: "VIEW CASE STUDY",
    href: "/#"
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
        top: "50%"
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

const Content = ({ pageTitle, content, image, button, href, mq, index }) =>
  mq !== "desktop" ? (
    <Fragment>
      <div style={{ position: "relative" }}>
        <ProjectBackground mq={mq} index={index} />
        <Styled.title mq={mq}>{pageTitle}</Styled.title>
        <Styled.p mq={mq}>{content}</Styled.p>
      </div>
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
      {/* <Link href={href} passHref prefetch>
        <Styled.btn>{button}</Styled.btn>
      </Link> */}
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
        <Styled.projectDesktopContainer mq={mq} index={index}>
          <div style={{ padding: "10vw" }}>
            <Styled.title mq={mq}>{pageTitle}</Styled.title>
            <Styled.p mq={mq}>{content}</Styled.p>
            <ProjectImageDesktop mq={mq} index={index} image={image} />
            {/* <Link href={href} passHref prefetch>
              <Styled.btn>{button}</Styled.btn>
            </Link> */}
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
              <Star width="15vw"/>
            </div>
          )}
        </Styled.projectDesktopContainer>
      </Fragment>
    </div>
  );

const Project = ({ index, mq, children }) => <Fragment>{children}</Fragment>;

const Work = props => (
  <Fragment>
    <div style={{ position: "relative" }}>
      <Styled.bannerContainer {...props}>
        <Styled.workBgContainer>
          <WorkBannerBg width="100%" mq={props.mq} />
        </Styled.workBgContainer>
        <Styled.bannerContents>
          <Banner
            banner="/static/images/mobile/work/workMobileBanner.png"
            title="Puzzles solved"
            secondryTitle="into success."
            subTitle="Our clients and ventures. Ideas we have helped to grow"
            titleBreak
            {...props}
          />
        </Styled.bannerContents>
      </Styled.bannerContainer>
      {ProjectData.map((project, index) => (
        <Styled.pageSection index={index} mq={props.mq} key={project.pageTitle}>
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
      <BottomBg
        width="100%"
        style={{
          position: "absolute",
          bottom: props.mq === "desktop" ? 350 : 550,
          zIndex: -1
        }}
      />
      <Footer mq={props.mq} />
    </div>
  </Fragment>
);

export default Work;
