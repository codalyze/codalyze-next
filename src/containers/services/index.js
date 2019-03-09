import React from "react";
import ServicesDesktop from "./desktop/Services";
import PageWrapper from "../../utils/PageWrapper";

const Services = props => <ServicesDesktop {...props} />;

export default PageWrapper(Services);