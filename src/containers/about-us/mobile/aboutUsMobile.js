import React, {Component, Fragment} from "react";
import * as Styled from './styles';
import Banner from '../../../components/HomeBannerMobile';
import WhoWeAre from './whoWeAre';
import AboutComponent from './aboutComponent';
import TeamMobile from './team';

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
                <AboutComponent 
                    headingOne="Optimize"
                    headingTwo="Approach"
                    content="We aid you in achieving a tight deadline and help you get to market fast. We design and develop web and mobile apps for growth-minded companies - both startups and big enterprises."
                    image="/static/images/mobile/about/optimizeMobile.png"
                />
                <AboutComponent 
                    headingOne="High Tech," 
                    headingTwo="Low Risk"
                    content="Building custom software is risky and hard, but there’s a way to stack those odds in your favour. It’s all about the right people and process. We create hands-on partnerships with our clients and share a proven process we’ve honed over successful software projects."
                    image="/static/images/mobile/about/hightechMobile.png"
                />
                <AboutComponent 
                    headingOne="Focused"  
                    headingTwo="Product Teams"
                    content="You’ll be working with a small, dedicated team built to fit the needs of your project. Enjoy deep focus and productive relationships. Partner with us and we'll make your code and team better."
                    image="/static/images/mobile/about/teamMobile.png"
                />
                <AboutComponent 
                    headingOne="We Love"   
                    headingTwo="Start-Ups"
                    contentTwo="We share your passion for changing the world"
                    contentThree="We've helped ideas grow in the past and it feels beautiful"
                    contentFour="If you run a start-up and are looking for a tech partner, please say Hi!"
                    image="/static/images/mobile/about/startupMobile.png"
                    hide
                    multiple
                />
                <TeamMobile />
            </Fragment>
        );
    }
}