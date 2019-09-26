import React from "react";
import * as Styled from "./styles";
import SectionFirstBg from "./images/SectionFirstBg";
import Sections from "./Sections";
import Footer from "../../components/footer";

// import Flutter from '../home/commons/Flutter';
import NodeJs from "../home/commons/NodeJs";
import ReactJs from "../home/commons/ReactJs";
import ReactNative from "../home/commons/ReactNative";
import VueJs from "../home/commons/VueJs";
import ContactForm from "../start-a-project/desktop/contactForm";
import Clients from "../home/desktop/clients";
import Bg2 from "./images/Bg2";

const technologies = [NodeJs, ReactJs, ReactNative, VueJs];
export default class StaffingContent extends React.PureComponent {
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

  onClickSendRequest = () => {
    const ReactPixel =  require('react-facebook-pixel').default;
    ReactPixel.trackCustom('sendContractEnquiry');
    const { data } = this.state || {};
    data.contractStaffing = true;
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

  render() {
    return (
      <Styled.pageWrapper>
        <Styled.bannerContainer>
          <img src="/static/images/selection.jpg" width="100%" />
          {this.props.mq !== "mobile" && (
            <Styled.bannerText
              style={{
                top: "11vw",
                left: "5%"
              }}
            >
              Your next star performer,
            </Styled.bannerText>
          )}

          {this.props.mq !== "mobile" && (
            <Styled.bannerText
              style={{
                top: "15.5vw",
                left: "10%"
              }}
            >
              handpicked by us
            </Styled.bannerText>
          )}
        </Styled.bannerContainer>
        {this.props.mq === "mobile" && (
          <Styled.bottomSvg>
            <Bg2 width="100%" height="100%" viewBox="0 0 1597.776 1603.587" />
          </Styled.bottomSvg>
        )}
        {this.props.mq === "mobile" && (
          <Styled.bannerMobileTextContainer>
            <Styled.bannerMobileText
              style={{
                color: "#76686a",
                "marginLeft": "20%"
              }}
            >
              Your next star performer,
            </Styled.bannerMobileText>
            <Styled.bannerMobileText
              style={{
                "marginLeft": "40%"
              }}
            >
              handpicked by us
            </Styled.bannerMobileText>
          </Styled.bannerMobileTextContainer>
        )}
        <Styled.CTAWrapper
          onClick={() => {
            const ReactPixel = require('react-facebook-pixel').default;
            ReactPixel.trackCustom('scrollDownToContact');
            const elem = document.getElementById('contact-form');
            elem.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Get In Touch
        </Styled.CTAWrapper>
        <Styled.bannerSvg>
          <SectionFirstBg
            width="100%"
            height="100%"
            viewBox="700 0 2175.141 2959.327"
            preserveAspectRatio="none"
          />
        </Styled.bannerSvg>

        <Styled.blogContainer>
          <Styled.blockquote>
            "The right people on your team can take your business to new
            heights"
          </Styled.blockquote>
          <Styled.p>
            Whether you're a startup, a small-sized business or an enterprise-
            Codalyze can help you find your next Super Star!
          </Styled.p>
          <Styled.p>
            Our in-house team of extremely talented developers, data analysts,
            and testers combined with our extensive database of candidates
            translates to your vacancies filling as quickly as 2 weeks!
          </Styled.p>
          <Styled.p>
            We know how hard it can be to find the right members for your team,
            and in the spirit of helping our clients, we provide developers and
            data analysts as contract employees. Burden of employee onboarding
            paperwork, payroll funding, processing taxes, insurance, compliance
            issues are handled by us.
          </Styled.p>
          <Styled.technologies>
            {technologies.map((Technology, idx) => (
              <Styled.technologyItem key={idx}>
                <Technology />
              </Styled.technologyItem>
            ))}
          </Styled.technologies>
          <Sections />
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
          <ContactForm
            contactTitle="To know more about our offerings, send over your details and we'll take it from there"
            onChangeText={this.onChangeText}
            onClickSendRequest={this.onClickSendRequest}
            emailError={this.state.emailError}
            data={this.state.data}
            contractStaffing={true}
          />
        </Styled.blogContainer>
        <Clients />
        {/* <Sections /> */}
        <Footer />
      </Styled.pageWrapper>
    );
  }
}
