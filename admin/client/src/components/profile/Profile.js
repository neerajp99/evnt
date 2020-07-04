import React, { Component } from "react";
import { Link } from "react-router-dom";
import Side from "../sidebar/Sidebar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import PropTypes from "prop-types";
import isEmpty from "../../validation/isEmpty";
import Spin from "../../utils/Spinner";
import {
  ProfileContainer,
  ProfileUpperContent,
  ProfileDetails,
  ProfileHeading,
  Profilepara,
  FormGroup,
  InputDiv,
  ProfileButton
} from "./styles/Profile";
import ProfileInputField from "./ProfileInputField";
import ProfileTextArea from "./ProfileTextArea";
import { Container, InnerContainer } from "../../styles/Commons";

class Profile extends Component {
  state = {
    contact: "",
    website: "",
    handle: "",
    organisation: "",
    bio: "",
    twitter: "",
    facebook: "",
    github: "",
    linkedin: ""
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  // Update state for each input field
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // Submit FormGroup
  onSubmit = event => {
    event.preventDefault();
    const profileData = {
      contact: this.state.contact,
      website: this.state.website,
      handle: this.state.handle,
      organisation: this.state.organisation,
      bio: this.state.bio,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      github: this.state.github,
      linkedin: this.state.linkedin,
      check: ""
    };
    this.props.createProfile(profileData, this.props.history);
  };

  // If there is a new prop and this is invoked right before calling the render method.
  // static getDerivedStateFromProps(nextProps, prevState) {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile !== null) {
      if (nextProps.profile.profile) {
        const profile = nextProps.profile.profile;
        profile.contact = !isEmpty(profile.contact) ? profile.contact : "";
        profile.website = !isEmpty(profile.website) ? profile.website : "";
        profile.handle = !isEmpty(profile.handle) ? profile.handle : "";
        profile.organisation = !isEmpty(profile.organisation)
          ? profile.organisation
          : "";
        profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
        profile.social = !isEmpty(profile.social) ? profile.social : {};
        profile.twitter = !isEmpty(profile.social.twitter)
          ? profile.social.twitter
          : "";
        profile.facebook = !isEmpty(profile.social.facebook)
          ? profile.social.facebook
          : "";
        profile.github = !isEmpty(profile.social.github)
          ? profile.social.github
          : "";
        profile.linkedin = !isEmpty(profile.social.linkedin)
          ? profile.social.linkedin
          : "";

        // Update the state with the new state received
        this.setState({
          contact: profile.contact,
          website: profile.website,
          handle: profile.handle,
          organisation: profile.organisation,
          bio: profile.bio,
          twitter: profile.twitter,
          facebook: profile.facebook,
          github: profile.github,
          linkedin: profile.linkedin
        });
      }
    } else return null;
  }
  render() {
    const {
      contact,
      website,
      handle,
      organisation,
      bio,
      twitter,
      facebook,
      github,
      linkedin
    } = this.state;

    const { profile, loading } = this.props.profile;

    // console.log(this.state)
    return (
      <Container>
        <Side />
        <InnerContainer>
          {profile === null || loading ? (
            <Spin />
          ) : (
            <ProfileContainer>
              <ProfileUpperContent>
                <ProfileHeading>Personal Details</ProfileHeading>
                <Profilepara>
                  {" "}
                  Here you can edit your profile, add/update social media
                  details and more.
                </Profilepara>
              </ProfileUpperContent>
              <ProfileDetails>
                <form noValidate onSubmit={this.onSubmit}>
                  <FormGroup>
                    <InputDiv>
                      <ProfileInputField
                        name="name"
                        value={this.props.auth.user.name}
                        onChange={this.onChange}
                        placeholder="Name"
                        type="text"
                        label="* User Name"
                      />
                    </InputDiv>
                    <InputDiv>
                      <ProfileInputField
                        name="email"
                        value={this.props.auth.user.email}
                        onChange={this.onChange}
                        placeholder="Email Address"
                        type="text"
                        label="* User Email Address"
                      />
                    </InputDiv>
                    <InputDiv>
                      <ProfileInputField
                        name="contact"
                        value={contact}
                        onChange={this.onChange}
                        placeholder="Contact Number"
                        type="text"
                        label="User Contact Number"
                      />
                    </InputDiv>
                    <InputDiv>
                      <ProfileInputField
                        name="website"
                        value={website}
                        onChange={this.onChange}
                        placeholder="Website"
                        type="text"
                        label="User Website"
                      />
                    </InputDiv>
                    <InputDiv>
                      <ProfileInputField
                        name="handle"
                        value={handle}
                        onChange={this.onChange}
                        placeholder="User Handle"
                        type="text"
                        label="* User Handle"
                      />
                    </InputDiv>
                    <InputDiv>
                      <ProfileInputField
                        name="organisation"
                        value={organisation}
                        onChange={this.onChange}
                        placeholder="Organisation"
                        type="text"
                        label="User Organisation"
                      />
                    </InputDiv>
                    <ProfileTextArea
                      name="bio"
                      value={bio}
                      onChange={this.onChange}
                      placeholder="Enter a short Biography about yourself"
                      type="text"
                      label="* Biography"
                    />
                    <InputDiv>
                      <ProfileInputField
                        name="twitter"
                        value={twitter}
                        onChange={this.onChange}
                        placeholder="Twitter handle"
                        type="text"
                        label="Twitter"
                      />
                    </InputDiv>
                    <InputDiv>
                      <ProfileInputField
                        name="facebook"
                        value={facebook}
                        onChange={this.onChange}
                        placeholder="Facebook handle"
                        type="text"
                        label="Facebook"
                      />
                    </InputDiv>
                    <InputDiv>
                      <ProfileInputField
                        name="github"
                        value={github}
                        onChange={this.onChange}
                        placeholder="Github handle"
                        type="text"
                        label="Gihtub"
                      />
                    </InputDiv>
                    <InputDiv>
                      <ProfileInputField
                        name="linkedin"
                        value={linkedin}
                        onChange={this.onChange}
                        placeholder="Linkedin handle"
                        type="text"
                        label="Linkedin"
                      />
                    </InputDiv>
                    <ProfileButton type="submit">
                      {this.state.handle !== ""
                        ? "Update Profile"
                        : "Save Profile"}
                    </ProfileButton>
                  </FormGroup>
                </form>
              </ProfileDetails>
            </ProfileContainer>
          )}
        </InnerContainer>
      </Container>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(Profile));
