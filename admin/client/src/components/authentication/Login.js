import React, { Component } from "react";
import styled from "styled-components";

class Login extends Component {
  render() {
    return (
      <Container>
        <Card>Hello World</Card>
        <Card>Go Back Simon</Card>
      </Container>
    );
  }
}

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  /* overflow-x: hidden; */
  /* grid-gap: 1rem; */
`;

const Card = styled.div`
  background: #f4f6f8;
  &:nth-child(1) {
    background: #1d2537;
  }
`;
