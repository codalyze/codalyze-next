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
  <Styled.reviewSingle showOnSmallScreen={showOnSmallScreen}>
    <LazyLoad height={214} once offset={100}>
      <Styled.reviewImage src="/static/images/home/khelomore.png" />
    </LazyLoad>
    <Styled.reviewImageTitle>KheloMore</Styled.reviewImageTitle>
    <Styled.reviewImageContent>
      Founded by former Indian cricketer, athelete and Sports Managing Head for
      Nike, Jatin Paranjape, KheloMore is a digital platform bringing together
      young atheletes and coaches / academies online for an exceptional
      performance off-line.
    </Styled.reviewImageContent>
  </Styled.reviewSingle>
);

const Reviews = () => (
  <Styled.reviewsRow>
    <Styled.FlexContainer>
      <Styled.reviewsSection>
        {/* <Styled.reviewsTitle>
         
        </Styled.reviewsTitle> */}
        <Styled.reviewsSubTitle>
          We have worked with some amazing founders and startups Deep focus and
          productive relationships is something we cherish. Partner with us and
          experience a difference.
        </Styled.reviewsSubTitle>

        <Styled.reviewsBlock>
          <Styled.reviewImageBlocks
            style={{ display: "flex", flexFlow: "wrap" }}
          >
            <Styled.reviewSingle>
              <LazyLoad height={214} once offset={100}>
                <Styled.instaremImage>
                  <Styled.reviewImage src="/static/images/app-ads/instarem.jpg" />
                </Styled.instaremImage>
              </LazyLoad>
              <Styled.reviewImageTitle>InstaRem</Styled.reviewImageTitle>
              <Styled.reviewImageContent>
                Instarem is a money transfers app for customer onboarding which
                supports 55+ countries.
              </Styled.reviewImageContent>
            </Styled.reviewSingle>
            <Styled.reviewSingle>
              <LazyLoad height={214} once offset={100}>
                <Styled.reviewImage src="/static/images/home/fitcircle.png" />
              </LazyLoad>
              <Styled.reviewImageTitle>FitCircle</Styled.reviewImageTitle>
              <Styled.reviewImageContent>
                FitCircle arranges community-based fitness programmes for
                individuals and corporate groups. It allows users to chat with
                nutritionists and health experts and members can avail the
                services at various locations across Mumbai.
              </Styled.reviewImageContent>
            </Styled.reviewSingle>
            <Styled.reviewSingle>
              <LazyLoad height={214} once offset={100}>
                <Styled.instaremImage>
                  <Styled.reviewImage
                    src="/static/images/app-ads/hpca.jpg"
                    width={324}
                  />
                </Styled.instaremImage>
              </LazyLoad>
              <Styled.reviewImageTitle>HPCA</Styled.reviewImageTitle>
              <Styled.reviewImageContent>
                HPCA App is your destination to follow all district and state
                level cricket at Himachal Pradesh Cricket Association
              </Styled.reviewImageContent>
            </Styled.reviewSingle>

            <Styled.reviewSingle>
              <LazyLoad height={214} once offset={100}>
                <Styled.instaremImage>
                  <Styled.reviewImage
                    src="/static/images/app-ads/mssa.png"
                    width={324}
                  />
                </Styled.instaremImage>
              </LazyLoad>
              <Styled.reviewImageTitle>MSSA</Styled.reviewImageTitle>
              <Styled.reviewImageContent>
                MSSA App is your destination to follow all district and state
                level cricket at Himachal Pradesh Cricket Association
              </Styled.reviewImageContent>
            </Styled.reviewSingle>

            <KMReview />

            <Styled.reviewSingle>
              <LazyLoad height={214} once offset={100}>
                <Styled.instaremImage>
                  <Styled.reviewImage
                    src="/static/images/app-ads/hpca.jpg"
                    width={324}
                  />
                </Styled.instaremImage>
              </LazyLoad>
              <Styled.reviewImageTitle>BitSafe</Styled.reviewImageTitle>
              <Styled.reviewImageContent>
                BitSafe App is your destination to follow all district and state
                level cricket at Himachal Pradesh Cricket Association
              </Styled.reviewImageContent>
            </Styled.reviewSingle>
          </Styled.reviewImageBlocks>
        </Styled.reviewsBlock>
      </Styled.reviewsSection>
    </Styled.FlexContainer>
  </Styled.reviewsRow>
);

export default Reviews;
