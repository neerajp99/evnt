import React, { Component } from "react";
import { Link } from "react-router-dom";
import Side from "../sidebar/Sidebar";
import { Container, InnerContainer } from "../../styles/Commons";
import {
  CfpTop,
  CfpBottom,
  CfpDetailsLeft,
  CfpDetailsRight,
  CfpDescription,
  DottedCircle
} from "./styles/Cfp";

class Cfp extends Component {
  render() {
    return (
      <Container>
        <Side />
        <InnerContainer>
          <CfpDescription>
            <CfpTop>
            <DottedCircle> vs </DottedCircle>
            </CfpTop>
            <CfpBottom>
              <CfpDetailsLeft />
              <CfpDetailsRight />
            </CfpBottom>
          </CfpDescription>
        </InnerContainer>
      </Container>
    );
  }
}

export default Cfp;
