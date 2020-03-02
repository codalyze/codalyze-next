import React from "react";
import ContactForm from "../../start-a-project/desktop/contactForm";
import { clientLogos, technologies, appTechnologies } from "../commons/data";
import LazyLoad from "react-lazyload";
import * as Styled from "../styles";
import Testimonials from "../../home/desktop/testimonials";
import MobTestimonials from "../../home/mobile/testimonials";
import Footer from "../../../components/footer";

import Banner from "../../../components/Banner";
import LazySvgLoader from "../../../components/LazySvgLoader";
import dynamic from "next/dynamic";
import Fade from "react-reveal/Fade";
import {
  PerformanceImage,
  FastDevelopmentImage,
  OverTheAirImage
} from "../../services/desktop/styles";
import MobileProjects from "../MobileProjects";
import Work1 from "../../work/images/Work1";
import Projects from "./Projects";
// import Work2 from "../../work/images/Work2";

let allTech = [...technologies, ...appTechnologies];
const Work2 = dynamic(() => import("../../work/images/Work2"), {
  loading: () => null
});
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
    const props = this.props;
    return (
      <div>
        <Styled.mainContainer>
          <Styled.formContainer>
            <Styled.topTextContainer>
              <Styled.text1>
                {/* <Banner
                  BannerSvg={() => ( */}

                <Styled.h2>Innovative Mobile App Development</Styled.h2>
                <Styled.h3 style={{ textAlign: "left" }}>
                  <Styled.orange>Blazing Fast.</Styled.orange> Budget Friendly.{" "}
                  <Styled.orange>Secure.</Styled.orange>
                </Styled.h3>
                <Styled.p>
                  We are an experienced team of developers based out of Mumbai,
                  let us help your application stand out from the crowd. Our
                  unique approach and next generation development will let your
                  brand do the talking.{" "}
                </Styled.p>
              </Styled.text1>
              <Styled.text1>
                <LazySvgLoader
                  FirstImage={Work1}
                  LazyImage={Work2}
                  customHeight={"100%"}
                  isMobile={props.mq === "mobile"}
                />
              </Styled.text1>
            </Styled.topTextContainer>
          </Styled.formContainer>

          <Styled.text2>
            <Styled.text3>
              <Styled.imgContainer>
                <img src="/static/images/mobile-app-dev.png" width="100%" />
              </Styled.imgContainer>
            </Styled.text3>
            <Styled.text3>
              <Styled.h2>
                <span style={{ paddingLeft: "6vw" }}>Connect with us!</span>
              </Styled.h2>
              <Styled.test>
                <ContactForm
                  contactTitle="We would love to hear more about your project. Book a FREE consultation now!"
                  onChangeText={this.onChangeText}
                  onClickSendRequest={this.onClickSendRequest}
                  emailError={this.state.emailError}
                  data={this.state.data}
                  contractStaffing={true}
                  fullWidth
                />
              </Styled.test>
            </Styled.text3>
          </Styled.text2>

          <Styled.outerContainer>
            <Styled.h2 style={{ textAlign: "center" }}>The Approach</Styled.h2>
            <Styled.p style={{ textAlign: "center" }}>
              Our unique mobile app development process allows us to rapidly
              build cross-platform apps at a fraction of the cost using React
              Native.
            </Styled.p>

            <Styled.ul>
              {appDev.map(Item => (
                <Styled.li key={Item.heading}>
                  <Styled.liImage>
                    <Item.image />
                  </Styled.liImage>
                  <Styled.liContent>
                    <Styled.h3>{Item.heading}</Styled.h3>
                    <Styled.p>{Item.p}</Styled.p>
                  </Styled.liContent>
                </Styled.li>
              ))}
            </Styled.ul>
          </Styled.outerContainer>

          <Styled.outerContainer>
            <Styled.h2 style={{ textAlign: "center" }}> Our Clients</Styled.h2>
            <Styled.techLogoRow>
              {clientLogos.map((x, id) => {
                return (
                  <Styled.techLogoBlock key={id}>
                    <LazyLoad height={78} once offset={100}>
                      <img src={x} width={props.mq === "mobile" ? 100 : 200} />
                    </LazyLoad>
                  </Styled.techLogoBlock>
                );
              })}
            </Styled.techLogoRow>
          </Styled.outerContainer>

          <Styled.outerContainer>
            {/* <Styled.h2 style={{ textAlign: "center" }}>Projects</Styled.h2>
            <MobileProjects {...this.props} /> */}

            {/* <div style={{ marginBottom: "100px" }}> */}
            {this.props.mq === "desktop" ? (
              <Testimonials hideSvg={true} />
            ) : (
              <MobTestimonials handleMargin={true} />
            )}
          </Styled.outerContainer>
          <Styled.outerContainer>
            <Styled.h2 style={{ textAlign: "center" }}>Tech Stack</Styled.h2>
            <Styled.technologies>
              {allTech.map((Technology, idx) => (
                <Styled.technologyItem key={idx}>
                  {typeof Technology === "function" ? (
                    <Technology />
                  ) : (
                    <Styled.appTech
                      src={Technology}
                      style={{ width: techStackStyles(Technology, props) }}
                    />
                  )}
                </Styled.technologyItem>
              ))}
            </Styled.technologies>
            {/* </div> */}
          </Styled.outerContainer>
          <Styled.outerContainer>
            <Styled.h2 style={{ textAlign: "center" }}>Our Projects</Styled.h2>
            <Projects />
          </Styled.outerContainer>
        </Styled.mainContainer>
        <Footer />
      </div>
    );
  }
}

const techStackStyles = (item, props) => {
  let widthVal = "";
  if (item === "/static/images/app-ads/fastlane.svg") {
    widthVal = "60px";
  } else if (
    item === "/static/images/app-ads/mixpanel-theme.svg" ||
    item === "/static/images/app-ads/firebase.svg"
  ) {
    widthVal = props.mq === "desktop" ? " 120px" : "100px";
  }

  return widthVal;
};

export default GoogleMobileAd;
