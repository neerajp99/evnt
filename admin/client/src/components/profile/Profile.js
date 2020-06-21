import React, { Component } from "react";
import { Link } from "react-router-dom";
import Side from "../sidebar/Sidebar"
import {
  Container,
  InnerContainer,
} from "../../styles/Commons";

class Profile extends Component {
  render() {
    return (
      <Container>
        <Side />
        <InnerContainer>Wowowow</InnerContainer>
      </Container>
    );
  }
}

export default Profile;
