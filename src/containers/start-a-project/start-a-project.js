import React from "react";
import HomeBanner from "../../components/HomeBanner";
import * as Styled from "./styles";

export default class StartAProject extends React.Component {
  render() {
    return (
      <Styled.pageWrapper>
        <HomeBanner
          title="Let’s work"
          secondryTitle="together"
          subTitle="Start a project, schedule a talk or just say hello!"
          titleBreak
        />
      </Styled.pageWrapper>
    );
  }
}
