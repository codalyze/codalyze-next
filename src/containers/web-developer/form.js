import React from "react";
import * as Styled from "./styles";

export default class jobApplication extends React.Component {
  render() {
    return (
      <Styled.formRow>
        <Styled.inputDiv>
          <Styled.Input
            type="text"
            name="Your Name"
            placeholder="Your Name"
          />
        </Styled.inputDiv>
        <Styled.inputDiv>
          <Styled.Input type="email" name="email" placeholder="Email address" />
        </Styled.inputDiv>
        <Styled.inputDiv>
          <Styled.Input type="number" name="Phone" placeholder="Contact Number" />
        </Styled.inputDiv>
        
        <Styled.inputDiv>
          <Styled.Input
            type="text"
            name="Total experience (In years)"
            placeholder="Total experience (In years)"
          />
        </Styled.inputDiv>
        <Styled.inputDiv>
          <Styled.Input type="text" name="Current location" placeholder="Current location" />
        </Styled.inputDiv>
        <Styled.inputDiv>
          <Styled.Input type="text" name="LinkedIn profile" placeholder="LinkedIn profile" />
        </Styled.inputDiv>
        <Styled.h1>Upload your resume</Styled.h1>
        <Styled.resume>
          <Styled.uploadBtn>Choose File</Styled.uploadBtn>
          <Styled.p>No files chosen</Styled.p>
        </Styled.resume>
        <Styled.button>SUBMIT</Styled.button>
      </Styled.formRow>
    );
  }
}
