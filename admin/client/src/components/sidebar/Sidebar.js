import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
} from "./styles/Sidebar";

class Side extends Component {
  state = {
    content: [
      "Dashboard",
      "Attendees",
      "Add/Update Event",
      "Speakers",
      "CFP",
      "Chat"
    ],
    links: ["dashboard", "attendees", "event", "speakers", "cfp", "chat"],
    bottom_content: ["Profile", "Sign Out"],
    icons: [
      "bullhorn",
      "users",
      "calendar",
      "microphone",
      "paper-plane-o",
      "comment"
    ],
    bottom_icons: ["user", "sign-out"]
  };

  render() {
    const { icons, bottom_icons, links } = this.state;
    const items = this.state.content.map((item, index) => (
      <NavLink to={`/${links[index]}`} className="sidebar_link" activeClassName="sidebar_active">
        <DashboardListItem>
          <DashboardListIcon>
            <i className={`fa fa-${icons[index]}`} aria-hidden="true" />
          </DashboardListIcon>
          <DashboardListContent>{item}</DashboardListContent>
        </DashboardListItem>
      </NavLink>
    ));
    const bottom_items = this.state.bottom_content.map((item, index) => (
      <NavLink to="/" className="sidebar_link">
        <DashboardListItem>
          <DashboardListIcon>
            <i className={`fa fa-${bottom_icons[index]}`} aria-hidden="true" />
          </DashboardListIcon>
          <DashboardListContent>{item}</DashboardListContent>
        </DashboardListItem>
      </NavLink>
    ));
    return (
      <Sidebar>
        <LogoContainer />
        <DashboardList>{items}</DashboardList>
        <DashboardBottom>{bottom_items}</DashboardBottom>
      </Sidebar>
    );
  }
}

export default Side;
