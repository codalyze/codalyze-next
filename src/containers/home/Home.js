import React from "react";
import Header from "../../components/Header";
import HomeBanner from "../../components/HomeBanner";
import { Title } from "../../utils/globalStyles";
import Strategy from "../home/strategy";
import SpecializeIn from "../home/specialize";
import Clients from "../home/clients";
import TechStack from "../home/tech-stack";

const HomePage = () => (
  <div>
    <Header />
    <HomeBanner />
    <Strategy />
    <SpecializeIn />
    <Clients />
    <TechStack />
    {/* <Title>HomePage 1</Title> */}
  </div>
);

export default HomePage;
