import React from "react";
import * as Styled from "./styles";
import TestimonialBg from "./images/testimonialBg";
import TestimonialContentBg from "./images/testimonialContentBg";

const testimonialsList = [
  {
    img: "",
    heading: "Lucas K Allmon",
    subHeading: "CTO, The Culture List",
    paragraph:
      "Naisheel knows his stuff, is both open to giving and receiving feedback, an collaborating on problems. Communicative and willing to both learn and use expertise. Awesome job!"
  },
  // {
  //   img: "",
  //   heading: "Yianni C",
  //   subHeading: "CTO, The Culture List",
  //   paragraph:
  //     "Best experience I've ever had on upwork. Naisheel is a gem. He is great with communication, does very solid work, and can meet the deadlines. Would DEFINITELY recommend."
  // },
  // {
  //   img: "",
  //   heading: "Melvyn Kim",
  //   subHeading: "Founder, Plan XYZ",
  //   paragraph:
  //     "Great developers. Only ending this to proceed with more tasks. Looking forward to working with you again!"
  // }
];

const Testimonial = () => (
  <Styled.testimonialRow>
    <Styled.testimonialSvg>
      <TestimonialBg
        width="100%"
        height="100%"
        viewBox="0 0 1920.998 1572.001"
      />
    </Styled.testimonialSvg>
    <Styled.FlexContainer>
      <Styled.testimonialTitle>What clients are saying</Styled.testimonialTitle>
      <Styled.testimonialSlide>
        {testimonialsList.map((testBlock, index) => (
          <Styled.testimonialBlock key={index}>
            <Styled.testimonialContentSvg>
              <TestimonialContentBg
                width="100%"
                height="100%"
                viewBox="0 0 1207.318 479.09"
              />
            </Styled.testimonialContentSvg>
            <Styled.testimonialImage src="../static/images/home/testimonial-placeholder.png" />
            <Styled.testimonialHeading>
              {testBlock.heading}
            </Styled.testimonialHeading>
            <Styled.testimonialSubHeading>
              {testBlock.subHeading}
            </Styled.testimonialSubHeading>
            <Styled.testimonialParagraph>
              {testBlock.paragraph}
            </Styled.testimonialParagraph>
          </Styled.testimonialBlock>
        ))}
      </Styled.testimonialSlide>
    </Styled.FlexContainer>
  </Styled.testimonialRow>
);

export default Testimonial;
