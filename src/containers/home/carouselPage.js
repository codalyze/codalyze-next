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
          <Styled.Item>Item</Styled.Item>
          <Styled.Item>Item</Styled.Item>
          <Styled.Item>Item</Styled.Item>
          <Styled.Item>Item</Styled.Item>
        </Carousel>
      </Styled.CarouselPageRow>
    );
  }
}