import React from "react";
import AboutUsDesktop from "./desktop/about-us";
import AboutUsMobile from "./mobile/aboutUsMobile";
import PageWrapper from "../../utils/PageWrapper";

const AboutUs = props => {
  return props.mq === "desktop" ? (
    <AboutUsDesktop {...props} />
  ) : (
    <AboutUsMobile {...props} />
  );
};

export default PageWrapper(AboutUs);