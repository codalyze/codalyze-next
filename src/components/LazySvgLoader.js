import React from 'react';
import styled from "styled-components";

const SvgWrapper = styled.div`
  position: relative;
  height: 620px;
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
      loaded: false
    }
  }

  componentDidMount () {
    this.setState({loaded: true});
  }

  render () {
    const {FirstImage, LazyImage} = this.props;
    return (
      <SvgWrapper>
        <FirstImage height="620px"/>
        {this.state.loaded && <LazyImage height="620px" />}
      </SvgWrapper>
    );
  }
}
