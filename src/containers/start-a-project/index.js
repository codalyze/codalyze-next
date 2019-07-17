import React from "react";
import StartProjectDesktop from "./desktop/start-project-desktop";
import StartProjectMobile from "./mobile/start-project-mobile";
import PageWrapper from "../../utils/PageWrapper";

const StartAProject = props => {
  return props.mq === "desktop" ? (
    <StartProjectDesktop {...props} />
  ) : (
    <StartProjectMobile {...props} />
  );
};

export default PageWrapper(StartAProject);
