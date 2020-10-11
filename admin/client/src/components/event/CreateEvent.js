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
import axios from 'axios';
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
  EventSubmitButton,
  TravelAssistanceDiv,
  AddCollaboratorButton2
} from "./styles/EventForm";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "@material-ui/core/Checkbox";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createEvent, getEvent } from "../../actions/eventActions";
import PropTypes from "prop-types";
import isEmpty from "../../validation/isEmpty";
import Spin from "../../utils/Spinner";
import {
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
// import PlacesAutocomplete from "react-places-autocomplete";
import Swal from "sweetalert2";
const colors = require("nice-color-palettes");

class Event extends Component {
  state = {
    formHeading: "Create",
    title: "",
    description: "",
    website: "",
    location: "",
    gmapsLoaded: false,
    venue: "",
    additional: "",
    codeOfConduct: "",
    collaborators: ["NP", "DB", "MP", "JP", "KG"],
    collaborator: [{ value: null }],
    cfpDescription: "",
    cfpNotes: "",
    talkDurations: [{ value: null }],
    talkTags: "",
    startDate: new Date("2020-07-20T08:00:54"),
    endDate: new Date("2020-07-20T08:00:54"),
    facebook: "",
    twitter: "",
    linkedin: "",
    github: "",
    checked: true,
    travelAssistance: "",
    errors: {}
  };

  // componentDidMount lifecycle method to fetch event data
  componentDidMount() {
    this.props.getEvent();
  }

  // If there is a new prop and this is invoked right before calling the render method.
  // static getDerivedStateFromProps(nextProps, prevState) {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.event.event !== null) {
      if (nextProps.event.event) {
        console.log(nextProps.event.event);
        const current_event = nextProps.event.event;
        current_event.eventName = !isEmpty(current_event.eventName)
          ? current_event.eventName
          : "";
        current_event.eventVenue = !isEmpty(current_event.eventVenue)
          ? current_event.eventVenue
          : "";
        current_event.eventDescription = !isEmpty(
          current_event.eventDescription
        )
          ? current_event.eventDescription
          : "";
        current_event.eventWebsite = !isEmpty(current_event.eventWebsite)
          ? current_event.eventWebsite
          : "";
        current_event.eventBeginDate = !isEmpty(current_event.eventBeginDate)
          ? current_event.eventBeginDate
          : new Date("2020-07-20T08:00:54");
        current_event.eventEndDate = !isEmpty(current_event.eventEndDate)
          ? current_event.eventEndDate
          : new Date("2020-07-20T08:00:54");
        current_event.additionalDetails = !isEmpty(
          current_event.additionalDetails
        )
          ? current_event.additionalDetails
          : "";
        current_event.eventCodeOfConduct = !isEmpty(
          current_event.eventCodeOfConduct
        )
          ? current_event.eventCodeOfConduct
          : "";
        current_event.social = !isEmpty(current_event.social)
          ? current_event.social
          : {};
        current_event.facebook = !isEmpty(current_event.social.facebook)
          ? current_event.social.facebook
          : "";
        current_event.twitter = !isEmpty(current_event.social.twitter)
          ? current_event.social.twitter
          : "";
        current_event.linkedin = !isEmpty(current_event.social.linkedin)
          ? current_event.social.linkedin
          : "";
        current_event.github = !isEmpty(current_event.social.github)
          ? current_event.social.github
          : "";
        current_event.cfpDescription = !isEmpty(current_event.cfpDescription)
          ? current_event.cfpDescription
          : "";
        current_event.cfpNotes = !isEmpty(current_event.cfpNotes)
          ? current_event.cfpNotes
          : "";
        current_event.travelAssistance = !isEmpty(
          current_event.travelAssistance
        )
          ? current_event.travelAssistance
          : false;
        current_event.travelAssistancePolicy = !isEmpty(
          current_event.travelAssistancePolicy
        )
          ? current_event.travelAssistancePolicy
          : "";
        current_event.talkTags =
          !isEmpty(current_event.talkTags) &&
          Array.isArray(current_event.talktags)
            ? current_event.talkTags.join()
            : "";
        let tempDurations = [];
        if (!isEmpty(current_event.talkDuration)) {
          current_event.talkDuration.forEach(item => {
            tempDurations.push({ value: item.value });
          });
        }
        current_event.talkDuration = !isEmpty(current_event.talkDuration)
          ? tempDurations
          : [{ value: null }];

        // Set state according the values received from props
        this.setState({
          title: current_event.eventName,
          description: current_event.eventDescription,
          website: current_event.eventWebsite,
          venue: current_event.eventVenue,
          additional: current_event.additionalDetails,
          codeOfConduct: current_event.eventCodeOfConduct,
          cfpDescription: current_event.cfpDescription,
          cfpNotes: current_event.cfpNotes,
          talkDurations: current_event.talkDuration,
          talkTags: current_event.talkTags,
          startDate: current_event.eventBeginDate,
          endDate: current_event.eventEndDate,
          facebook: current_event.facebook,
          twitter: current_event.twitter,
          linkedin: current_event.linkedin,
          github: current_event.github,
          checked: current_event.travelAssistance,
          travelAssistance: current_event.travelAssistancePolicy
        });
      }
    }
  }

  // Method to call action and submit the form
  onSubmitForm = event => {
    console.log("ajajaja");
    event.preventDefault();
    const newEvent = {
      eventName: this.state.title,
      eventBeginDate: this.state.startDate,
      eventEndDate: this.state.endDate,
      eventVenue: this.state.venue,
      eventDescription: this.state.description,
      eventWebsite: this.state.website,
      eventCodeOfConduct: this.state.codeOfConduct,
      cfpDescription: this.state.cfpDescription,
      cfpNotes: this.state.cfpNotes,
      additionalDetails: this.state.additional,
      talkDuration: this.state.talkDurations,
      talkTags: this.state.talkTags,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      linkedin: this.state.linkedin,
      github: this.state.github,
      travelAssistance: this.state.checked,
      travelAssistancePolicy: this.state.travelAssistance
    };
    this.props.createEvent(newEvent, this.props.history);
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

  handleCheckBoxChange = event => {
    this.setState({
      checked: !this.state.checked
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
      github,
      travelAssistance
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
    const { event, loading } = this.props.event;

    return (
      <Container>
        <Side />
        <InnerContainer>
          {event === null || loading ? (
            <Spin />
          ) : (
            <React.Fragment>
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
                        name="twitter"
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
                      <Label htmlFor="label">Travel Assistance</Label>
                      <TravelAssistanceDiv>
                        <Checkbox
                          checked={this.state.checked}
                          onClick={this.handleCheckBoxChange}
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                        <p>
                          {" "}
                          Does your event provide travel assistance to speakers?
                        </p>
                      </TravelAssistanceDiv>
                      <EventInputField
                        placeholder="Enter the travel assistance policy, if any."
                        name="travelAssistance"
                        value={travelAssistance}
                        onChange={this.onChange}
                        label="Travel Assistance Policy"
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
                  <AddCollaboratorButton2 onClick={() => {
                    axios
                      .post("/api/events/sendEmail", {"collaborator": collaborator})
                      .then(data => {
                        if (data) {
                          this.setState({
                            collaborator: [{ value: null }]
                          })
                          Swal.fire(
                            'Sent!',
                            'Email(s) has been delivered to collaborators.',
                            'success'
                          )
                          
                        }
                      })
                      .catch(error => {
                        console.log(error)
                      })
                  }}>
                    SEND INVITE
                    <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" className="send_invite_icon"/>
                  </AddCollaboratorButton2>
                </CollaboratorsContainer>
                <EventSubmitButton onClick={this.onSubmitForm}>
                  {this.state.title !== "" ? "UPDATE EVENT" : "CREATE EVENT"}
                </EventSubmitButton>
              </EventCollaborators>
            </React.Fragment>
          )}
        </InnerContainer>
      </Container>
    );
  }
}

Event.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  createEvent: PropTypes.func.isRequired,
  getEvent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  event: state.event
});

export default connect(
  mapStateToProps,
  { createEvent, getEvent }
)(withRouter(Event));
