import React from "react";

const PageWrapper = Component => {
  class PageWrapperClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        width: "1600",
        mq: props.mq || "desktop"
      };
    }

    componentDidMount() {
      this.setMq();
      window.addEventListener("resize", this.setMq);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.setMq);
    }

    setMq = () => {
      this.setState({
        width: window.innerWidth,
        mq: window.innerWidth < 992 ? "mobile" : "desktop"
      });
    };

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  }

  return PageWrapperClass;
};

export default PageWrapper;
