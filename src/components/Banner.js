import React from "react";
import BannerDesktop from "./HomeBanner";
import BannerMobile from "./HomeBannerMobile";
import PageWrapper from "../utils/PageWrapper";

const Banner = props => {
  return props.mq === "desktop" ? (
    <BannerDesktop {...props} />
  ) : (
    <BannerMobile {...props} />
  );
};

export default PageWrapper(Banner);
