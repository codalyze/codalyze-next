import React from "react";
import * as Styled from './styles';
import Optimized from "./images/optimized";

const AboutSecond = () => {
    return (
        <Styled.commonDiv>
            <Styled.circleImages>
            <Optimized width="300" height="436.789" viewBox="0 0 448.256 436.789"/>
            </Styled.circleImages>
        <Styled.FlexContainer>  
        <Styled.devisonDiv>
            <Styled.leftDiv>
            <Styled.h2>Optimize Approach</Styled.h2> 
            <Styled.para>   
            We aid you in achieving a tight deadline and help you get to market fast. We design and develop web and mobile apps for growth-minded companies - both startups and big enterprises.
                </Styled.para>                                                
            </Styled.leftDiv>
            <Styled.rightDiv right>
            <Styled.imageRight src="/static/images/about-us/Artboard-4.png" />
            </Styled.rightDiv>
        </Styled.devisonDiv> 
    </Styled.FlexContainer>
    </Styled.commonDiv>
    )
}

export default AboutSecond;