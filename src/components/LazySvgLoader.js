import React from 'react';
import styled from "styled-components";

const SvgWrapper = styled.div`
  position: relative;
  height: ${props => props.height}px;
  svg {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export default class LazySvgLoader extends React.Component {
  constructor () {
    super();
    this.state = {
      loaded: false,
      width: 0
    };
  }

  componentDidMount () {
    this.setState({loaded: true});
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    if (window.innerWidth <= 992) {
      this.setState({
        width: window.innerWidth * 0.8
      });
    } else {
      this.setState({
        width: window.innerWidth / 3
      });
    }
  }

  render () {
    const {FirstImage, LazyImage} = this.props;
    return (
      <SvgWrapper height={this.state.width}>
        <FirstImage width={`${this.state.width}px`} />
        {this.state.loaded && <LazyImage width={`${this.state.width}px`} />}
      </SvgWrapper>
    );
  }
}
