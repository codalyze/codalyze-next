import React from "react";
import * as Styled from "./styles";
import TestimonialBg from "./images/testimonialBg";
import TestimonialContentBg from "./images/testimonialContentBg";
import {testimonialsList} from '../commons/data';
import LazyLoad from 'react-lazyload';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

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
              <LazyLoad offset={100} once height={350}>
                <Styled.testimonialImage src={t.img || "../static/images/home/testimonial-placeholder.png"} alt={t.heading}/>
              </LazyLoad>
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
