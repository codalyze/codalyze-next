import React, {Component} from "react";
import * as Styled from './styles';

const AboutSections = () => {
    return(
        <Styled.mainDiv>
        <Styled.FlexContainer>
            <Styled.whoeWe>Who we are</Styled.whoeWe>           
                <Styled.aboutText>
                    Codalyze is a tight-knit family of curious and creative storytellers based in sunny Santa Monica. We are open, collaborative, and use our collective experience, design and technical expertise to create meaningful and compelling content for all mediums. We embrace new challenges with an open heart, a hunger to learn, and a passion for solving problems as a team.
            </Styled.aboutText>            
        </Styled.FlexContainer>
            <Styled.FirstSecImage>
                    <Styled.secOneImg src="/static/images/about-us/codalyze-aboutUs.png" />
            </Styled.FirstSecImage>
            
        </Styled.mainDiv>
    )
}

export default AboutSections;

