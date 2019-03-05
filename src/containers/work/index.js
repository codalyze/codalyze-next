import React from "react";
import WorkDesktop from "./desktop/work";
import WorkMobile from "./mobile/workMobile";
import PageWrapper from "../../utils/PageWrapper";

const Work = props => {
  return props.mq === "desktop" ? (
    <WorkDesktop {...props} />
  ) : (
    <WorkMobile {...props} />
  );
};

export default PageWrapper(Work);