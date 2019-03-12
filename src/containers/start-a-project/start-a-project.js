import React from "react";
import HomeBanner from "../../components/HomeBanner";
import * as Styled from "./styles";
import Help from "./help";
import KindOfWebsite from "./kindOfWebsite";
import Budget from "./budget";
import Project from "./project";
import StartAProjectBg from "./images/startAProject";
import ContactForm from "./contactForm";
import CubeBg from "./images/cubeBg";
import Footer from "../../components/footer";

export const sectionTypes = {
  help: "help-item",
  kow: "kow",
  duration: "duration",
  budget: "budget"
};

export const sectionConfig = {
  multi: [sectionTypes.help],
  single: [sectionTypes.kow, sectionTypes.duration, sectionTypes.budget]
};

export default class StartAProject extends React.Component {
  state = { data: {} };

  onChangeText = e => {
    const { data } = this.state;
    const currentData = {
      [e.target.name]: e.target.value
    };
    this.setState({ data: { ...data, ...currentData } });
  };

  onClickItem = item => {
    let name = item.itemType,
      value = item.field;
    let sectionKeyValue;
    const { data } = this.state;
    if (data && data.hasOwnProperty(name)) {
      let sectionValues = data[name];
      // Differentiation for multi and single selection
      if (sectionConfig["multi"].includes(name)) {
        if (data[name].includes(value)) {
          const index = sectionValues.indexOf(value);
          sectionValues.splice(index, index + 1);
        } else {
          sectionValues.push(value);
        }
        sectionKeyValue = { [name]: sectionValues };
      } else {
        sectionKeyValue = { [name]: [value] };
      }
    } else {
      sectionKeyValue = { [name]: [value] };
    }
    this.setState({ data: { ...data, ...sectionKeyValue } });
  };

  onClickSendRequest = () => {
    const { data } = this.state || {};
    let xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
    let theUrl = "/send-request";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({ data }));
  };

  getSelectedItemsForType = type => {
    return this.state.data && this.state.data[type]
      ? this.state.data[type]
      : [];
  };

  render() {
    return (
      <Styled.pageWrapper>
        <HomeBanner
          title="Let’s work"
          secondryTitle="together"
          subTitle="Start a project, schedule a talk or just say hello!"
          titleBreak
        />
        <Styled.cubeWrapper>
          <CubeBg
            width={this.props.mq === "desktop" ? "100%" : "190px"}
            height={this.props.mq === "desktop" ? "auto" : "190px"}
            viewBox={"0 0 340.942 837.71"}
          />
        </Styled.cubeWrapper>
        <Styled.containerFluid>
          <Styled.Wrapper>
            <Styled.bannerSvg>
              <StartAProjectBg
                width="100%"
                height="100%"
                viewBox="450 0 2175.68 2359.44"
                preserveAspectRatio="none"
              />
            </Styled.bannerSvg>
            <Styled.commonDiv>
              <Help
                onClickItem={this.onClickItem}
                selectedItems={this.getSelectedItemsForType(sectionTypes.help)}
              />
              <KindOfWebsite
                onClickItem={this.onClickItem}
                selectedItems={this.getSelectedItemsForType(sectionTypes.kow)}
              />
              {this.props.mq === "mobile" && (
                <Styled.bannerSvgTrans>
                  <Styled.bannerSvg>
                    <StartAProjectBg
                      width="100%"
                      height="100%"
                      viewBox="450 0 2175.68 2359.44"
                      preserveAspectRatio="none"
                    />
                  </Styled.bannerSvg>
                </Styled.bannerSvgTrans>
              )}
              <Budget
                onClickItem={this.onClickItem}
                selectedItems={this.getSelectedItemsForType(
                  sectionTypes.budget
                )}
              />
              <Project
                onClickItem={this.onClickItem}
                selectedItems={this.getSelectedItemsForType(
                  sectionTypes.duration
                )}
              />
              <ContactForm
                onChangeText={this.onChangeText}
                onClickSendRequest={this.onClickSendRequest}
              />
              <Footer />
            </Styled.commonDiv>
          </Styled.Wrapper>
        </Styled.containerFluid>
      </Styled.pageWrapper>
    );
  }
}
