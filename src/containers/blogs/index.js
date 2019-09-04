import React from "react";
import * as Styled from "./styles";
import Blog from "./blog";
import Footer from "../../components/footer";
import WorkBannerBg from "./images/workBannerBg";

const Blogs = () => (
  <Styled.containerFluid>
    {/* <Styled.container>
      <Styled.h3>Blogs</Styled.h3>
    </Styled.container> */}
    <Styled.block>
    <WorkBannerBg width="100%" />
    </Styled.block>
    
    <Styled.blogContainer>
      
      <Blog />
    </Styled.blogContainer>
    {/* <Styled.h1>Challenges</Styled.h1>
    <ListChallenges />
    <ViewCaseStudy /> */}
    <Footer />
  </Styled.containerFluid>
);

export default Blogs;
