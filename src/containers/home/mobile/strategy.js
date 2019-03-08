import React from "react";
import * as Styled from "./styles";

import Link from "next/link";
import {StrategyStats} from '../commons/data';

const ServiceBtn = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.greenBtn>our work</Styled.greenBtn>
  </Link>
);

const Strategy = () => (
  <Styled.contentPadding>
    <Styled.strategyBlockTwo>
      <Styled.title>
        Strategy led solutions for fast moving companies.
      </Styled.title>
      <Styled.p>
        The proof is the pudding. While there isn't a way to eat our interfaces
        (yet), you can sample a large offering of non-perishable case studies.
      </Styled.p>
    </Styled.strategyBlockTwo>

    <Styled.strategyBlockOne>
      {StrategyStats.map((x, id) => {
        return (
          <Styled.strategyStatsBlock key={id}>
            <Styled.strategyStats>
              <Styled.strategyStatsNum>{x.number}</Styled.strategyStatsNum>
              <Styled.strategyStatsTitle>{x.title}</Styled.strategyStatsTitle>
            </Styled.strategyStats>
          </Styled.strategyStatsBlock>
        );
      })}
    </Styled.strategyBlockOne>

    <ServiceBtn href={"/work"} />
  </Styled.contentPadding>
);

export default Strategy;
