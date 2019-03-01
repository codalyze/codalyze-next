import React from "react";
import * as Styled from "./styles";
import MobileStarBg from "../desktop/images/specializeStar";

const testimonialsList = [
  {
    img: "../static/images/mobile/home/bryce.jpg",
    heading: "Bryce York",
    subHeading: "CTO and Co-founder, Radframe",
    paragraph:
      "Working with Naisheel and Codalyze has been a great experience. Communication has been great and he’s always been willing to go the extra mile to get things done the way we want them - even when there’s some kind of misunderstanding. We’ve worked with Naisheel for about two years now and we’ll continue to work together going forward."
  },
  {
    img: "../static/images/mobile/home/lucas.jpg",
    heading: "Lucas K Allmon",
    subHeading: "CTO, The Culture List",
    paragraph:
      "Naisheel knows his stuff, is both open to giving and receiving feedback, an collaborating on problems. Communicative and willing to both learn and use expertise. Awesome job!"
  },
  {
    img: "../static/images/mobile/home/yianni-c.jpg",
    heading: "Yianni C",
    subHeading: "CTO, The Culture List",
    paragraph:
      "Best experience I've ever had on upwork. Naisheel is a gem. He is great with communication, does very solid work, and can meet the deadlines. Would DEFINITELY recommend."
  },
  {
    img: "../static/images/mobile/home/melvyn.jpg",
    heading: "Melvyn Kim",
    subHeading: "Founder, Plan XYZ",
    paragraph:
      "Great developers. Only ending this to proceed with more tasks. Looking forward to working with you again!"
  },
  {
    img: "../static/images/mobile/home/testimonial-placeholder.png",
    heading: "Rahul",
    subHeading: "Entrepreneur",
    paragraph:
      "I enjoyed working with him and will likely have additional jobs for him in the future. Will definitely hire him for next phase."
  }
];

const TestimonialMobile = () => (
  <Styled.pageWrapper>
    <Styled.testimonialMobileRow>
      <Styled.clientStarContainerBg>
        <MobileStarBg
          width="100%"
          height="100%"
          viewBox="0 0 421.867 456.583"
        />
      </Styled.clientStarContainerBg>
      <Styled.title>What clients are saying</Styled.title>
      <Styled.testimonialListMob>
        {testimonialsList.map((i, index) => (
          <Styled.testimonialBlockMob key={index}>
            <Styled.testimonialImageMob src={i.img} />
            <Styled.testimonialTitleMob>{i.heading}</Styled.testimonialTitleMob>
            <Styled.testimonialInfoMob>
              {i.subHeading}
            </Styled.testimonialInfoMob>
            <Styled.p>{i.paragraph}</Styled.p>
          </Styled.testimonialBlockMob>
        ))}
      </Styled.testimonialListMob>
    </Styled.testimonialMobileRow>
  </Styled.pageWrapper>
);

export default TestimonialMobile;
