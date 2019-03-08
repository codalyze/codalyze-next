import React from "react";
import * as Styled from "./styles";

import Link from "next/link";
import {StrategyStats} from '../commons/data';


const ServiceBtn = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.ourWorkBtn>our work</Styled.ourWorkBtn>
  </Link>
);

const Strategy = () => (
  <Styled.strategyRow>
   
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

      <Styled.strategyBlockTwo>
        <Styled.strategyTitle>
          Strategy led solutions for fast moving companies.
        </Styled.strategyTitle>
        <Styled.strategySubTitle>
          The proof is the pudding. While there isn't a way to eat our
          interfaces (yet), you can sample a large offering of non-perishable
          case studies.
        </Styled.strategySubTitle>
        {/* <ServiceBtn href={"/work"}/> */}
      </Styled.strategyBlockTwo>
   
  </Styled.strategyRow>
)

export default Strategy;
