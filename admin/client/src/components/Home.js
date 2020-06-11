import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  HomeContainer,
  Sidebar,
  InnerContainer,
  DashboardList,
  DashboardListItem,
  LogoContainer,
  DashboardListIcon,
  DashboardListContent,
  DashboardBottom
} from "../styles/home/Home";

class Home extends Component {
  state = {
    content: ["Dashboard", "Attendees", "Add/Update Event", "Speakers", "CFP"],
    bottom_content: ["Profile", "Sign Out"],
    icons: ["bullhorn", "users", "calendar", "microphone", "paper-plane-o"],
    bottom_icons: ["user", "sign-out"]
  };

  render() {
    const { icons, bottom_icons } = this.state;
    const items = this.state.content.map((item, index) => (
      <Link to="/" className="sidebar_link">
        <DashboardListItem>
          <DashboardListIcon>
            <i className={`fa fa-${icons[index]}`} aria-hidden="true" />
          </DashboardListIcon>
          <DashboardListContent>{item}</DashboardListContent>
        </DashboardListItem>
      </Link>
    ));
    const bottom_items = this.state.bottom_content.map((item, index) => (
      <Link to="/" className="sidebar_link">
        <DashboardListItem>
          <DashboardListIcon>
            <i className={`fa fa-${bottom_icons[index]}`} aria-hidden="true" />
          </DashboardListIcon>
          <DashboardListContent>{item}</DashboardListContent>
        </DashboardListItem>
      </Link>
    ));
    return (
      <HomeContainer>
        <Sidebar>
          <LogoContainer />
          <DashboardList>{items}</DashboardList>
          <DashboardBottom>{bottom_items}</DashboardBottom>
        </Sidebar>
        <InnerContainer>Wowowow</InnerContainer>
      </HomeContainer>
    );
  }
}

export default Home;
