import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Side from "../sidebar/Sidebar";
// import Select from "react-select";
import { Container, InnerContainer } from "../../styles/Commons";
import {
  TalkContainer,
  TalkHeading,
  FormGroup,
  TalkSubmitButton,
  NullInfo,
  Label
} from "../talk/styles/talk";
import CreatableSelect from "react-select/creatable";
import TalkInputField from "../talk/TalkInputField";
import TalkAreaField from "../talk/TalkAreaField";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Select from "react-select";
import { updateCurrentTalk } from "../../actions/talkActions";
import { getCurrentTalk, deleteCurrentTalk } from "../../actions/myTalkActions"
import MyTalkSpin from "./MyTalkSpin";
import isEmpty from "../../validation/isEmpty";
import Swal from "sweetalert2";


const audienceOptions = [
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Expert", label: "Expert" },
  { value: "All", label: "All" }
];

const durationOptions = [
  { value: "30 Minutes", label: "30 Minutes" },
  { value: "45 Minutes", label: "45 Minutes" },
  { value: "60 Minutes", label: "60 Minutes" },
  { value: "workshop", label: "Workshop (3 Hours)" }
];

class UpdateTalk extends Component {
  state = {
    title: "",
    elevatorPitch: "",
    talkDuration: "",
    audienceLevel: "",
    description: "",
    additionalDetails: "",
    outcome: "",
    wordCount: 0,
    tags: null,
    loading: true,
    talksLength: null,
    currentTalk: null,
    talkID: null
  };
  

