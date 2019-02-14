import React from "react";
import * as Styled from "./styles";

const About = () => (
    <Styled.containerFluid>
        <Styled.container>
            <Styled.aboutBg />
            <Styled.aboutBetking>
                <Styled.h4>About BetKing</Styled.h4>
                <Styled.h6>BetKing is an online crypto gambling casino offering sports betting, live dealer games and other provably fair casino games like dice and roulette. From September 2014 to December 2016, BetKing was the biggest crowdfunded Bitcoin gambling site on the market. It was relaunched in 2017 after raising around $6.5 million during its ICO with more games and sports betting in its product roadmap.</Styled.h6>
            </Styled.aboutBetking>
            <Styled.weDid>
                <Styled.h4>What we did?</Styled.h4>
                <Styled.h6>We are the development team behind BetKing. We have been working with their founder to develop the whole application from ground up and have been maintaining the platform, providing support on the go. The main applications built around BetKing were their main website hosting several games, sports betting and live dealer platforms; an admin website; infrastructure management for the application; their subsidiary applications like ICO website and dashboard, admin apps etc.</Styled.h6>
            </Styled.weDid>
        </Styled.container>
    </Styled.containerFluid>
)

export default About;