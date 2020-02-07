import React from "react";
import styled from "styled-components";

const SvgWrapper = styled.div`
  position: relative;
  height: ${props => props.height}px;
  transition: all 500ms ease;
  svg {
    position: absolute;
    ${props => (props.rowReversed ? "left: 0;" : "right: 0;")}
    top: 0;
    transition: all 500ms ease;
  }
`;

export default class LazySvgLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      width: props.isMobile ? 100 : 500
    };
  }

  componentDidMount() {
    this.setState({ loaded: true });
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
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
  };

  render() {
    const { FirstImage, LazyImage, customHeight, isMobile } = this.props;
    return (
      <SvgWrapper
        height={customHeight ? customHeight : this.state.width}
        rowReversed={this.props.rowReversed}
      >
        <FirstImage style={{ width: `${this.state.width}px`, position: isMobile ? 'relative' : 'absolute' }} />
        {!isMobile && this.state.loaded && LazyImage && (
          <LazyImage width={`${this.state.width}px`} />
        )}
      </SvgWrapper>
    );
  }
}
