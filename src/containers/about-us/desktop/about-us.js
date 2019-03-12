import React, {Component} from "react";
import Fade from 'react-reveal/Fade';
import * as Styled from './styles';
import HomeBanner from "../../../components/HomeBanner";
import SectionFirstBg from "./images/SectionFirstBg";
import AboutSections from "./aboutSections";
import AboutOtherSections from "./otherSections";
import AboutSecond from "./aboutSecond";
import Footer from "../../../components/footer";


export default class AboutUsDesktop extends Component{
    render(){
        return(
            <Styled.PageWrapper>
                    <Styled.bannerSvg>
                        <SectionFirstBg width="100%" height="100%" viewBox="700 0 2175.141 2959.327" preserveAspectRatio="none" />
                    </Styled.bannerSvg>
                    <HomeBanner
                        title="Meet the"
                        secondryTitle="Team behind it"
                        titleBreak={true}
                        subTitle="We aid you in achieving a tight deadline"
                        banner="/static/images/about-us/about1.svg"/>
                    <Fade>
                        <AboutSections />
                        <AboutSecond/>
                    </Fade>
                    <AboutOtherSections/>
                <Footer />
            </Styled.PageWrapper>
        );
    }
}

