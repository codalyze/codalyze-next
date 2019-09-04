import React from "react";
import * as Styled from "./styles";

// import LeftBg from "../images/workBgLeft";

const Blog = () => (
  <Styled.containerFluid>
    <Styled.container>
      <Styled.blogContent>
        <Styled.h4>Codalyze Technologies Named a 2019 Clutch Leader!</Styled.h4>
        <Styled.clutchImage src="/static/images/blogs/blog.png" />
      </Styled.blogContent>
      <Styled.aboutBg />
      
      <Styled.p>
        Our team at Codalyze delivers tailored programming solutions to
        enterprises and start-ups that helps them establish a distinctive
        presence on the internet through our mobile app and web development
        services. Our unique approach to examining our clients’ day-to-day needs
        and our commitment to seeing them through ambitious projects is what
        fuels our stellar performance.
      </Styled.p>
      <Styled.p>
        With Codalyze, high tech is low risk. Building a custom software can
        seem daunting and difficult, but our use of Agile and our small,
        hyper-focused team makes it easy. We aid you in achieving a tight
        deadline and help you get to market fast. We specialize in web and
        back-end development along with mobile app development. Our ability to
        identify problems and deliver
        <span>&nbsp;
          <a
            href="https://www.forbes.com/sites/kateharrison/2018/12/21/6-ways-to-improve-your-website-design-to-boost-sales/"
            target="_blank"
          >
            quality solutions
          </a>&nbsp;
        </span>
        has caught the eye of Clutch, a B2B ratings and reviews company based in
        the heart of Washington DC.
      </Styled.p>

      <Styled.p>
        Clutch ranks a ton of businesses across a variety of sectors based on
        their market presence, technical capabilities, and client reviews and
        we’ve been featured as a leader among the top
        <span>&nbsp;<a href="https://clutch.co/in/web-developers/mumbai" target="_blank">
            web developers in Mumbai
          </a>&nbsp;</span>
        . This is exciting and nerve-wrecking at the same time as the bar for
        our performance has now been raised two notches owing to the feature!
      </Styled.p>
      <Styled.p>
        We’ve also made an appearance on both of their sister websites- The
        Manifest (provides business news and other metrics to aid businesses
        find partners) and Visual Objects (a platform for creative agencies to
        publish their portfolios). We are listed among the leading
        <span>&nbsp;
          <a
            href="https://themanifest.com/in/app-development/companies/mumbai"
            target="_blank"
          >
            mobile app developers in Mumbai
          </a>&nbsp;
        </span>
        on The Manifest and among the top
        <span>&nbsp;
          <a
            href="https://visualobjects.com/app-development/top-mobile-app-development-companies"
            target="_blank"
          >
            mobile app developers
          </a>&nbsp;
        </span>
        , showcasing our profile and portfolio items on Visual Objects.
      </Styled.p>
      <Styled.p>
        Partnering with Codalyze relieves you of stressing about product
        development, design and project management. We also outsource our
        developers and analysts. They will be managed by your project management
        team and can work from your office or ours.
      </Styled.p>
      <Styled.p>
        Overall, we are excited to be named a Clutch leader! Our success is
        attributed largely to our amazing clients and their faith in us. Without
        them, we would not have been as successful as we are today. We look
        forward to lengthening the trail of our successes. After all, the sky is
        the limit!
      </Styled.p>
    </Styled.container>
  </Styled.containerFluid>
);

export default Blog;
