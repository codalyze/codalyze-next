import React from "react";
import * as Styled from "./styles";
import Link from "next/link";

const OurService = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.specializeBtn>our service</Styled.specializeBtn>
  </Link>
);

const SpecializeIn = () => (
  <Styled.specializeRow>
    <Styled.homepageBlocksTitle>We specialize in</Styled.homepageBlocksTitle>
    <Styled.specializeContent>
      We align the goals of your organisation to the needs of <br /> your
      customers - creating exceptional brand experiences.
    </Styled.specializeContent>
    <Styled.specializeAreas>
      <Styled.specializeAreasBlocks>
        <Styled.specializeAreasImage src="../static/images/optimize-aproach.png" />
        <Styled.specializeAreasTitle>
          Optimize Approach
        </Styled.specializeAreasTitle>
        <Styled.specializeAreasContent>
          We aid you in acheiving a tight dealine and help you get to market
          fast.
        </Styled.specializeAreasContent>
      </Styled.specializeAreasBlocks>

      <Styled.specializeAreasBlocks>
        <Styled.specializeAreasImage src="../static/images/high-low-risk.png" />
        <Styled.specializeAreasTitle>
          High Tech, Low Risk
        </Styled.specializeAreasTitle>
        <Styled.specializeAreasContent>
          Building custom software is risky and hard, but there's way back to
          stack those odds in your favour.
        </Styled.specializeAreasContent>
      </Styled.specializeAreasBlocks>

      <Styled.specializeAreasBlocks>
        <Styled.specializeAreasImage src="../static/images/focused-product-teams.png" />
        <Styled.specializeAreasTitle>
          Focused Product Teams
        </Styled.specializeAreasTitle>
        <Styled.specializeAreasContent>
          You'll be working with a small, dedicated team built to fit the need
          of the project
        </Styled.specializeAreasContent>
      </Styled.specializeAreasBlocks>
      
    </Styled.specializeAreas>
    <Styled.specializehelp>
          See how can we be of your help.
        </Styled.specializehelp>
        <OurService href={"/services"} />
  </Styled.specializeRow>
);

export default SpecializeIn;
