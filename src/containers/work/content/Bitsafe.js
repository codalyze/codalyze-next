import React, { Fragment } from "react";
import * as Styled from "../styles";

const ContentBody = ({ mq }) => (
  <Fragment>
    <Styled.p mq={mq}>
      Over the last few years, several attempts to offer a viable cryptocurrency
      banking option have been created. Usually, all of them copy either fiat
      banking or other banking apps and add just a few new features, but some of
      them try to really offer a new word in cryptocurrency banking, usually by
      crossbreeding great and smooth usability with a set of revolutionary
      features.
    </Styled.p>
    <Styled.p mq={mq}>
      One of such startups on the market is BitSafe, that does exactly that.
      BitSafe’s multicurrency wallet offers a sleek and modern user interface
      with lots of new features that are not presented in other similar wallets.
      Apart from security and usability improvements, there are some new
      functions, such as free cryptocurrency transfers to other BitSafe users,
      contactless payments, instant transactions, shared accounts, and much
      more.
    </Styled.p>
    {/* <a target="_blank" href="https://betking.io">
      BetKing
    </a> */}
  </Fragment>
);

export default ContentBody;
