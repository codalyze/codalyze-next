import React, {Component} from "react";
import * as Styled from './styles';
import HomeBanner from "../../components/HomeBanner";
import AboutBg1 from "./images/aboutBg1";
import AboutSections from "./aboutSections";
import AboutSecond from "./aboutSecondSection";

export default class AboutUs extends Component{
    render(){
        return(
            <Styled.pageWrapper>
                <Styled.sectionFirst>
                <Styled.bannerSvg>
                    <AboutBg1 width="100%" height="100%" viewBox="0 0 3321.641 2959.327"/>
                </Styled.bannerSvg>
                    <HomeBanner
                    title="Meet the team behind it"
                    subTitle="We aid you in achieving a tight deadline and"
                    banner="/static/images/about-us/about1.svg"/>
                    <AboutSections />
                </Styled.sectionFirst>
                <Styled.sectionSecond>
                    <AboutSecond/>
                </Styled.sectionSecond>
            </Styled.pageWrapper>
        );
    }
}

