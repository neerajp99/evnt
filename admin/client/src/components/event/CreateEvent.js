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
  AddCollaboratorButton
} from "./styles/EventForm";
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
  onClickAdd = event => {
    const values = [...this.state.collaborator];
    values.push({ value: null });
    this.setState({
      collaborator: values
    });
  };

  // Set state on change of event
  onHandleChange = (index, event) => {
    const values = [...this.state.collaborator];
    values[index].value = event.target.value;
    this.setState({
      collaborator: values
    });
  };

  // Delete the spcific key value pair from the colaborator state
  onDeleteContent = key => {
    console.log(key);
    const values = [...this.state.collaborator];
    values.splice(key, 1);
    this.setState({
      collaborator: values
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
      collaborator
    } = this.state;

    // Create component for Collaborators tag box
    const tags = collaborators.map((item, index) => {
      let x = `${colors[Math.floor(Math.random() * Math.floor(10))][index]}`;
      return (
        <CollaboratorTagBox key={index} style={{ backgroundColor: x }}>
          <div style={{ color: "black" }}> {item}</div>
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
            onChange={e => this.onHandleChange(index, e)}
            type="text"
            classname="collab_input"
          />
          {Object.keys(collaborator).length > 1 ? (
            <FontAwesomeIcon
              onClick={() => {
                this.onDeleteContent(index);
              }}
              className="trash_icon"
              icon={faBan}
              aria-hidden="true"
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                this.onDeleteContent(index);
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
                  <EventInputField
                    placeholder="Event Dates"
                    name="date"
                    value={date}
                    onChange={this.onChange}
                    label="Event Dates"
                    type="text"
                  />
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
              <AddCollaboratorButton onClick={this.onClickAdd}>
                Add MORE
              </AddCollaboratorButton>
            </CollaboratorsContainer>
          </EventCollaborators>
        </InnerContainer>
      </Container>
    );
  }
}

export default Event;
