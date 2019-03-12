import React, { Fragment } from "react";
import * as Styled from "../styles";

const ContentBody = ({ mq }) => (
  <Fragment>
    <Styled.p mq={mq}>
      BetKing from September 2014 to December 2016 was the biggest crowdfunded
      Bitcoin gambling site on the market. In that short period it made 7,391
      Bitcoins in profit and had the biggest crowdfunded bankroll of 6,000
      Bitcoins.
    </Styled.p>
    <Styled.p mq={mq}>
      At the end of 2016 BetKing was taken offline while Dean was planning
      something bigger – he wanted to expand from the #1 dice site to the #1
      gambling site. BetKing was launched again on 4th September 2017, after
      raising around $6.4 million during its ICO with more games and sports
      betting in its product roadmap.
      </Styled.p>
    <Styled.p mq={mq}>
      We were involved from the initial stages during the development of the
      dice game. Also provided a quick turnaround time for launching the ICO.
      Excited to be involved post-launch on the way to develop the #1 gambling
      site.
    </Styled.p>
    {/* <a target="_blank" href="https://betking.io">
      BetKing
    </a> */}
  </Fragment>
);

export default ContentBody;
