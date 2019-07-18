import React from "react";
import * as Styled from "./styles";
import Optimized from "./images/optimized";

const AboutSecond = () => {
  return (
    <>
      <Styled.circleImages>
        <Optimized width="300" height="436.789" viewBox="0 0 448.256 436.789" />
      </Styled.circleImages>
      <Styled.FlexContainer>
        <Styled.devisonDiv>
          <Styled.leftDiv>
            <Styled.h2>Optimize Approach</Styled.h2>
            <Styled.p>
              We make sure you hit those tight deadlines and make it to market
              on time. All our web and mobile apps are developed with growth in
              mind for both startups and big enterprises.
            </Styled.p>
          </Styled.leftDiv>
          <Styled.rightDiv right>
            <img src="/static/images/about-us/Artboard-4.png" />
          </Styled.rightDiv>
        </Styled.devisonDiv>
      </Styled.FlexContainer>
    </>
  );
};

export default AboutSecond;
