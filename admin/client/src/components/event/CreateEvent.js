import React, { Component } from "react";
import { Container, InnerContainer } from "../../styles/Commons";
import {
  EventForm,
  EventCollaborators,
  FormContainer,
  CollaboratorsContainer,
  FormHeading
} from "./styles/Event";
import Side from "../sidebar/Sidebar";
import EventInputField from "./EventInputField";
import EventTextArea from "./EventTextArea";
import {
  FormGroup,
  EventCollaboratorsHeading,
  CollaboratorsTag,
  CollaboratorTagBox,
  AddMoreCollaboratorBox,
  CollaboratorLabel,
  AddCollaborators,
  AddCollaboratorButton,
  CfpHeading,
  Label,
  TalkDurationDiv,
  TalkDurationAddButton,
  EventDateDiv,
  SocialHeading,
  EventSubmitButton
} from "./styles/EventForm";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

// import PlacesAutocomplete from "react-places-autocomplete";
const colors = require("nice-color-palettes");

class Event extends Component {
  state = {
    formHeading: "Create",
    title: "",
    description: "",
    website: "",
    location: "",
    gmapsLoaded: false,
    date: "",
    venue: "",
    additional: "",
    codeOfConduct: "",
    collaborators: ["NP", "DB", "MP", "JP", "KG"],
    collaborator: [{ value: null }],
    cfpDescription: "",
    cfpNotes: "",
    talkDurations: [{ value: null }],
    talktags: "",
    startDate: new Date("2020-07-20T08:00:54"),
    endDate: new Date("2020-07-20T08:00:54"),
    facebook: "",
    twitter: "",
    linkedin: "",
    gihtub: "",
    errors: {}
  };

  // onchange function to change input state
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // select location from the suggestion
  // handleSelect = async value => {};

  // Set the location
  // setLocation = location => {
  //   this.setState({
  //     location
  //   });
  // };

  // Change state for PlacesAutoComplete
  // initMap = () => {
  //   this.setState({
  //     gmapsLoaded: true
  //   });
  // };

  // Load the google map, on page load (if you are using google maps api)
  // componentDidMount() {
  //   window.initMap = this.initMap;
  //   const googleMapScriptElement = document.createElement(`script`);
  //   googleMapScriptElement.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap`;
  //   document
  //     .querySelector(`body`)
  //     .insertAdjacentElement(`beforeend`, googleMapScriptElement);
  // }

  // Method to add more input fields
  onClickCollaboratorAdd = event => {
    const values = [...this.state.collaborator];
    values.push({ value: null });
    this.setState({
      collaborator: values
    });
  };

  // Set state on change of event
  onHandleCollaboratorChange = (index, event) => {
    const values = [...this.state.collaborator];
    values[index].value = event.target.value;
    this.setState({
      collaborator: values
    });
  };

  // Delete the spcific key value pair from the colaborator state
  onDeleteCollaboratorContent = key => {
    const values = [...this.state.collaborator];
    values.splice(key, 1);
    this.setState({
      collaborator: values
    });
  };

  // Method to trigger whenever the user clicks to add another field for talk duration
  onClickDurationAdd = event => {
    const values = [...this.state.talkDurations];
    values.push({ value: null });
    this.setState({
      talkDurations: values
    });
  };

  // Method to delete a talk duration field
  onDeleteDurationContent = key => {
    const values = [...this.state.talkDurations];
    values.splice(key, 1);
    this.setState({
      talkDurations: values
    });
  };

  // Method to update state of the input field for talk duration
  onHandleDurationChange = (index, event) => {
    const values = [...this.state.talkDurations];
    values[index].value = event.target.value;
    this.setState({
      talkDurations: values
    });
  };

  handleStartDateChange = (date, event) => {
    this.setState({
      startDate: date
    });
  };

  handleEndDateChange = (date, event) => {
    this.setState({
      endDate: date
    });
  };

