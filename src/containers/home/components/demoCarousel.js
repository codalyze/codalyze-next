import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Styled from "../styles";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      sliding: false,
      move: 0
    };
  }

  getOrder(itemIndex) {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  }

  nextSlide = slideNum => {
    console.log("Hello", this.state.position);
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    this.setState(
      {
        position: position === numItems - 1 ? 0 : position + 1
      },
      () => this.doSliding(this.state.position)
    );
  };

  //   previousSlide = () => {
  //     console.log("Hello", this.state.position);
  //   const { position } = this.state
  //   const { children } = this.props
  //   const numItems = children.length || 1
  //   this.setState({
  //     position: position === numItems - 1 ? 0 : position - 1
  //   }, () => this.doSliding(this.state.position))
  // }

  doSliding = position => {
    this.setState({
      sliding: true,
      position
    });
    setTimeout(() => {
      this.setState({
        sliding: false
      });
    }, 50);
  };

  render() {
    const { title, children } = this.props;

    return (
      <Styled.CarouselRow>
        <Styled.Wrapper>
          <Styled.CarouselContainer sliding={this.state.sliding}>
            {children.map((child, index) => (
              <Styled.CarouselSlot key={index} order={this.getOrder(index)}>
                {child}
              </Styled.CarouselSlot>
            ))}
          </Styled.CarouselContainer>
          <Styled.testimonialSlideBtn>
            <Styled.CarouselBtn onClick={() => this.nextSlide(0)} />
            <Styled.CarouselBtn onClick={() => this.nextSlide(1)} />
            <Styled.CarouselBtn onClick={() => this.nextSlide(2)} />
          </Styled.testimonialSlideBtn>
        </Styled.Wrapper>
      </Styled.CarouselRow>
    );
  }
}
Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Carousel;
