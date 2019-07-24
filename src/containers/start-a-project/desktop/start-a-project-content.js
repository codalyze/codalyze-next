import React from "react";
import HomeBanner from "../../../components/HomeBanner";
import * as Styled from "../styles";
import StartAProjectBg from "./images/startAProject";
import ContactForm from "../commons/contactForm";
import CubeBg from "./images/CubeBg";
import Footer from "../../../components/footer";
import ConsultationDesk from "./consult";

import EUCookieConsent from "../../cookies/cookieConsent";

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

export default class StartAProjectContent extends React.PureComponent {
  state = { data: {}, emailError: false, showSuccessMessage: false };

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  onChangeText = e => {
    const { data } = this.state;
    let emailError = this.state.emailError;
    if (e.target.name === "email") {
      emailError = !this.validateEmail(e.target.value);
    }
    const currentData = {
      [e.target.name]: e.target.value
    };
    this.setState({ data: { ...data, ...currentData }, emailError });
  };

  onClickItem = item => {
    let name = item.itemType,
      value = item.field;
    let sectionKeyValue;
    const { data } = this.state;
    if (data && data.hasOwnProperty(name)) {
      let sectionValues = data[name];
      // Differentiation for multi and single selection [d/dx(multi-selection) && d/dx(single-selection)]
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
    const xmlhttp = new XMLHttpRequest();
    const self = this;
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        self.onSubmitSuccess();
      }
    };
    let theUrl = "/send-request";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({ data }));
  };

  onSubmitSuccess = () => {
    this.setState(
      { data: {}, emailError: false, showSuccessMessage: true },
      () => {
        const elem = document.getElementById("success-message");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    );
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
          title="Let’s work together"
          subTitle="Start a project, schedule a talk or just say hello!"
          titleBreak
        />
        <Styled.cubeWrapper>
          <CubeBg
            width={this.props.mq === "desktop" ? "740px" : "450px"}
            height={this.props.mq === "desktop" ? "837px" : "550px"}
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
            {this.state.showSuccessMessage && (
              <Styled.successDiv id="success-message">
                Thanks for your interest. We will get back to you within 24
                hours.
                <span
                  onClick={() => {
                    this.setState({ showSuccessMessage: false });
                  }}
                >
                  x
                </span>
              </Styled.successDiv>
            )}
            <Styled.commonDiv>
              <ConsultationDesk />
              {/* <Help
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
              /> */}

              <ContactForm
                onChangeText={this.onChangeText}
                onClickSendRequest={this.onClickSendRequest}
                emailError={this.state.emailError}
                data={this.state.data}
              />
              <Footer />
              <EUCookieConsent />
            </Styled.commonDiv>
          </Styled.Wrapper>
        </Styled.containerFluid>
      </Styled.pageWrapper>
    );
  }
}
