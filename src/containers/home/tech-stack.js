import React from "react";
import * as Styled from "./styles";

const techLogo = [
  "../static/images/react-js.png",
  "../static/images/elasticsearch.png",
  "../static/images/react-native.png",
  "../static/images/angularjs.png",
  "../static/images/nodejs.png",
  "../static/images/redis.png"
];

export default () => (
    <Styled.techStackRow>
  <Styled.techStack>
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
  </Styled.techStack>
  </Styled.techStackRow>
);
