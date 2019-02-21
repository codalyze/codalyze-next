import React, { Component } from 'react';
import Carousel from './components/demoCarousel';
import * as Styled from "./styles";
import TestimonialContentBg from "./images/testimonialContentBg";


export default class CarouselPage extends Component {
  render() {
    return (
      <Styled.CarouselPageRow>
        <Carousel
          title="Carousel"
        >
          {this.props.testimonialsList.map((block, index) => (
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
              {block.heading}
            </Styled.testimonialHeading>
            <Styled.testimonialSubHeading>
              {block.subHeading}
            </Styled.testimonialSubHeading>
            <Styled.testimonialParagraph>
              {block.paragraph}
            </Styled.testimonialParagraph>
          </Styled.testimonialBlock>))}
        </Carousel>
      </Styled.CarouselPageRow>
    );
  }
}