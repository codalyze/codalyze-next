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
            <Styled.whoweareContent>Codalyze is a tight-knit family of curious and creative storytellers based in sunny Santa Monica. We are open, collaborative, and use our collective experience, design and technical expertise to create meaningful and compelling content for all mediums. We embrace new challenges with an open heart, a hunger to learn, and a passion for solving problems as a team.</Styled.whoweareContent>
        </Styled.whoweare>
        <Styled.whoweareBanner src="/static/images/mobile/about/whoweareMobile.png" />
    </Styled.whoweareContainer>
);

export default WhoWeAre;