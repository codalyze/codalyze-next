import React from "react";
import * as Styled from "./styles";
import TestimonialBg from "./images/testimonialBg";
import TestimonialContentBg from "./images/testimonialContentBg";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const testimonialsList = [
  {
    img: "/static/images/home/bryce.jpeg",
    heading: "Bryce York",
    subHeading: "CTO and Co-founder, Radframe",
    paragraph:
      "Working with Naisheel and Codalyze has been a great experience. Communication has been great and he’s always been willing to go the extra mile to get things done the way we want them - even when there’s some kind of misunderstanding. We’ve worked with Naisheel for about two years now and we’ll continue to work together going forward."
  },
  {
    img: "/static/images/home/lucas.jpeg",
    heading: "Lucas K Allmon",
    subHeading: "CTO, The Culture List",
    paragraph:
      "Naisheel knows his stuff, is both open to giving and receiving feedback, an collaborating on problems. Communicative and willing to both learn and use expertise. Awesome job!"
  },
  {
    img: "/static/images/home/yianni.jpeg",
    heading: "Yianni C",
    subHeading: "CTO, The Culture List",
    paragraph:
      "Best experience I've ever had on upwork. Naisheel is a gem. He is great with communication, does very solid work, and can meet the deadlines. Would DEFINITELY recommend."
  },
  {
    img: "/static/images/home/melvyn.jpeg",
    heading: "Melvyn Kim",
    subHeading: "Founder, Plan XYZ",
    paragraph:
      "Great developers. Only ending this to proceed with more tasks. Looking forward to working with you again!"
  },
  {
    img: "",
    heading: "Rahul",
    subHeading: "Entrepreneur",
    paragraph:
      "I enjoyed working with him and will likely have additional jobs for him in the future. Will definitely hire him for next phase."
  }
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
    <Styled.testimonialTitle>What our clients are saying</Styled.testimonialTitle>
      <Styled.testimonialSlide>
        <AwesomeSlider>
          {testimonialsList.map(t => (
            <Styled.testimonialBlock key={t.heading}>
              <Styled.testimonialContentSvg>
                <TestimonialContentBg
                  width="100%"
                  height="100%"
                  viewBox="0 0 1207.318 479.09"
                />
              </Styled.testimonialContentSvg>
              <Styled.testimonialImage src={t.img || "../static/images/home/testimonial-placeholder.png"} alt={t.heading}/>
              <Styled.testimonialHeading>{t.heading}</Styled.testimonialHeading>
              <Styled.testimonialSubHeading>{t.subHeading}</Styled.testimonialSubHeading>
              <Styled.testimonialParagraph>{t.paragraph}</Styled.testimonialParagraph>
            </Styled.testimonialBlock>
          ))}
        </AwesomeSlider>
      </Styled.testimonialSlide>
    </Styled.FlexContainer>
  </Styled.testimonialRow>
);

export default Testimonial;
