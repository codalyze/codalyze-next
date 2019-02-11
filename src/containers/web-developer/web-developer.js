import React from "react";
import * as Styled from "./styles";
import Description from "./description";
import JobApplication from "./form";
import Footer from "../../components/footer";

export default class WebDeveloper extends React.Component {
  render() {
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.h2>Web developer</Styled.h2>
          <Description />
          <JobApplication />
        </Styled.container>
        <Footer />
      </Styled.containerFluid>
    );
  }
}
