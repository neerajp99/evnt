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
  TalkTag,
  NullInfo
} from "./styles/MyTalk.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMyTalks } from "../../actions/myTalkActions";
import isEmpty from "../../validation/isEmpty";
import Spin from "../../util/Spinner";

class MyTalk extends Component {
  state = {
    talks: [],
    loading: true
  };
  componentDidMount() {
    this.props.getMyTalks();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.myTalks.myTalks !== prevState.talks) {
      if (nextProps.myTalks.myTalks !== null) {
        console.log("NEXT", nextProps);
        return {
          talks: nextProps.myTalks.myTalks,
          loading: false
        };
      }
    }
    return null;
  }
  render() {
    const { talks, loading } = this.state;

    const content = Object.keys(talks).map((key, index) => (
      <React.Fragment key={key}>
        <TalkContainer>
          <TalkHeading>{talks[key].title}</TalkHeading>
          <TalkDescription>{talks[key].elevatorPitch}</TalkDescription>
          <TalkTags>
            {talks[key].talkTags.map((tagKey, iindex) => (
              <TalkTag key={iindex} index={iindex}>
                {tagKey.value}
              </TalkTag>
            ))}
          </TalkTags>
        </TalkContainer>
      </React.Fragment>
    ));

    return (
      <Container>
        <Side />
        <InnerContainer>
          {talks === null || loading ? (
            <Spin />
          ) : (
            <MyTalkContainer>
              <MyTalkHeading>Your Presentations</MyTalkHeading>
              {talks.length === 0 && <NullInfo>You haven't submitted any talk yet!</NullInfo>}
              {content}
            </MyTalkContainer>
          )}
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
