import React from "react";
import ServicesDesktop from "./desktop/Services";
import ServicesMobile from "./mobile/servicesMobile";
import PageWrapper from "../../utils/PageWrapper";

const Services = props => {
  return props.mq === "desktop" ? (
    <ServicesDesktop {...props} />
  ) : (
    <ServicesMobile {...props} />
  );
};

export default PageWrapper(Services);