  componentDidMount() {
    this.props.getCurrentTalk(this.props.talkID);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.myTalks.currentTalk !== prevState.currentTalk) {
      if (nextProps.myTalks.currentTalk !== null) {
        const {currentTalk} = nextProps.myTalks
        return {
          loading: false,
          currentTalk: currentTalk,
          title: currentTalk.title,
          elevatorPitch: currentTalk.elevatorPitch,
          talkDuration: currentTalk.talkDuration,
          audienceLevel: currentTalk.audienceLevel,
          description: currentTalk.description,
          additionalDetails: currentTalk.additionalDetails,
          outcome: currentTalk.outcome,
          tags: currentTalk.talkTags,
          talkID: currentTalk._id
        };
      }
    }
    return null;
  }

  handleChange = (newValue: any, actionMeta: any) => {
    // console.group("Value Changed");
    // console.log(newValue)
    if (actionMeta.name === "tags") {
      this.setState({
        [actionMeta.name]: newValue
      });
    } else {
      if (isEmpty(newValue)) {
        this.setState({
          [actionMeta.name]: ""
        })
      } else {
        this.setState({
          [actionMeta.name]: newValue.value
        });
      }
    }
    // console.log(`action: ${actionMeta.name}`);
    // console.groupEnd();
  };
  handleInputChange = (inputValue: any, actionMeta: any) => {
    // console.group("Input Changed");
    // console.log(inputValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // Restrict word limit in textarea
  setFormattedContent = (text, limit) => {
    let words = text.split(" ");
    if (words.filter(Boolean).length > limit) {
      this.setState({
        elevatorPitch: text
          .split(" ")
          .slice(0, limit)
          .join(" "),
        wordCount: limit
      });
    } else {
      this.setState({
        elevatorPitch: text,
        wordCount: words.filter(Boolean).length
      });
    }
  };
  // For limiting the characters
  //   text.length > limit
  //     ? this.setState({ elevatorPitch: text.slice(0, limit) })
  //     : this.setState({ elevatorPitch: text });
  // };
  onSubmitForm = event => {
    event.preventDefault();
    const newTalk = {
      talk: this.state.title,
      elevatorPitch: this.state.elevatorPitch,
      talkDuration: this.state.talkDuration,
      audienceLevel: this.state.audienceLevel,
      description: this.state.description,
      additionalDetails: this.state.additionalDetails,
      outcome: this.state.outcome,
      talkTags: this.state.tags
    };
    this.props.updateCurrentTalk(newTalk, this.state.talkID, this.props.history);
  };

  // Delete Talk
  onDeleteTalk = event => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.deleteCurrentTalk(this.state.talkID, this.props.history)
      }
    })
  }

  render() {
    const {
      title,
      elevatorPitch,
      talkDuration,
      audienceLevel,
      description,
      additionalDetails,
      outcome,
      wordCount,
      currentTalk,
      loading,
      tags
    } = this.state;

    const talkTag = !isEmpty(tags) ? tags :  []
    const audience = !isEmpty(audienceLevel) ?  { value: audienceLevel, label: audienceLevel } : []
    const talkDur = !isEmpty(talkDuration) ? [{ value: talkDuration, label: talkDuration }] : []
    
    return (
      <Container>
        <InnerContainer style={{'background': '#fff'}}>
          {currentTalk === null || loading ? (
            <MyTalkSpin />
          ) : (
            <TalkContainer>
             <TalkHeading>Modify Talk</TalkHeading>
                <form noValidate>
                <br />
                  <FormGroup>
                    <TalkInputField
                      placeholder="Talk Title"
                      name="title"
                      value={title}
                      onChange={this.onChange}
                      label="Title"
                      type="text"
                    />
                    <TalkAreaField
                      placeholder="Elevator Pitch in less than 100 words"
                      name="elevatorPitch"
                      value={elevatorPitch}
                      length={wordCount}
                      onChange={event =>
                        this.setFormattedContent(event.target.value, 100)
                      }
                      label="Elevator Pitch "
                      type="text"
                      limit={100}
                    />
                    <TalkAreaField
                      placeholder="Detailed Description of the talk"
                      name="description"
                      value={description}
                      onChange={this.onChange}
                      label="Talk description "
                      type="text"
                    />
                    <Label htmlFor="label">Audience Level</Label>
                    <Select
                      isClearable
                      onChange={this.handleChange}
                      onInputChange={this.handleInputChange}
                      options={audienceOptions}
                      id="dropdownSelect"
                      name="audienceLevel"
                      defaultValue={audience}
                    />
                    <Label htmlFor="label">Talk Duration</Label>
                    <Select
                      isClearable
                      onChange={this.handleChange}
                      onInputChange={this.handleInputChange}
                      options={durationOptions}
                      id="dropdownSelect"
                      name="talkDuration"
                      defaultValue={talkDur}
                    />
                    <Label htmlFor="label">Talk Tags</Label>
                    <Select
                      isMulti
                      name="tags"
                      options={durationOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      id="dropdownSelect"
                      onChange={this.handleChange}
                      onInputChange={this.handleInputChange}
                      defaultValue={tags}
                    />
                    <TalkAreaField
                      placeholder="Enter any additional detail here"
                      name="additionalDetails"
                      value={additionalDetails}
                      onChange={this.onChange}
                      label="Additional Details "
                      type="text"
                    />
                    <TalkAreaField
                      placeholder="Enter the outcome of the talk."
                      name="outcome"
                      value={outcome}
                      onChange={this.onChange}
                      label="Talk Outcome "
                      type="text"
                    />
                    <TalkSubmitButton onClick={this.onSubmitForm}>
                      Update Talk
                    </TalkSubmitButton>

                    <TalkSubmitButton style={{"background": "#e74c3c", "marginTop": "-7px !important"}} onClick={this.onDeleteTalk}>
                      Delete
                    </TalkSubmitButton>
                  </FormGroup>
                </form>
            </TalkContainer>
          )}
        </InnerContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  myTalks: state.mytalks
});

UpdateTalk.propTypes = {
  auth: PropTypes.object.isRequired,
  myTalks: PropTypes.object.isRequired,
  updateCurrentTalk: PropTypes.func.isRequired,
  getCurrentTalk: PropTypes.func.isRequired,
  deleteCurrentTalk: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getCurrentTalk, updateCurrentTalk, deleteCurrentTalk }
)(withRouter(UpdateTalk));
