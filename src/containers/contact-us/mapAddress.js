import React from "react";
import * as Styled from "./styles";

const Contact = prop => (
  <Styled.locationBlock>
    <Styled.h5>{prop.heading}</Styled.h5>
    <Styled.h6>{prop.children}</Styled.h6>
    <Styled.a href={prop.href}>{prop.link}</Styled.a>
  </Styled.locationBlock>
);

export default class MapAddress extends React.Component {
  render() {
    return (
      <Styled.containerFluid>
        <Styled.locationRow>
          <Styled.blocks>
            <Styled.img src="../static/images/mapImage.png" />
          </Styled.blocks>
          <Styled.blocks>
            <Contact
              heading={"Email"}
              link={"mail@codalyze.com"}
              href={"mailto:mail@codalyze.com"}
            />
            <Contact
              heading={"Phone"}
              link={"+91 - 9833-692503"}
              href={"tel:+91-9833-692503"}
            />
            <Contact heading={"Business Address"}>
              Codalyze Technologies, Work Square 1st Floor,
              <br /> Urmi Corporate Park, Saki Vihar Road, Mumbai - 400072.
              India.
            </Contact>
            <Styled.getDirection>Get Directions</Styled.getDirection>
          </Styled.blocks>
        </Styled.locationRow>
      </Styled.containerFluid>
    );
  }
}
