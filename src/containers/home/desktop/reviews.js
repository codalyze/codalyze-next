import React from "react";
import * as Styled from "./styles";
import Link from "next/link";

const StartProject = ({ href }) => (
    <Link href={href} passHref prefetch>
      <Styled.reviewsProject>START A PROJECT</Styled.reviewsProject>
    </Link>
  );

const Reviews = () => (
  <Styled.reviewsRow>
    <Styled.FlexContainer>
      <Styled.reviewsSection>
        <Styled.reviewsBlock>
            <Styled.homepageBlocksTitle>
                Explore how our <br /> engagements become <br />success stories
            </Styled.homepageBlocksTitle>
            <Styled.reviewsSubTitle>Enjoy deep focus and productive<br /> relationships. Partner with us and we'll<br /> make your code and team better.</Styled.reviewsSubTitle>
            <StartProject href={"/start-a-project"} />
        </Styled.reviewsBlock>
        <Styled.reviewsBlock>
            <Styled.reviewImageBlocks>
                <Styled.reviewSingle>
                    <Styled.reviewImage src="../static/images/home/betking.png" />
                    <Styled.reviewImageTitle>BetKing</Styled.reviewImageTitle>
                    <Styled.reviewImageContent>Working with Naisheel and <br />Codalyze has been a great experience.</Styled.reviewImageContent>
                </Styled.reviewSingle>
                <Styled.reviewSingle>
                    <Styled.reviewImage src="../static/images/home/fitcircle.png" />
                    <Styled.reviewImageTitle>FitCircle</Styled.reviewImageTitle>
                    <Styled.reviewImageContent>Working with Naisheel and <br />Codalyze has been a great experience.</Styled.reviewImageContent>
                </Styled.reviewSingle>
            </Styled.reviewImageBlocks>
            <Styled.reviewImageBlocks>
            <Styled.reviewSingle>
                    <Styled.reviewImage src="../static/images/home/khelomore.png" />
                    <Styled.reviewImageTitle>KheloMore</Styled.reviewImageTitle>
                    <Styled.reviewImageContent>Working with Naisheel and <br />Codalyze has been a great experience.</Styled.reviewImageContent>
                </Styled.reviewSingle>
                
            </Styled.reviewImageBlocks>
        </Styled.reviewsBlock>
      </Styled.reviewsSection>
    </Styled.FlexContainer>
  </Styled.reviewsRow>
);

export default Reviews;
