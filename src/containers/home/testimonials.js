import React from "react";
import * as Styled from "./styles";
import TestimonialBg from '../../static/images/testimonialBg';
import TestimonialContentBg from '../../static/images/testimonialContentBg';


const Testimonial = () => (
  <Styled.testimonialRow>
    <Styled.testimonialSvg>
          <TestimonialBg width="100%" height="100%" viewBox="0 0 1920.998 1572.001"/>
        </Styled.testimonialSvg>
    <Styled.FlexContainer>
      <Styled.testimonialTitle>What clients are saying</Styled.testimonialTitle>
      <Styled.testimonialBlock>
      <Styled.testimonialContentSvg>
          <TestimonialContentBg width="100%" height="100%" viewBox="0 0 1207.318 479.09"/>
        </Styled.testimonialContentSvg>
        <Styled.testimonialImage src="../static/images/testimonial-placeholder.png" />
        <Styled.testimonialHeading>Bryce York</Styled.testimonialHeading>
        <Styled.testimonialSubHeading>
          CTO and Co-founder, RadFrame
        </Styled.testimonialSubHeading>
        <Styled.testimonialParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Styled.testimonialParagraph>
      </Styled.testimonialBlock>
    </Styled.FlexContainer>
  </Styled.testimonialRow>
);

export default Testimonial;
