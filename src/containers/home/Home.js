import React from "react";
import HomeBanner from "../../components/HomeBanner";
import { Title } from "../../utils/globalStyles";
import Strategy from "../home/strategy";

const HomePage = () => (
  <div>
    <HomeBanner
      title="We are everything IT"
      subTitle="We Help You Ship Ambitious Projects While Avoiding The Risks"
      banner="/static/images/rubik-cube-banner.png"
    />
    <Strategy />
    <Title>HomePage 1</Title>
  </div>
);

export default HomePage;
