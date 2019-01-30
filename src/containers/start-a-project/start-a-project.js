import React from "react";
import HomeBanner from "../../components/HomeBanner";
import * as Styled from "./styles";
import Help from "./help";
import KindOfWebsite from "./kindOfWebsite";
import Budget from "./budget";
import Project from "./project";


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
        
          <Help />
          <KindOfWebsite />
            <Budget />
            <Project />
          
      </Styled.pageWrapper>
    );
  }
}
