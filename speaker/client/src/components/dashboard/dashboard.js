import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Side from "../sidebar/Sidebar";
import {
  DashboardTop,
  DashboardBottom,
  DashboardContainer,
  DashboardBottomBox,
  BottomFlex,
  Icon,
  IconText,
  DashboardCount,
  DashboardText,
  DashboardAvatar,
  DashboardGreetings,
  DashboardButtons,
    DashboardButton
} from "./styles/Dashboard";
import { Container, InnerContainer } from "../../styles/Commons";
import icon1 from "../../util/img/icon1.svg";
import icon2 from "../../util/img/icon2.svg";
import icon3 from "../../util/img/icon3.svg";
import { getDashboard } from "../../actions/dashboardActions.js";
import Spin from "../../util/Spinner";

class Dashboard extends Component {
  state = {
    dashboard: null,
    profile: null,
    loading: true,
    talkDetails: null,
    talksSelected: 0

  }

  componentDidMount() {
    this.props.getDashboard();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.dashboard.profile !== prevState.profile && nextProps.dashboard.talkDetails !== prevState.talkDetails) {
      if (nextProps.dashboard.profile !== null && nextProps.dashboard.talkDetails !== null) {
        return {
          dashboard: nextProps.dashboard,
          profile: true,
          talkDetails: nextProps.dashboard.talkDetails.length ,
          loading: false
        };
      }
    }
    return null;
  }

  render() {
    const {loading, profile, talkDetails, talksSelected, dashboard} = this.state
    return (
      <Container>
        <Side />
        <InnerContainer>
        {dashboard === null || loading ? (
          <Spin />
        ) : (
          <DashboardContainer>
            <DashboardTop>
              <DashboardAvatar />
              <DashboardGreetings>
                <span style={{ fontWeight: "600" }}>Welcome</span>{" "}
                <span>Neeraj!</span>
                <br />
                <p style={{ fontSize: "1.3rem" }}>
                  Your Personalised Speaker Dashboard.
                </p>
              </DashboardGreetings>
              <DashboardButtons>
                <DashboardButton>Event Website</DashboardButton>
              </DashboardButtons>
            </DashboardTop>

            <DashboardBottom>
              <DashboardBottomBox>
                <Icon>
                  <img
                    style={{ height: "40px", width: "40px" }}
                    src={icon1}
                    alt=""
                  />
                </Icon>
                <IconText>
                  <span style={{ color: "#fff" }}>Complete</span> profile. Your
                  Profile section includes a form to add/update profile with
                  personal details, social links and avatar.
                </IconText>
              </DashboardBottomBox>

              <DashboardBottomBox>
                <Icon style={{ background: "#4ca1ff" }}>
                  <img
                    src={icon2}
                    style={{ height: "40px", width: "40px" }}
                    alt=""
                  />
                </Icon>
                <IconText>
                  <span style={{ color: "#fff" }}>Create</span> an eye-catchy
                  talk with all the information. You can submit a maximum of
                  three talks.
                </IconText>
              </DashboardBottomBox>

              <DashboardBottomBox>
                <Icon>
                  <img
                    src={icon3}
                    style={{ height: "40px", width: "40px" }}
                    alt=""
                  />
                </Icon>
                <IconText>
                  <span style={{ color: "#fff" }}>Sit back and relax!</span> You
                  will see the update on the talk if it's selected or not on the
                  dashboard itself.{" "}
                </IconText>
              </DashboardBottomBox>

              <DashboardBottomBox>
                <DashboardCount color={"orange"}>{talksSelected}</DashboardCount>
                <DashboardText color={"orange"}>Talks Selected</DashboardText>
              </DashboardBottomBox>

              <DashboardBottomBox>
                <DashboardCount color="weird">{profile === null ? "NO" : "YES"}</DashboardCount>
                <DashboardText color={"weird"}>Profile Created</DashboardText>
              </DashboardBottomBox>
              <DashboardBottomBox>
                <DashboardCount color="orange">{talkDetails}</DashboardCount>
                <DashboardText color="orange">Talks Submitted</DashboardText>
              </DashboardBottomBox>
            </DashboardBottom>
          </DashboardContainer>
        )}
        </InnerContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(
  mapStateToProps,
  { getDashboard }
)(withRouter(Dashboard));

