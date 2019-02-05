import React, { Component } from "react";
import * as Styled from "./styles";

export default class ContactForm extends Component {
  render() {
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.formHead>
            We'd love to help you with your project. Let us know a few <br />{" "}
            more details and we will take it from here.
          </Styled.formHead>
          <Styled.inputDiv>
            <Styled.Input type="text" name="name" placeholder="Your Name" />
          </Styled.inputDiv>
          <Styled.inputDiv>
            <Styled.Input
              type="email"
              name="email"
              placeholder="Email address"
            />
          </Styled.inputDiv>
          <Styled.inputDiv>
            <Styled.Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="And finally, your contact number"
            />
          </Styled.inputDiv>
          <Styled.ButtonWrapper>SEND REQUEST</Styled.ButtonWrapper>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}
