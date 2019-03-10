import React from 'react';
import * as Styled from './styles';
import BannerBg from './images/aboutUsBannerBg';

const WhoWeAre = () => (
    <Styled.whoweareContainer>
        <Styled.aboutBannerMobile>
            <BannerBg
                width="100%"
                height="100%"
                viewBox="450 0 370.637 1136.469"
            />
        </Styled.aboutBannerMobile>
        <Styled.whoweare>
            <Styled.whoweareTitle>Who we are</Styled.whoweareTitle>
            <Styled.whoweareContent>
                Based out of Powai, Mumbai, Codalyze is a diverse community of people committed to using modern JavaScript and software development best practices to build beautiful web & mobile applications for our clients.
                We are dedicated to helping startups and enterprises move to the modern web.
            </Styled.whoweareContent>
        </Styled.whoweare>
        <Styled.whoweareBanner src="/static/images/mobile/about/whoweareMobile.png" />
    </Styled.whoweareContainer>
);

export default WhoWeAre;