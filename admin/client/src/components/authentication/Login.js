import React, { Component } from "react";
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
  GoogleText
} from "../../styles/Forms";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  // onChange method
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
            <H1>Log in to Your Account</H1>
            <P>
              {" "}
              Login to your accoutn so that you can edit and submit talks for
              the conference.
            </P>
            <FormGroup>
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
              <LowerContainer>
                <LowerContainerDiv>
                  <Checkbox type="checkbox" id="box-3" />
                  <Label for="box-3" className="checkbox_label">
                    <Span>Remember me</Span>
                  </Label>
                </LowerContainerDiv>
                <LowerContainerDiv>Forgot Password?</LowerContainerDiv>
              </LowerContainer>
              <ButtonFill>Login</ButtonFill>
              <P>or sign in using</P>
              <ButtonEmpty>
                <GoogleImage />
                <GoogleText> Login Using Google</GoogleText>
              </ButtonEmpty>
            </FormGroup>
          </InnerContainer>
        </Card>
        <Card>Hello World</Card>
      </Container>
    );
  }
}

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  /* overflow-x: hidden; */
  /* grid-gap: 1rem; */
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
