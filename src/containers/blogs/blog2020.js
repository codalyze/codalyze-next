import React from "react";
import * as Styled from "./styles";
import Link from "next/link";

const StartProject = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.greenBtn>START A PROJECT</Styled.greenBtn>
  </Link>
);

const Blog = () => (
  <Styled.containerFluid>
    <Styled.container>
      <Styled.blogContent>
        <Styled.h4>
          Codalyze Proud to Be Named a Clutch Leader in India a Second Time!
        </Styled.h4>
        <Styled.clutchImage src="/static/images/blogs/b2b.png" />
      </Styled.blogContent>
      <Styled.aboutBg />

      <Styled.p>
        Here at Codalyze Technologies, we know how difficult it can be to
        balance
        <span>
          &nbsp;
          <Styled.a
            href="https://thriveglobal.com/stories/focus-on-these-7-tips-if-you-want-to-thrive-in-your-business/"
            target="_blank"
          >
            successful business operations
          </Styled.a>
        </span>
        &nbsp; with high quality software development efforts. That’s where we
        come into the picture! Based out of Mumbai, we’re a diverse community
        adhering to best practices to deliver stunning web and mobile
        applications for our clientele. We work with companies of all sizes,
        from small startups to huge enterprises, helping them all move to the
        modern web. We use cutting edge JavaScript frameworks, like ReactJS and
        Node.js, to build next generation web applications. Our goal is always
        to deliver a one of a kind user experience.
      </Styled.p>
      <Styled.p>
        In recognition of our success and impact, we’ve been named among the top
        Indian firms for React Native development by Clutch, a verified ratings
        and reviews platform. They leverage a unique ratings methodology to
        identify&nbsp;
        <Styled.a
          href="https://clutch.co/in/developers/react-native/mumbai"
          target="_blank"
        >
          top firms across all industries
        </Styled.a>
        . Clutch’s research helps interested buyers engage with qualified
        vendors for their latest projects.
      </Styled.p>

      <Styled.p>
        We couldn’t have gotten this far without the help of our stunning
        clients. They took time out of their day to engage with Clutch analysts
        to assess our impact on their daily operations. We were evaluated
        according to our quality of service and deliverables, attention to
        project timelines, project management ability, and overall
        cost-efficiency. In recognition of those metrics, we’ve achieved a
        wonderful 4.5 out of five stars so far on Clutch! Take a look at our
        most recent review below:
      </Styled.p>

      <Styled.blogContent>
        <Styled.clutchreviewImage src="/static/images/blogs/clutchreview.png" />
      </Styled.blogContent>
      <Styled.p>
        We’re proud to receive this award and look forward to helping even more
        clients meet their goals with our high-quality solutions.
        <Styled.a href="mailto: mail@codalyze.com"> Drop us a line </Styled.a>
        if you’d like to talk about your next project with Codalyze today!
      </Styled.p>
    </Styled.container>
    {/* <StartProject href={"/start-a-project"} /> */}
  </Styled.containerFluid>
);

export default Blog;
