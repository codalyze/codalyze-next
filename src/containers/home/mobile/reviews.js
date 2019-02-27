import React from "react";
import * as Styled from "./styles";
import Link from "next/link";

const reviewList = [
  {
    img: "../static/images/mobile/home/betkingMobile.png",
    title: "BetKing",
    paragraph: "Working with Naisheel and Codalyze has been a great experience."
  },
  {
    img: "../static/images/mobile/home/fitCircleMobile.png",
    title: "KheloMore",
    paragraph: "Working with Naisheel and Codalyze has been a great experience."
  },
  {
    img: "../static/images/mobile/home/khelomoreMobile.png",
    title: "Fitcircle",
    paragraph: "Working with Naisheel and Codalyze has been a great experience."
  }
];

const StartProject = ({ href }) => (
    <Link href={href} passHref prefetch>
      <Styled.greenBtn>START A PROJECT</Styled.greenBtn>
    </Link>
  );

const ReviewsMobile = () => (
  <Styled.pageWrapper>
    <Styled.contentPadding>
      <Styled.title>
        Explore how our engagements become success stories
      </Styled.title>
      <Styled.p>
        Enjoy deep focus and productive relationships. Partner with us and we'll
        make your code and team better.
      </Styled.p>
    </Styled.contentPadding>
    <Styled.reviewsListMob>
      {reviewList.map((value, index) => (
        <Styled.reviewsBlockMob key={index}>
          <Styled.reviewsBlockImgMob src={value.img} />
          <Styled.reviewsBlockContentMob>
            <Styled.reviewsTitleMob>{value.title}</Styled.reviewsTitleMob>
            <Styled.p>
             {value.paragraph}
            </Styled.p>
          </Styled.reviewsBlockContentMob>
        </Styled.reviewsBlockMob>
      ))}
    </Styled.reviewsListMob>
    <StartProject href={"/start-a-project"} />
  </Styled.pageWrapper>
);

export default ReviewsMobile;
