import React from "react";
import * as Styled from "./styles";
import Blog from "./blog";
import Footer from "../../components/footer";
import WorkBannerBg from "./images/workBannerBg";
import Head from "next/head";

const Blogs = () => (
  <Styled.containerFluid>
    <Head>
      <title>Codalyze | Clutch leader</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Styled.block>
      <WorkBannerBg width="100%" />
    </Styled.block>
    <Styled.blogContainer>
      <Blog />
    </Styled.blogContainer>
    <Footer />
  </Styled.containerFluid>
);

export default Blogs;
