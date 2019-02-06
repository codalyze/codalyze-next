import React, {Component} from "react";
import * as Styled from './styles';
import HomeBanner from "../../components/HomeBanner";
import SectionFirstBg from "./images/SectionFirstBg";
import AboutSections from "./aboutSections";
import AboutOtherSections from "./otherSections";
import AboutSecond from "./aboutSecond";
import Footer from "../../components/footer";


export default class AboutUs extends Component{
    render(){
        return(
            <Styled.pageWrapper>
                <Styled.sectionFirst>
                <Styled.bannerSvg>
                    <SectionFirstBg width="100%" height="100%" viewBox="700 0 2175.141 2959.327" preserveAspectRatio="none" />
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
                <Styled.otherSections>
                    <AboutOtherSections/>
                </Styled.otherSections>
                <Footer />
            </Styled.pageWrapper>
        );
    }
}

