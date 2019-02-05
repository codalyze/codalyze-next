import React, {Component} from "react";
import HomeBanner from "../../components/HomeBanner";
import * as Styled from "./styles";
import OpportunityBg from "./images/OpportunityBg";


export default class FindOpportunities extends Component {
    render(){
        return(
            <Styled.pageWrapper>
                <Styled.HomeBannerWrap>
                 <HomeBanner
                    title="Find opportunities"         
        />
                </Styled.HomeBannerWrap>
                <Styled.bannerSvg>
                    <OpportunityBg width="100%" height="100%" viewBox="0 0 2770.359 1953.74" preserveAspectRatio="none"/>
                </Styled.bannerSvg>
             </Styled.pageWrapper>
        )
    }
}