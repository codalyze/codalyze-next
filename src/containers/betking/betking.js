import React from "react";
import * as Styled from "./styles";
import About from "./about";
import ListChallenges from "./listChallenges";
import ViewCaseStudy from "./viewCaseStudy";

export default class BetKing extends React.Component {
    render() {
        return(
            <Styled.containerFluid>
                <Styled.container>
                    <Styled.h3>BetKing</Styled.h3>
                </Styled.container>
                <Styled.banner src="/static/images/betking/betKing.png" />
                <About />
                <Styled.h1>Challenges</Styled.h1>
                <ListChallenges />
                <ViewCaseStudy />
            </Styled.containerFluid>
        )
    }
}
