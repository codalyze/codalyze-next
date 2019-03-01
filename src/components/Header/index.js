import React from "react";
import HeaderDesktop from "./desktop/headerDesktop";
import HeaderMobile from "./mobile/headerMobile";
import PageWrapper from "../../utils/PageWrapper";

const Header = props => {
  return props.mq === "desktop" ? (
    <HeaderDesktop {...props} />
  ) : (
    <HeaderMobile {...props} />
  );
};

export default PageWrapper(Header);
