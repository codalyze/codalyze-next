import React from "react";
import * as Styled from "./styles";

const pageContent = [
  {
    number: "01",
    heading: "Security",
    about:
      "BetKing is an online crypto gambling casino offering sports betting, live dealer games and other provably fair casino games like dice and roulette. From September 2014 to December 2016, BetKing was the  biggest crowdfunded Bitcoin gambling site on the market. It was relaunched in 2017 after raising around $6.5 million during its ICO with more games and sports betting in its product roadmap.",
    img: "/static/images/betking/bk-security.png",
    subHeading: "Strategy",
    content:
      "Prevention against hack: Backend was designed keeping into mind smallest of loopholes which could cause a security breach. Special care was taken to prevent common errors on any apis: sql injection, xss attacks, csrf protection. Every entry into the backend is validated. The site is also made resistant to denial of service attacks."
  },
  {
    number: "02",
    heading: "Webpage Speed",
    about:
      "Since the platform offers games and is essentially a single page application having a number of games, chat etc a lot of JavaScript and CSS gets downloaded on each webpage load. Typically such websites become very slow on their first load because of so much content being downloaded from same server. The challenge was to make the website fast and responsive while not degrading the overall UX for players.",
      img: "/static/images/betking/betSpeed.png",
    subHeading: "Strategy",
    content:
      "We used a number of modern best practices for the web to overcome the speed issue",
    subContent:
      "Code splitting to as to send only those JS / CSS which are just necessary to show a responsive page to users",
    subContent:
      "Progressive Web Application: Using modern PWA techniques to cache image, html resources and api calls offline (which also enables the application to be browsable offline)",
    subContent:
      "By only fetching JS / CSS for heavy sub-applications like chat / modals when user clicks on them",
    subContent:
      "Allow prefetching of other page contents and resources in background so that the overall user experience is not degraded",
    subContent:
      "The above measures led to a score of & gt; 90% for the website on all metrics on Lighthouse audit reports and & gt; 90% on Google Pagespeed."
  },
  {
    number: "03",
    heading: "Bet Speed",
    about:
      "Any online casino is rated on the basis of the betting load it can manage, the number of bets it can allow to be placed per second. A large bet speed means a large number of players to try their luck many times in a second.",
    subHeading: "Strategy",
    img: "/static/images/betking/webPage.png",
    content:
      "Microservice based architecture, efficient cache management while taking care of concurrency issues with transactions made us a achieve a competitive bet speed among online casinos."
  },
  {
    number: "04",
    heading: "Crypto wallets and financial audits:",
    about:
      "On a typical day BetKing sees more than 300,000 bets and transactions of $500,000 worth on platform. It supports 4 crypto currencies with instant deposits and withdrawals. Reporting and audits for high volume transactions is important to keep an eye on any discrepancies / fraudulent practices",
    subHeading: "Strategy",
    img: "/static/images/betking/cryptoWallet.png",
    content:
      "We have a strong reporting admin platform for the application which allows almost anything to be controlled from the admin panel. This platform also houses a reporting tool which shows transaction details at a multi-granular level thus adding a manual level protection for player funds on the platform."
  }
];

const ListChallenges = () => (
  <Styled.containerFluid>
    {pageContent.map((sections, index) => (
      <div key={index}>
        <Styled.numberRow id={index}>
          <Styled.h2>{sections.number}</Styled.h2>
          <Styled.titleSection>
            <Styled.h5>{sections.heading}</Styled.h5>
            <Styled.p>
              {sections.about}
            </Styled.p>
          </Styled.titleSection>
        </Styled.numberRow>
        <Styled.contentSection sectionIndex={index}>
          <Styled.imageBlock>
            <Styled.screenshot src={sections.img} />
          </Styled.imageBlock>
          <Styled.content>
            <Styled.h5>{sections.subHeading}</Styled.h5>
            <Styled.p>
              {sections.content}
            </Styled.p>
          </Styled.content>
        </Styled.contentSection>
      </div>
    ))}
  </Styled.containerFluid>
);

export default ListChallenges;
