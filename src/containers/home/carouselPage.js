import React, { Component } from 'react';
import Carousel from './components/demoCarousel';
import * as Styled from "./styles";



export default class CarouselPage extends Component {
  render() {
    return (
      <Styled.CarouselPageRow>
        <Carousel
          title="Carousel"
        >
          <Styled.Item>Item 1</Styled.Item>
          <Styled.Item>Item 2</Styled.Item>
          <Styled.Item>Item 3</Styled.Item>
          <Styled.Item>Item 4</Styled.Item>
        </Carousel>
      </Styled.CarouselPageRow>
    );
  }
}