import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputField from "../commons/InputField";
import {
  FormGroup,
  InnerContainer,
  H1,
  LowerContainer,
  P,
  Checkbox,
  Label,
  LowerContainerDiv,
  Span,
  ButtonFill,
  ButtonEmpty,
  GoogleImage,
  GoogleText,
  TwitterImage
} from "../../styles/Forms";

class Register extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <Container>
        <Card>
          <InnerContainer>
            <H1>Sign Up for an Account</H1>
            <P>
              {" "}
              Let's get you all setup for the so you can start submitting your
              talk for the conference.
            </P>
            <FormGroup>
              <InputField
                placeholder="Full Name"
                name="name"
                value={this.state.email}
                onChange={this.onChange}
                error={this.state.errors.email}
                label="Email"
              />
              <InputField
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                error={this.state.errors.email}
                label="Email"
              />
              <InputField
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                error={this.state.errors.password}
                label="Password"
              />
              <InputField
                placeholder="Confirm Password"
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
                error={this.state.errors.password2}
                label="Confirm Password"
              />
              <LowerContainer>
                <LowerContainerDiv>
                  <Checkbox type="checkbox" id="box-3" />
                  <Label for="box-3" className="checkbox_label">
                    <Span>
                      I agreed to all the statements included in{" "}
                      <Link className="link" to="/terms">
                        Terms of use
                      </Link>{" "}
                    </Span>
                  </Label>
                </LowerContainerDiv>
              </LowerContainer>
              <ButtonFill>Sign Up</ButtonFill>
              <P>or sign up using</P>
              <ButtonEmpty>
                <GoogleImage />
              </ButtonEmpty>
              <ButtonEmpty>
                <TwitterImage />
              </ButtonEmpty>
              <ButtonEmpty>
                <GoogleImage />
              </ButtonEmpty>
            </FormGroup>
          </InnerContainer>
        </Card>

        <Card />
      </Container>
    );
  }
}

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
`;

const Card = styled.div`
  /* min-height: 50vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #202b41;
  &:nth-child(1) {
    background: #1d2537;
  }
`;
