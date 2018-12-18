import React from "react";
import * as Styled from "./styles";
import Link from "next/link";

const clientsLogo = [
  "../static/images/b.png",
  "../static/images/fitcircle.png",
  "../static/images/tick.png",
  "../static/images/stashhd.png",

  "../static/images/leaf.png",
  "../static/images/loudcloud.png"
];

const StartProject = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.startaProject>start a project</Styled.startaProject>
  </Link>
);

export default () => (
  <Styled.clientsRow>
    <Styled.FlexContainer>
      <Styled.clientsLogoBlock>
        <Styled.clientTitle>Clients</Styled.clientTitle>
        <Styled.strategyBlockOne>
          {clientsLogo.map((x, id) => {
            return (
              <Styled.strategyStatsBlock>
                <Styled.strategyStats>
                  <img src={x} />
                </Styled.strategyStats>
              </Styled.strategyStatsBlock>
            );
          })}
        </Styled.strategyBlockOne>
      </Styled.clientsLogoBlock>
      <Styled.strategyBlockTwo>
        <Styled.strategyTitle>
          We're just as excited about your idea
        </Styled.strategyTitle>
        <Styled.strategySubTitle>
          You'll be working with a small, dedicated team built to fit the needs
          of your project. Enjoy deep focus and productive relationships.
          Partner with us and we'll make your code and team better.
        </Styled.strategySubTitle>
        <StartProject href={"/start-a-project"} />
      </Styled.strategyBlockTwo>
    </Styled.FlexContainer>
  </Styled.clientsRow>
);
