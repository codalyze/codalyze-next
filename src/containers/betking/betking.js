import React from "react";
import * as Styled from "./styles";

export default class BetKing extends React.Component {
    render() {
        return(
            <Styled.containerFluid>
                <Styled.container>
                    <Styled.h3>BetKing</Styled.h3>
                </Styled.container>
                <Styled.banner src="/static/images/betking/betKing.png" />
            </Styled.containerFluid>
        )
    }
}
