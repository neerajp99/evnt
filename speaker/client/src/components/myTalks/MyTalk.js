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

class MyTalk extends Component {
    state = {
        talks: {}
    }
  componentDidMount() {
    this.props.getMyTalks();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
      // if(nextProps.myTalks !== prevState.talks)
     console.log(nextProps)
     console.log(prevState)
      return {
          talks: nextProps
      }
  }
  // UNSAFE_componentWillReceiveProps(nextProps){
  //     console.log(nextProps)
  // }
  render() {
      console.log(this.state)
    return (
      <Container>
        <Side />
        <InnerContainer>
          <MyTalkContainer>
            <MyTalkHeading>Your Presentations</MyTalkHeading>
            <TalkContainer>
              <TalkHeading>
                Once accepted, we will have more questions and details for you.
              </TalkHeading>
              <TalkDescription>
                "Please share any notes about your session with us or anything
                that simply didn't fit within the constraints of the form above.
                Do you have any special requirements or needs (e.g. I need a
                table for the extra hardware during my session or it would be
                great if everyone in the audience was wearing a hat during my
                session... both of these examples are real from past sessions!).
                For HalfStack Online, let us know if you need a better camera,
                mic, lighting, etc. and we'll see what we can fit within our
                budget!""
              </TalkDescription>
              <TalkTags>
                <TalkTag>hello</TalkTag>
              </TalkTags>
            </TalkContainer>
          </MyTalkContainer>
        </InnerContainer>
      </Container>
    );
  }
}

MyTalk.propTypes = {
  auth: PropTypes.object.isRequired,
  myTalks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  myTalks: state.myTalks,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getMyTalks }
)(withRouter(MyTalk));
