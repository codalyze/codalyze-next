import CookieConsent from "react-cookie-consent";
import styled from "styled-components";

const CookieLink = styled.a`
  color: white;
  text-decoration: underline !important;
`;

export default class EUCookieConsent extends React.PureComponent {
  render() {
    return (
      <div>
        <CookieConsent
          location="bottom"
          buttonText="Accept Cookies"
          onAccept={() => {
            alert("Cookies have been accepted");
          }}
          onDecline={() => {
            alert("You have not accepted the cookies!!!");
          }}
          declineButtonText="Decline"
          cookieName="myAwesomeCookieName2"
          // enableDeclineButton={true}
          style={{ background: "rgba(0, 0, 0, .8)" }}
          declineButtonStyle={{
            backgroundColor: "#F0533B",
            color: "white",
            fontSize: "14px",
            borderRadius: "6px"
          }}
          buttonStyle={{
            backgroundColor: "#5cca8f",
            color: "white",
            fontSize: "14px",
            borderRadius: "6px"
          }}
          expires={150}
        >
          This website uses cookies to enhance your user experience. By using
          our website you agree to the use of{" "}
          <CookieLink target="_blank" href="/cookie-policy">
            {/* <CookieLink target="_blank" href="https://www.cookiesandyou.com/"> */}
            Cookies.
          </CookieLink>
        </CookieConsent>
      </div>
    );
  }
}
