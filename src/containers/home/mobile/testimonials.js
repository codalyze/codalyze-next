import React from "react";
import * as Styled from "./styles";

const testimonialsList = [
  {
    img: "",
    heading: "Lucas K Allmon",
    subHeading: "CTO, The Culture List",
    paragraph:
      "Naisheel knows his stuff, is both open to giving and receiving feedback, an collaborating on problems. Communicative and willing to both learn and use expertise. Awesome job!"
  },
  {
    img: "",
    heading: "Yianni C",
    subHeading: "CTO, The Culture List",
    paragraph:
      "Best experience I've ever had on upwork. Naisheel is a gem. He is great with communication, does very solid work, and can meet the deadlines. Would DEFINITELY recommend."
  },
  {
    img: "",
    heading: "Melvyn Kim",
    subHeading: "Founder, Plan XYZ",
    paragraph:
      "Great developers. Only ending this to proceed with more tasks. Looking forward to working with you again!"
  }
];

const TestimonialMobile = () => (
  <Styled.pageWrapper>
    <Styled.testimonialMobileRow>
      <Styled.title>What clients are saying</Styled.title>
      <Styled.testimonialListMob>
        {testimonialsList.map((i, index) => (
          <Styled.testimonialBlockMob key={index}>
            <Styled.testimonialImageMob src="../static/images/mobile/home/mobileapps.svg" />
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
