import React from "react";
import * as Styled from "./styles";
import Blog from "./blog";
import Footer from "../../components/footer";
import WorkBannerBg from "./images/workBannerBg";

const Blogs = () => (
  <Styled.containerFluid>
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
