import React, { PureComponent } from "react";
import * as Styled from "./styles";

export default class ContactForm extends PureComponent {
  render() {
    return (
      <Styled.containerFluid id="contact-form">
        <Styled.container>
          <Styled.formHead>
            {this.props.contactTitle
            ? this.props.contactTitle
            : `We'd love hear all about your project. Send over your \n
            details and we will take it from there.`
            }
          </Styled.formHead>
          <Styled.inputDiv>
            <Styled.Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={this.props.data.name || ""}
              onChange={e => this.props.onChangeText(e)}
              fullWidth={this.props.fullWidth}
            />
          </Styled.inputDiv>
          <Styled.inputDiv>
            <Styled.Input
              type="email"
              name="email"
              placeholder="Email address"
              value={this.props.data.email || ""}
              onChange={e => this.props.onChangeText(e)}
              error={this.props.emailError}
              fullWidth={this.props.fullWidth}
            />
            {this.props.emailError && (
              <Styled.errorMessage>
                That's not a valid email :(
              </Styled.errorMessage>
            )}
          </Styled.inputDiv>
          {this.props.contractStaffing && (
            <Styled.inputDiv>
              <Styled.Input
                type="text"
                name="organisation"
                placeholder="Organisation"
                value={this.props.data.organisation || ""}
                onChange={e => this.props.onChangeText(e)}
                fullWidth={this.props.fullWidth}
              />
            </Styled.inputDiv>
          )}
          <Styled.inputDiv>
            <Styled.Input
              type="tel"
              id="phone"
              name="phone"
              value={this.props.data.phone || ""}
              placeholder="And finally, your contact number"
              onChange={e => this.props.onChangeText(e)}
              fullWidth={this.props.fullWidth}
            />
          </Styled.inputDiv>
          <Styled.inputDiv>
            <Styled.TextArea
              rows="3"
              type="text"
              id="message"
              name="message"
              value={this.props.data.message || ""}
              placeholder="Any other details?"
              onChange={e => this.props.onChangeText(e)}
              fullWidth={this.props.fullWidth}
            />
          </Styled.inputDiv>
            <Styled.ButtonWrapper
              disabled={
                this.props.emailError ||
                !(this.props.data && this.props.data.email)
              }
              onClick={() => this.props.onClickSendRequest()}
            >
              SEND REQUEST
            </Styled.ButtonWrapper>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}
