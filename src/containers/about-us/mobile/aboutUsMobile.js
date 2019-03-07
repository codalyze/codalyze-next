import React, {Component, Fragment} from "react";
import * as Styled from './styles';
import Banner from '../../../components/HomeBannerMobile';
import WhoWeAre from './whoWeAre';

export default class AboutUsMobile extends Component{
    render(){
        return(
            <Fragment>
                <Banner 
                    banner="/static/images/mobile/about/aboutUsMobileBanner.svg"
                    title="Meet the"
                    secondryTitle="team behind it"
                    subTitle="We aid you in achieving a tight deadline and help you get to market fast."
                    titleBreak
                />
                <WhoWeAre />
            </Fragment>
        );
    }
}