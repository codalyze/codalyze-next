import React from "react";
import * as Styled from "./styles";

export default ({title, subTitle, banner}) => (
  <Styled.FlexContainer>
    <Styled.twoBlocks>
      <Styled.mainTitle>
       {title}
      </Styled.mainTitle>
      <Styled.subTitle>
        {subTitle}
      </Styled.subTitle>
    </Styled.twoBlocks>
    <Styled.twoBlocks>
      <Styled.bannerImage src={banner} />
    </Styled.twoBlocks>
  </Styled.FlexContainer>
);
