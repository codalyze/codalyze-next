import React from "react";
import Banner from "../../components/Banner";
import * as Styled from "./styles";
import SectionFirstBg from "./images/SectionFirstBg";
import Sections from "./Sections";
import Footer from "../../components/footer";
import HomeBanner from "../../components/HomeBanner";

// import Flutter from '../home/commons/Flutter';
import NodeJs from "../home/commons/NodeJs";
import ReactJs from "../home/commons/ReactJs";
import ReactNative from "../home/commons/ReactNative";
import VueJs from "../home/commons/VueJs";
import ContactForm from "../start-a-project/desktop/contactForm";
import Clients from "../home/desktop/clients";

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

  render() {
    return (
      <Styled.pageWrapper>
        <HomeBanner
          banner="/static/images/rubik-cube-banner.png"
          titleBreak
          secondryTitle="Let us help you"
          subTitle="The right people on your team can take your business to new heights"
        />
        <Styled.bannerSvg>
          <SectionFirstBg
            width="100%"
            height="100%"
            viewBox="700 0 2175.141 2959.327"
            preserveAspectRatio="none"
          />
        </Styled.bannerSvg>
        <Styled.blogContainer>
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
          <ContactForm
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
