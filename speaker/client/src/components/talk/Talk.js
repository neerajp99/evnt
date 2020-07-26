import React, { Component } from "react";
import { Link } from "react-router-dom";
import Side from "../sidebar/Sidebar";
import Select from "react-select";
import { Container, InnerContainer } from "../../styles/Commons";
import { TalkContainer, TalkHeading, FormGroup } from "./styles/talk";
import CreatableSelect from "react-select/creatable";
import TalkInputField from "./TalkInputField";
import TalkAreaField from "./TalkAreaField";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class Talk extends Component {
  state = {
    title: "",
    elevatorPitch: "",
    talkDuration: "",
    audienceLevel: "",
    description: "",
    additionalDetails: "",
    outcome: ""
  };

  handleChange = (newValue: any, actionMeta: any) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
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

  setFormattedContent = (text, limit) => {
    text.length > limit
      ? this.setState({ elevatorPitch: text.slice(0, limit) })
      : this.setState({ elevatorPitch: text });
  };

  render() {
    const {
      title,
      elevatorPitch,
      talkDuration,
      audienceLevel,
      description,
      additionalDetails,
      outcome
    } = this.state;
    return (
      <Container>
        <Side />
        <InnerContainer>
          <TalkContainer>
            <TalkHeading>Create Talk</TalkHeading>;
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
            </FormGroup>
          </TalkContainer>
        </InnerContainer>
      </Container>
    );
  }
}

export default Talk;
