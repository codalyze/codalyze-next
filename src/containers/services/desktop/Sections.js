import React from "react";
import NativePerformance from "./images/NativePerformance";
import BuildForScale from "./images/BuildForScale";
import Document from "./images/Document";
import CodeTest from "./images/CodeTest";
import Link from "next/link";

import Fade from "react-reveal/Fade";

import * as Styled from "./styles";

const StartProject = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.specializeBtn>START A PROJECT</Styled.specializeBtn>
  </Link>
);

const sections = [
  {
    stickyImage: Styled.WebDevImage,
    id: "web-development",
    h2: "Web Development",
    p:
      "We build modern web applications of all shapes and sizes using the latest technologies.",
    lis: [
      {
        heading: "Performance",
        p:
          "Low Page speeds are crucial and affect conversion as well as search engine ranking. Even if data heavy we ensure a quick load time by using best practices",
        image: Styled.PerformanceImage
      },
      {
        heading: "Reusable Components",
        p:
          "Tailored shared components ease future development and reduce technical debt",
        image: Styled.ReusableImage
      },
      {
        heading: "Responsive",
        p:
          "Regardless of screen size or connection speed we strive to serve all you customers",
        image: Styled.ResponsiveImage
      }
    ]
  },
  {
    stickyImage: Styled.MobileAppDevImage,
    id: "mobile-app-development",
    h2: "Mobile App Development",
    isRightAligned: true,
    p:
      "Our unique mobile app development process allows us to rapidly build cross-platform apps at a fraction of the cost. We build mobile apps using React Native , a revolutionary framework built by Facebook in 2015. React Native allows us to build iOS and Android apps using just one code base (instead of two). This reduces the time and cost to build cross-platform apps by 50% or more, without sacrificing speed or quality.",
    lis: [
      {
        heading: "Native Performance",
        p:
          "If anything takes longer than 100ms, the user will feel it. A compelling reason for using React Native instead of WebView-based tools is to achieve 60 frames per second and a native look and feel to your apps.",
        image: NativePerformance
      },
      {
        heading: "Fast development cycles",
        p:
          " It enables an entirely different style of development where you get really quick feedback because of low compile times.",
        image: Styled.FastDevelopmentImage
      },
      {
        heading: "Over the air updates",
        p:
          "React native makes it possible to push over the air updates without requiring users to update the app",
        image: Styled.OverTheAirImage
      }
    ]
  },
  {
    stickyImage: Styled.BackendDevImage,
    id: "backend-development",
    h2: "Backend Development",
    p:
      "We develop bulletproof APIs, sockets, and databases. 100% reliable, scalable, and high-performing.",
    lis: [
      {
        heading: "Built for scale",
        p:
          "Our backend architecture is well designed for specific use-cases, with microservices and event sourcing if required. We use optimized queries, efficient database indexes and build cache driven realtime applications with scale in mind.",
        image: BuildForScale
      },
      {
        heading: "Test Driven Development and Code coverage",
        p:
          "We aim to achieve 95% code coverage through unit and integration tests for all domain logic on the backend",
        image: CodeTest
      },
      {
        heading: "Well Documented APIs",
        p:
          "We believe in writing beautiful code with love. Our code and APIs are documented enough for any developer or user to take over and use them.",
        image: Document
      }
    ]
  }
];

export default () => (
  <React.Fragment>
    {sections.map(section => (
      <Styled.section key={section.id} id={section.id}>
        <Styled.contentsFromLeft isRightAligned={section.isRightAligned}>
          <Styled.WebDevImageContainer isRightAligned={section.isRightAligned}>
            <section.stickyImage
              width="400"
              height="400"
              viewBox="0 0 586 586"
            />
          </Styled.WebDevImageContainer>

          <Styled.h2>{section.h2}</Styled.h2>

          <Styled.p>{section.p}</Styled.p>

          <Styled.ul>
            {section.lis.map(Item => (
              <Fade key={Item.heading}>
                <Styled.li>
                  <Styled.liImage>
                    <Item.image />
                  </Styled.liImage>
                  <Styled.liContent>
                    <Styled.h3>{Item.heading}</Styled.h3>
                    <Styled.p>{Item.p}</Styled.p>
                  </Styled.liContent>
                </Styled.li>
              </Fade>
            ))}
          </Styled.ul>
        </Styled.contentsFromLeft>
        {/* </Styled.StickyContainerDiv> */}
      </Styled.section>
    ))}
    <Styled.ButtonWrapper>
      <StartProject href={"/start-a-project"} />
    </Styled.ButtonWrapper>
  </React.Fragment>
);
