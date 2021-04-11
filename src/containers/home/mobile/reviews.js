import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import LazyLoad from "react-lazyload";

const reviewList = [
  {
    img: "/static/images/home/betking.png",
    title: "BetKing",
    paragraph:
      "BetKing is one of the most trusted online crypto casino and exchange (raised $6.5 million in ICO)"
  },
  {
    img: "/static/images/home/lcs.jpg",
    title: "Barnes and Noble LoudCloud",
    paragraph:
      "LoudCloud builds software that improves learning. Acquired by Barnes and Noble in 2016."
  },
  {
    img: "/static/images/home/khelomore.png",
    title: "KheloMore",
    paragraph:
      "Founded by former Indian cricketer, athelete and Sports Managing Head for Nike, Jatin Paranjape, KheloMore is a digital platform bringing together young atheletes and coaches / academies online for an exceptional performance off-line."
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
        We have worked with some amazing founders and startups
      </Styled.title>
      <Styled.p>
        Deep focus and productive relationships is something we cherish. Partner
        with us and experience a difference.
      </Styled.p>
    </Styled.contentPadding>
    <Styled.reviewsListMob>
      {reviewList.map((value, index) => (
        <Styled.reviewsBlockMob key={index}>
          <LazyLoad height={141} offset={100} once>
            <Styled.reviewsBlockImgMob width="214px" src={value.img} />
          </LazyLoad>
          <Styled.reviewsBlockContentMob>
            <Styled.reviewsTitleMob>{value.title}</Styled.reviewsTitleMob>
            <Styled.p>{value.paragraph}</Styled.p>
          </Styled.reviewsBlockContentMob>
        </Styled.reviewsBlockMob>
      ))}
    </Styled.reviewsListMob>
    {/* <StartProject href={"/start-a-project"} /> */}
  </Styled.pageWrapper>
);

export default ReviewsMobile;