  render() {
    const {
      formHeading,
      title,
      description,
      website,
      location,
      date,
      venue,
      additional,
      codeOfConduct,
      collaborators,
      collaborator,
      cfpDescription,
      cfpNotes,
      talkDurations,
      talkTags,
      facebook,
      twitter,
      linkedin,
      github
    } = this.state;

    // Create component for Collaborators tag box
    const tags = collaborators.map((item, index) => {
      let x = `${colors[Math.floor(Math.random() * Math.floor(10))][index]}`;
      // <CollaboratorTagBox color={index} key={index} style={{ backgroundColor: x }}>
      return (
        <CollaboratorTagBox color={index} key={index}>
          <div> {item}</div>
        </CollaboratorTagBox>
      );
    });

    const items = collaborator.map((collab, index) => {
      return (
        <React.Fragment key={index}>
          <EventInputField
            placeholder="Collaborator's Email ID"
            name="collaborator"
            value={collab.value || ""}
            onChange={e => this.onHandleCollaboratorChange(index, e)}
            type="text"
            classname="collab_input"
          />
          {Object.keys(collaborator).length > 1 ? (
            <FontAwesomeIcon
              onClick={() => {
                this.onDeleteCollaboratorContent(index);
              }}
              className="trash_icon"
              icon={faBan}
              aria-hidden="true"
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                this.onDeleteCollaboratorContent(index);
              }}
              className="trash_icon trash_icon_hidden"
              icon={faBan}
              aria-hidden="true"
            />
          )}
        </React.Fragment>
      );
    });

    // Talk Duration content
    const talkTimes = talkDurations.map((time, index) => {
      return (
        <React.Fragment key={index}>
          <EventInputField
            placeholder="eg: 45 minutes"
            name="talkDurations"
            value={time.value || ""}
            onChange={event => this.onHandleDurationChange(index, event)}
            type="text"
          />
          {Object.keys(talkDurations).length > 1 ? (
            <FontAwesomeIcon
              onClick={() => {
                this.onDeleteDurationContent(index);
              }}
              className="trash_icon"
              icon={faBan}
              aria-hidden="true"
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                this.onDeleteDurationContent(index);
              }}
              className="trash_icon trash_icon_hidden"
              icon={faBan}
              aria-hidden="true"
            />
          )}
        </React.Fragment>
      );
    });

    return (
      <Container>
        <Side />
        <InnerContainer>
          <EventForm>
            <FormContainer>
              <FormHeading>{formHeading} Event</FormHeading>
              <form noValidate>
                <FormGroup>
                  <EventInputField
                    placeholder="Event Title"
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    label="Title"
                    type="text"
                  />
                  <EventTextArea
                    placeholder="Event Description"
                    name="description"
                    value={description}
                    onChange={this.onChange}
                    label="Description"
                    type="text"
                  />
                  <EventInputField
                    placeholder="Event Website"
                    name="website"
                    value={website}
                    onChange={this.onChange}
                    label="Website"
                    type="text"
                  />
                  {/*  {this.state.gmapsLoaded && (
                    <PlacesAutocomplete
                      name="location"
                      value={location}
                      onChange={this.setLocation}
                      onSelect={this.handleSelect}
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading
                      }) => (
                        <div>
                          <input
                            {...getInputProps({
                              placeholder: "Search Location ..."
                            })}
                          />
                          <div>
                            {loading && <div>Loading...</div>}
                            {getInputProps}
                            {suggestions.map(suggestion => (
                              <div> hello world</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  )}
              */}
                  <EventInputField
                    placeholder="Event Venue"
                    name="venue"
                    value={venue}
                    onChange={this.onChange}
                    label="Venue"
                    type="text"
                  />
                  <Label htmlFor="label">Event Start Date</Label>
                  <EventDateDiv>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        format="MM/dd/yyyy"
                        value={this.state.startDate}
                        onChange={this.handleStartDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date"
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </EventDateDiv>
                  <Label htmlFor="label">Event End Date</Label>
                  <EventDateDiv>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        format="MM/dd/yyyy"
                        value={this.state.endDate}
                        onChange={this.handleEndDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date"
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </EventDateDiv>
                  <EventTextArea
                    placeholder="Other information regarding the event. "
                    name="additional"
                    value={additional}
                    onChange={this.onChange}
                    label="Additional Information"
                    type="text"
                  />
                  <EventTextArea
                    placeholder="While a code of conduct is not required for your event, we highly recommend you have one."
                    name="codeOfConduct"
                    value={codeOfConduct}
                    onChange={this.onChange}
                    label="Event Code of Conduct"
                    type="text"
                  />
                  <CfpHeading>CFP Details</CfpHeading>
                  <EventTextArea
                    placeholder="Call for proposal description."
                    name="cfpDescription"
                    value={cfpDescription}
                    onChange={this.onChange}
                    label="CFP Description"
                    type="text"
                  />
                  <EventTextArea
                    placeholder="While a call for proposal note is not required for your event, we highly recommend you have one."
                    name="cfpNotes"
                    value={cfpNotes}
                    onChange={this.onChange}
                    label="CFP Notes"
                    type="text"
                  />
                  <EventInputField
                    placeholder="Add tags seperated by a comma"
                    name="talkTags"
                    value={talkTags}
                    onChange={this.onChange}
                    label="Talk Tags"
                    type="text"
                  />
                  <Label htmlFor="label">Talk Duration</Label>
                  <TalkDurationDiv>{talkTimes}</TalkDurationDiv>
                  <TalkDurationAddButton onClick={this.onClickDurationAdd}>
                    {" "}
                    Add More{" "}
                  </TalkDurationAddButton>
                  <SocialHeading>Social Media Accounts</SocialHeading>
                  <EventInputField
                    placeholder="eg: https://facebook.com/name"
                    name="facebook"
                    value={facebook}
                    onChange={this.onChange}
                    label="Facebook"
                    type="text"
                  />
                  <EventInputField
                    placeholder="eg: https://twitter.com.name"
                    name="linkedin"
                    value={twitter}
                    onChange={this.onChange}
                    label="Twitter"
                    type="text"
                  />
                  <EventInputField
                    placeholder="eg: https://linkedin.com/name"
                    name="linkedin"
                    value={linkedin}
                    onChange={this.onChange}
                    label="Linkedin"
                    type="text"
                  />
                  <EventInputField
                    placeholder="eg: https://github.com/name"
                    name="github"
                    value={github}
                    onChange={this.onChange}
                    label="Github"
                    type="text"
                  />
                </FormGroup>
              </form>
            </FormContainer>
          </EventForm>
          <EventCollaborators>
            <CollaboratorsContainer>
              <EventCollaboratorsHeading>
                Add/Manage Team Members
              </EventCollaboratorsHeading>
              <CollaboratorLabel>Current Members</CollaboratorLabel>
              <CollaboratorsTag>
                {tags}
                {/*<AddMoreCollaboratorBox>+</AddMoreCollaboratorBox>*/}
              </CollaboratorsTag>
              <CollaboratorLabel style={{ marginTop: "6vh" }}>
                Add Members
              </CollaboratorLabel>
              <AddCollaborators>{items}</AddCollaborators>
              <AddCollaboratorButton onClick={this.onClickCollaboratorAdd}>
                Add MORE
              </AddCollaboratorButton>
            </CollaboratorsContainer>
            <EventSubmitButton>CREATE EVENT</EventSubmitButton>
          </EventCollaborators>
        </InnerContainer>
      </Container>
    );
  }
}

export default Event;
