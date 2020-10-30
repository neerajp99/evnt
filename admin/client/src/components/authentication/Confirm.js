import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  InnerContainer,
  SuccessBox,
  IconBox,
  ConfirmDiv,
  ConfirmContainer,
  SuccessFirst,
  SuccessSecond,
  SuccessButton
} from "./styles/Forms";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spin from "../../utils/Spinner";
import styled from "styled-components";
class Confirm extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const paramsString = this.props.history.location.pathname.slice(9);
    axios
      .post(`/api/check/confirmEmail/${paramsString}`)
      .then(response => {
        if (response !== null || response !== undefined) {
          this.setState({
            loading: false
          });
          toast.success("Email address has been confirmed!", {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        } else {
          this.props.history.push("/login");
        }
      })
      .catch(error => {
        this.props.history.push("/login");
      });
  }

  render() {
    const { loading } = this.state;
    return (
      <Container>
        {loading ? (
          <Spin />
        ) : (
          <React.Fragment>
            <Card>
              <InnerContainer>
                <ConfirmDiv>
                  <ConfirmContainer>
                    <ToastContainer
                      position="top-center"
                      autoClose={10000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
                  </ConfirmContainer>
                </ConfirmDiv>
                <SuccessBox>
                  <IconBox>
                    <FontAwesomeIcon
                      className="successIcon"
                      icon={faCheckCircle}
                      aria-hidden="true"
                    />
                  </IconBox>
                  <SuccessFirst>
                    Email Address has been confirmed successfully!
                  </SuccessFirst>
                  <SuccessSecond>
                    You can now login and start your journey.
                  </SuccessSecond>
                  <SuccessButton
                    onClick={() => this.props.history.push(`/login`)}
                  >
                    Login
                  </SuccessButton>
                </SuccessBox>
              </InnerContainer>
            </Card>
            <Card>Hello World</Card>
          </React.Fragment>
        )}
      </Container>
    );
  }
}

export default Confirm;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  /* overflow-x: hidden; */
  /* grid-gap: 1rem; */
`;

const Card = styled.div`
  /* min-height: 50vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #202b41;
  &:nth-child(1) {
    background: #1d2537;
  }
`;
