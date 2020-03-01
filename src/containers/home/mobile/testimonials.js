import React from "react";
import * as Styled from "./styles";
import MobileStarBg from "../desktop/images/specializeStar";
import { testimonialsList } from "../commons/data";
import LazyLoad from "react-lazyload";

const TestimonialMobile = props => (
  <Styled.pageWrapper>
    <Styled.testimonialMobileRow
      style={{
        padding: props && props.handleMargin && "20px"
      }}
    >
      <Styled.clientStarContainerBg>
        <MobileStarBg
          width="100%"
          height="100%"
          viewBox="0 0 421.867 456.583"
        />
      </Styled.clientStarContainerBg>

      {props.handleMargin ? (
        <Styled.bigTitle>What clients are saying</Styled.bigTitle>
      ) : (
        <Styled.testimonialTitle>
          What clients are saying
        </Styled.testimonialTitle>
      )}
      <Styled.testimonialListMob>
        {testimonialsList.map((i, index) => (
          <Styled.testimonialBlockMob key={index}>
            <LazyLoad height={50} offset={100} once>
              <Styled.testimonialImageMob
                src={
                  i.img || "../static/images/home/testimonial-placeholder.png"
                }
                alt={i.heading}
              />
            </LazyLoad>
            <Styled.testimonialTitleMob>{i.heading}</Styled.testimonialTitleMob>
            <Styled.testimonialInfoMob>
              {i.subHeading}
            </Styled.testimonialInfoMob>
            <Styled.p>{i.paragraph}</Styled.p>
          </Styled.testimonialBlockMob>
        ))}
      </Styled.testimonialListMob>
    </Styled.testimonialMobileRow>
  </Styled.pageWrapper>
);

export default TestimonialMobile;
