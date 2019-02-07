import React from "react";
import * as Styled from "./styles";

export default class ContactForm extends React.Component {
  render() {
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.inputDiv>
            <Styled.Input
              type="text"
              name="Start a project"
              placeholder="Start a project"
            />
          </Styled.inputDiv>
          <Styled.inputDiv>
            <Styled.Input type="text" name="name" placeholder="Your name" />
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
              type="text"
              name="about us"
              placeholder="how did you hear about us?"
            />
          </Styled.inputDiv>
          <Styled.inputDiv>
            <Styled.Input type="text" name="Message" placeholder="Message" />
          </Styled.inputDiv>
          <Styled.button>Send Request</Styled.button>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}
