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
import { FormGroup } from "./styles/EventForm";
import PlacesAutocomplete from "react-places-autocomplete";

class Event extends Component {
  state = {
    formHeading: "Create",
    title: "",
    description: "",
    website: "",
    location: "",
    gmapsLoaded: false,
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
  //   googleMapScriptElement.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBZRYSdid84Oy-cLLcP4-YepHfSNx4q4Z8&libraries=places&callback=initMap`;
  //   document
  //     .querySelector(`body`)
  //     .insertAdjacentElement(`beforeend`, googleMapScriptElement);
  // }

  render() {
    const { formHeading, title, description, website, location } = this.state;
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
                </FormGroup>
              </form>
            </FormContainer>
          </EventForm>
          <EventCollaborators>
            <CollaboratorsContainer>hahahaha</CollaboratorsContainer>
          </EventCollaborators>
        </InnerContainer>
      </Container>
    );
  }
}

export default Event;
