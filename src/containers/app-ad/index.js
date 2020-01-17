import React from "react";
import ContactForm from "../start-a-project/desktop/contactForm";
import { clientLogos, technologies } from "./commons/data";
import LazyLoad from "react-lazyload";
import * as Styled from "./styles";
import Testimonials from ".././home/desktop/testimonials";
import MobTestimonials from ".././home/mobile/testimonials";
import Footer from "../../components/footer";
import MobileAppDev from "../services/desktop/images/MobileAppDev";
import Fade from "react-reveal/Fade";
import {
  PerformanceImage,
  FastDevelopmentImage,
  OverTheAirImage
} from "../services/desktop/styles";
import Reviews from "../home/desktop/reviews";
import MobReviews from "../home/mobile/reviews";

let appDev = [
  {
    heading: "Fast development cycles",
    p:
      " It enables an entirely different style of development where you get really quick feedback because of low compile times.",
    image: FastDevelopmentImage
  },
  {
    heading: "Native Performance",
    p:
      "If anything takes longer than 100ms, the user will feel it. A compelling reason for using React Native instead of WebView-based tools is to achieve 60 frames per second and a native look and feel to your apps.",
    image: PerformanceImage
  },
  {
    heading: "Over the air updates",
    p:
      "React native makes it possible to push over the air updates without requiring users to update the app",
    image: OverTheAirImage
  }
];

class GoogleMobileAd extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: {}, emailError: false, showSuccessMessage: false };
  }

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

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  onClickSendRequest = () => {
    const ReactPixel = require("react-facebook-pixel").default;
    ReactPixel.trackCustom("sendContractEnquiry");
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
      <div>
        <Styled.mainContainer>
          <Styled.topContainer>
            <Styled.topTextContainer>
              <div>
                <Styled.h2>Innovative Mobile App Development</Styled.h2>
                <Styled.h3>Blazing Fast. Budget Friendly. Secure.</Styled.h3>
                <Styled.p>
                  {" "}
                  Let our experienced team of developers help your application
                  stand out from the crowd. Our unique approach and next
                  generation development will let your brand do the talking.{" "}
                </Styled.p>
              </div>

              <Styled.imgContainer>
                <img src="/static/images/mobile-app-dev.png" width="100%" />
                {/* <MobileAppDev /> */}
              </Styled.imgContainer>
            </Styled.topTextContainer>
            <div style={{width: '200%'}}>
              <ContactForm
                contactTitle="We would love to hear more about your project. Book a FREE consultation now!"
                onChangeText={this.onChangeText}
                onClickSendRequest={this.onClickSendRequest}
                emailError={this.state.emailError}
                data={this.state.data}
                contractStaffing={true}
              />
            </div>
          </Styled.topContainer>

          <Styled.h2>The Approach</Styled.h2>
          <Styled.p>
            Our unique mobile app development process allows us to rapidly build
            cross-platform apps at a fraction of the cost using React Native.
          </Styled.p>

          <Styled.ul>
            {appDev.map(Item => (
              <Fade key={Item.heading}>
                <Styled.li>
                  <Styled.liImage>
                    <Item.image />
                  </Styled.liImage>
                  <Styled.liContent>
                    <Styled.h3>{Item.heading}</Styled.h3>
                    <Styled.p>{Item.p}</Styled.p>
                  </Styled.liContent>
                </Styled.li>
              </Fade>
            ))}
          </Styled.ul>

          <Styled.h2> Our Clients</Styled.h2>
          <Styled.techLogoRow>
            {clientLogos.map((x, id) => {
              return (
                <Styled.techLogoBlock key={id}>
                  <LazyLoad height={78} once offset={100}>
                    <img src={x} width="200" />
                  </LazyLoad>
                </Styled.techLogoBlock>
              );
            })}
          </Styled.techLogoRow>
          <Styled.h2>Tech Stack</Styled.h2>
          <Styled.technologies>
            {technologies.map((Technology, idx) => (
              <Styled.technologyItem key={idx}>
                <Technology />
              </Styled.technologyItem>
            ))}
          </Styled.technologies>

          <Styled.h2>Projects</Styled.h2>

            {this.props.mq === "desktop" ? <div style={{ marginTop: "-220px" }}><Reviews /> </div> : <MobReviews />}

          {this.props.mq === "desktop" ? <Testimonials /> : <MobTestimonials />}
        </Styled.mainContainer>
        <Footer />
      </div>
    );
  }
}

export default GoogleMobileAd;
