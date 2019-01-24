import React from "react";
import * as Styled from "./styles";

const techLogo = [
  "../static/images/react-js.svg",
  "../static/images/elasticsearch.svg",
  "../static/images/react-native.svg",
  "../static/images/angularjs.svg",
  "../static/images/nodejs.svg",
  "../static/images/redis.svg"
];

const TechStack = () => (
    <Styled.techStackRow>
  <Styled.techStack>
  <Styled.FlexContainer>
    <Styled.techStackTitle>Our Tech Stack</Styled.techStackTitle>
    <Styled.techStackSubTitle>
      we've had a hand in training many of today's web developers, and always
      seeks to push the bar of
    </Styled.techStackSubTitle>
    <Styled.techLogoRow>
        
            {techLogo.map((x, id) => {
                return (
                    <Styled.techLogoBlock>
                    <img src={x} />
                    </Styled.techLogoBlock>
                )
            })}
        
    </Styled.techLogoRow>
    </Styled.FlexContainer>
  </Styled.techStack>
  </Styled.techStackRow>
);

export default TechStack;
