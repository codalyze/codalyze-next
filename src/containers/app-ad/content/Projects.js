import React from "react";
import * as Styled from "../styles";
import Link from "next/link";
import LazyLoad from "react-lazyload";

const StartProject = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.reviewsProject>START A PROJECT</Styled.reviewsProject>
  </Link>
);

const KMReview = ({ showOnSmallScreen }) => (
  <a
    href="https://play.google.com/store/apps/details?id=com.khelomore.player"
    style={{ textDecoration: "none", display: "flex" }}
  >
    <Styled.reviewSingle showOnSmallScreen={showOnSmallScreen}>
      <LazyLoad height={214} once offset={100}>
        <Styled.instaremImage>
          <Styled.reviewImage src="/static/images/app-ads/khelomore.png" />
        </Styled.instaremImage>
      </LazyLoad>
      <Styled.reviewImageTitle>KheloMore</Styled.reviewImageTitle>
      <Styled.reviewImageContent>
        Founded by former Indian cricketer, athelete and Sports Managing Head
        for Nike, Jatin Paranjape, KheloMore is a digital platform bringing
        together young atheletes and coaches / academies online for an
        exceptional performance off-line.
      </Styled.reviewImageContent>
    </Styled.reviewSingle>
  </a>
);

const Reviews = () => (
  <Styled.reviewsRow>
    <Styled.FlexContainer>
      <Styled.reviewsSection>
        {/* <Styled.reviewsTitle>

        </Styled.reviewsTitle> */}
        <Styled.reviewsSubTitle>
          We have worked with some amazing founders and startups. Deep focus and
          productive relationships is something we cherish. Partner with us and
          experience a difference.
        </Styled.reviewsSubTitle>

        <Styled.reviewsBlock>
          <Styled.reviewImageBlocks
            style={{
              display: "flex",
              flexFlow: "wrap",
              justifyContent: "center"
            }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.instarem.mobileapp"
              style={{ textDecoration: "none", display: "flex" }}
            >
              <Styled.reviewSingle>
                <LazyLoad height={214} once offset={100}>
                  <Styled.instaremImage>
                    <Styled.reviewImage
                      src="/static/images/app-ads/instarem.jpg"
                      height={240}
                    />
                  </Styled.instaremImage>
                </LazyLoad>

                <Styled.reviewImageTitle>InstaRem</Styled.reviewImageTitle>
                <Styled.reviewImageContent>
                  Instarem is a money transfers app for customer onboarding
                  which supports 55+ countries.
                </Styled.reviewImageContent>
              </Styled.reviewSingle>
            </a>

            <Styled.reviewSingle>
              <LazyLoad height={214} once offset={100}>
                <Styled.instaremImage>
                  <Styled.reviewImage src="/static/images/app-ads/fitcircle.png" />
                </Styled.instaremImage>
              </LazyLoad>
              <Styled.reviewImageTitle>FitCircle</Styled.reviewImageTitle>
              <Styled.reviewImageContent>
                FitCircle arranges community-based fitness programmes for
                individuals and corporate groups. It allows users to chat with
                nutritionists and health experts and members can avail the
                services at various locations across Mumbai.
              </Styled.reviewImageContent>
            </Styled.reviewSingle>
            <a
              href="https://play.google.com/store/apps/details?id=org.hpcricket.app"
              style={{ textDecoration: "none", display: "flex" }}
            >
              <Styled.reviewSingle>
                <LazyLoad height={214} once offset={100}>
                  <Styled.instaremImage>
                    <Styled.reviewImage
                      src="/static/images/app-ads/hpca.png"
                      width={324}
                      height={240}
                    />
                  </Styled.instaremImage>
                </LazyLoad>
                <Styled.reviewImageTitle>HPCA</Styled.reviewImageTitle>
                <Styled.reviewImageContent>
                  HPCA App is your destination to follow all district and state
                  level cricket at Himachal Pradesh Cricket Association
                </Styled.reviewImageContent>
              </Styled.reviewSingle>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.khelomore.mssa"
              style={{ textDecoration: "none", display: "flex" }}
            >
              <Styled.reviewSingle>
                <LazyLoad height={214} once offset={100}>
                  <Styled.instaremImage>
                    <Styled.reviewImage
                      src="/static/images/app-ads/mssa.png"
                      width={324}
                      height={240}
                    />
                  </Styled.instaremImage>
                </LazyLoad>
                <Styled.reviewImageTitle>MSSA</Styled.reviewImageTitle>
                <Styled.reviewImageContent>
                  MSSA App is your destination to follow all district and state
                  level cricket at Himachal Pradesh Cricket Association
                </Styled.reviewImageContent>
              </Styled.reviewSingle>
            </a>
            <KMReview />
            <a
              href="https://play.google.com/store/apps/details?id=com.citymall.app"
              style={{ textDecoration: "none", display: "flex" }}
            >
              <Styled.reviewSingle>
                <LazyLoad height={214} once offset={100}>
                  <Styled.instaremImage>
                    <Styled.reviewImage
                      src="/static/images/app-ads/citymall.png"
                      width={324}
                      height={240}
                    />
                  </Styled.instaremImage>
                </LazyLoad>
                <Styled.reviewImageTitle>CityMall</Styled.reviewImageTitle>
                <Styled.reviewImageContent>
                  Citymall is a WhatsApp based eCommerce startup which works on
                  logistics optimization. It is now live across multiple Indian
                  cities and has secured initial rounds of funding.
                </Styled.reviewImageContent>
              </Styled.reviewSingle>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tracingapp"
              style={{ textDecoration: "none", display: "flex" }}
            >
              <Styled.reviewSingle>
                <LazyLoad height={214} once offset={100}>
                  <Styled.instaremImage>
                    <Styled.reviewImage
                      src="/static/images/app-ads/beforeNurseryHindi.webp"
                      width={324}
                      height={240}
                    />
                  </Styled.instaremImage>
                </LazyLoad>
                <Styled.reviewImageTitle>
                  Before Nursery
                </Styled.reviewImageTitle>
                <Styled.reviewImageContent>
                  Before Nursery is an educational app for children. It helps
                  kids familiarize themselves with numbers, alphabets, and
                  simple words while playing games. It is available in multiple
                  Indian languages including Hindi and Marathi.
                </Styled.reviewImageContent>
              </Styled.reviewSingle>
            </a>
            {/* <a
              href="https://play.google.com/store/apps/details?id=com.beforenurserymarathi"
              style={{ textDecoration: "none" }}
            >
              <Styled.reviewSingle>
                <LazyLoad height={214} once offset={100}>
                  <Styled.instaremImage>
                    <Styled.reviewImage
                      src="/static/images/app-ads/citymall.webp"
                      width={324}
                    />
                  </Styled.instaremImage>
                </LazyLoad>
                <Styled.reviewImageTitle>
                  Before Nursery Marathi
                </Styled.reviewImageTitle>
                <Styled.reviewImageContent>
                  Before Nursery content
                </Styled.reviewImageContent>
              </Styled.reviewSingle>
            </a> */}
            <a
              href="https://play.google.com/store/apps/details?id=com.game.sevencentre"
              style={{ textDecoration: "none", display: "flex" }}
            >
              <Styled.reviewSingle>
                <LazyLoad height={214} once offset={100}>
                  <Styled.instaremImage>
                    <Styled.reviewImage
                      src="/static/images/app-ads/cardgame.webp"
                      width={324}
                      height={240}
                    />
                  </Styled.instaremImage>
                </LazyLoad>
                <Styled.reviewImageTitle>
                  Sevens Playing Cards Game
                </Styled.reviewImageTitle>
                <Styled.reviewImageContent>
                  This is an online version of classic Sevens Card Game also
                  known as Laying Out Sevens, Fan Tan, Crazy Sevens, Badam
                  Satti, Parliament or Yuto. It is a four-player playing cards
                  game where you win on emptying your hand before other players.
                </Styled.reviewImageContent>
              </Styled.reviewSingle>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.game.teendopaanch"
              style={{ textDecoration: "none", display: "flex" }}
            >
              <Styled.reviewSingle>
                <LazyLoad height={214} once offset={100}>
                  <Styled.instaremImage>
                    <Styled.reviewImage
                      src="/static/images/app-ads/325.webp"
                      width={324}
                      height={240}
                    />
                  </Styled.instaremImage>
                </LazyLoad>
                <Styled.reviewImageTitle>
                  325 Bridge game
                </Styled.reviewImageTitle>
                <Styled.reviewImageContent>
                  3 2 5 Bridge commonly known as Teen Do Paanch (Panch) or 3-2-5
                  Cards Game is one of the basic playing card games that are
                  played at Indian homes. The app supports playing with friends,
                  offline bot and with other online players.
                </Styled.reviewImageContent>
              </Styled.reviewSingle>
            </a>
          </Styled.reviewImageBlocks>
        </Styled.reviewsBlock>
      </Styled.reviewsSection>
    </Styled.FlexContainer>
  </Styled.reviewsRow>
);

export default Reviews;
