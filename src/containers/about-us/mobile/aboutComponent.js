import React, { Fragment } from "react";
import * as Styled from "./styles";

const AboutComponent = ({
  headingOne,
  headingTwo,
  content,
  contentTwo,
  contentThree,
  contentFour,
  image,
  multiple,
  hide
}) => (
  <Fragment>
    <Styled.title>{headingOne}</Styled.title>
    <Styled.title>{headingTwo}</Styled.title>
    {hide ? "" : <Styled.p>{content}</Styled.p>}
    {multiple ? (
      <Fragment>
        <Styled.startContent>{contentTwo}</Styled.startContent>
        <Styled.startContent>{contentThree}</Styled.startContent>
        <Styled.startContent>{contentFour}</Styled.startContent>
      </Fragment>
    ) : null}

    <Styled.img src={image} />
  </Fragment>
);

export default AboutComponent;
