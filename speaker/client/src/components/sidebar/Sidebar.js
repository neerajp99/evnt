import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  faHome,
  faUsers,
  faAddressCard,
  faMicrophone,
  faBullhorn,
  faComment,
  faUser,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Sidebar,
  DashboardList,
  DashboardListItem,
  LogoContainer,
  DashboardListIcon,
  DashboardListContent,
  DashboardBottom
} from "./styles/Sidebar";

class Side extends Component {
  state = {
    content: ["Dashboard", "Talk", "CFP Guidelines", "My Talks"],
    links: ["dashboard", "talk", "cfp", "myTalks"],
    bottom_content: ["Profile", "Sign Out"],
    bottom_links: ["profile", "signout"],
    icons: [faHome, faMicrophone, faBullhorn, faComment],
    bottom_icons: [faUser, faSignOutAlt]
  };

  render() {
    const { icons, bottom_icons, links, bottom_links } = this.state;
    const items = this.state.content.map((item, index) => (
      <NavLink
        key={index}
        to={`/${links[index]}`}
        className="sidebar_link"
        activeClassName="sidebar_active"
      >
        <DashboardListItem>
          <DashboardListIcon>
            <FontAwesomeIcon icon={icons[index]} aria-hidden="true" />
          </DashboardListIcon>
          <DashboardListContent>{item}</DashboardListContent>
        </DashboardListItem>
      </NavLink>
    ));
    const bottom_items = this.state.bottom_content.map((item, index) => (
      <NavLink
        to={`/${bottom_links[index]}`}
        className="sidebar_link"
        activeClassName="sidebar_active"
        key={index}
      >
        <DashboardListItem>
          <DashboardListIcon>
            <FontAwesomeIcon icon={bottom_icons[index]} aria-hidden="true" />
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
