import React from "react";
import * as Styled from "./styles";

const ListChallenges = () => (
  <Styled.containerFluid>
    <Styled.numberRow>
      <Styled.h2>01</Styled.h2>
      <Styled.titleSection>
        <Styled.h5>Security</Styled.h5>
        <Styled.p>
          BetKing is an online crypto gambling casino offering sports betting,
          live dealer games and other provably fair casino games like dice and
          roulette. From September 2014 to December 2016, BetKing was the
          biggest crowdfunded Bitcoin gambling site on the market. It was
          relaunched in 2017 after raising around $6.5 million during its ICO
          with more games and sports betting in its product roadmap.
        </Styled.p>
      </Styled.titleSection>
    </Styled.numberRow>
    <Styled.contentSection>
        <Styled.screenshot src="/static/images/betking/bk-security.png" />
    </Styled.contentSection>
  </Styled.containerFluid>
);

export default ListChallenges;
