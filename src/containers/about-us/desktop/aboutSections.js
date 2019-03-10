import React, {Component} from "react";
import * as Styled from './styles';

const AboutSections = () => {
    return(
        <Styled.mainDiv>
            <Styled.FlexContainer>
                <Styled.whoeWe>Who we are</Styled.whoeWe>
                    <Styled.aboutText>
                        Based out of Powai, Mumbai, Codalyze is a diverse community of people committed to using modern JavaScript and software development best practices to build beautiful web & mobile applications for our clients.
                        We are dedicated to helping startups and enterprises move to the modern web.
                </Styled.aboutText>
            </Styled.FlexContainer>
        </Styled.mainDiv>
    )
}

export default AboutSections;

