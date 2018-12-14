import React from "react";
import Header from "../../components/Header";
import HomeBanner from "../../components/HomeBanner";
import { Title } from "../../utils/globalStyles";
import Strategy from "../home/strategy";
import SpecializeIn from "../home/specialize";

const HomePage = () => (
  <div>
    <Header />
    <HomeBanner />
    <Strategy />
    <SpecializeIn />
    {/* <Title>HomePage 1</Title> */}
  </div>
);

export default HomePage;
