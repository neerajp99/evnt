import React, { Component } from "react";
import { Link } from "react-router-dom";
import Side from "../sidebar/Sidebar";
import {
  DashboardTop,
  DashboardBottom,
  DashboardContainer,
  DashboardBottomBox,
  BottomFlex,
  Icon,
  IconText
} from "./styles/Dashboard";
import { Container, InnerContainer } from "../../styles/Commons";
import icon1 from "../../util/img/icon1.svg";
import icon2 from "../../util/img/icon2.svg";
import icon3 from "../../util/img/icon3.svg";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Side />
        <InnerContainer>
          <DashboardContainer>
            <DashboardTop />

            <DashboardBottom>
              <BottomFlex>
                <DashboardBottomBox>
                  <Icon>
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={icon1}
                      alt=""
                    />
                  </Icon>
                  <IconText><span style={{'color': '#fff'}}>Complete</span> profile. Your Profile section includes a form to add/update profile with personal details, social links and avatar.</IconText>
                </DashboardBottomBox>

                <DashboardBottomBox>
                  <Icon style={{ background: "#4ca1ff" }}>
                    <img
                      src={icon2}
                      style={{ height: "40px", width: "40px" }}
                      alt=""
                    />
                  </Icon>
                  <IconText><span style={{'color': '#fff'}}>Create</span> an eye-catchy talk with all the information. You can submit a maximum of three talks.</IconText>
                </DashboardBottomBox>

                <DashboardBottomBox>
                  <Icon>
                    <img
                      src={icon3}
                      style={{ height: "40px", width: "40px" }}
                      alt=""
                    />
                  </Icon>
                  <IconText><span style={{'color': '#fff'}}>Sit back and relax!</span> You will see the update on the talk if it's selected or not on the dashboard itself. </IconText>
                </DashboardBottomBox>

                <DashboardBottomBox />

                <DashboardBottomBox />
                <DashboardBottomBox />
              </BottomFlex>
            </DashboardBottom>
          </DashboardContainer>
        </InnerContainer>
      </Container>
    );
  }
}

export default Dashboard;
