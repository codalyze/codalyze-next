import React, {PureComponent} from "react";
import Fade from 'react-reveal/Fade';
import * as Styled from './styles';
import HomeBanner from "../../../components/HomeBanner";
import SectionFirstBg from "./images/SectionFirstBg";
import AboutSections from "./aboutSections";
import AboutOtherSections from "./otherSections";
import AboutSecond from "./aboutSecond";
import Footer from "../../../components/footer";

import About1 from '../commons/About1';

import dynamic from 'next/dynamic'

const About2 = dynamic(() => import('../commons/About2'), {loading: () => null});

import LazySvgLoader from '../../../components/LazySvgLoader';


export default class AboutUsDesktop extends PureComponent {
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
                        BannerSvg={() => <LazySvgLoader FirstImage={About1} LazyImage={About2} />}/>
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

