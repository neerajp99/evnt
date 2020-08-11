import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Side from "../sidebar/Sidebar";
import { Container, InnerContainer } from "../../styles/Commons";
import {
  MyTalkContainer,
  MyTalkHeading,
  TalkContainer,
  TalkHeading,
  TalkDescription,
  TalkTags,
  TalkTag
} from "./styles/MyTalk.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMyTalks } from "../../actions/myTalkActions";
import isEmpty from "../../validation/isEmpty";

class MyTalk extends Component {
  state = {
    talks: {}
  };
  componentDidMount() {
    this.props.getMyTalks();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.myTalks.myTalks !== prevState.talks) {
      if (nextProps.myTalks.myTalks !== null) {
        console.log("NEXT", nextProps.myTalks.myTalks);
        return {
          talks: nextProps.myTalks.myTalks
        };
      }
    }
    return null;
  }
  render() {
    const { talks } = this.state;

    const content = Object.keys(talks).map((key, index) =>
    (
      <React.Fragment key={key}>
        <TalkContainer>
          <TalkHeading>{talks[key].description}</TalkHeading>
          <TalkDescription>{talks[key].elevatorPitch}</TalkDescription>
          <TalkTags>
            {talks[key].talkTags.map((tagKey, iindex) => (
              <TalkTag key={iindex} index={iindex}>{tagKey.value}</TalkTag>
            ))}
          </TalkTags>
        </TalkContainer>
      </React.Fragment>
    )
);

    return (
      <Container>
        <Side />
        <InnerContainer>
          <MyTalkContainer>
            <MyTalkHeading>Your Presentations</MyTalkHeading>
            {content}
          </MyTalkContainer>
        </InnerContainer>
      </Container>
    );
  }
}

MyTalk.propTypes = {
  auth: PropTypes.object.isRequired,
  myTalks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  myTalks: state.mytalks,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getMyTalks }
)(withRouter(MyTalk));
