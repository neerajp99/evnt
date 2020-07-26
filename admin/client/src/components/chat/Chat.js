import React, { Component, useEffect } from "react";
import Side from "../sidebar/Sidebar";
import { Container, InnerContainer } from "../../styles/Commons";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4004";


let socket;

class Chat extends Component {
  state = {
    message: ""
  };
  componentDidMount() {
    let socket = socketIOClient(ENDPOINT);

    console.log(socket);
    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }

  render() {
    return (
      <Container>
        <Side />
        <InnerContainer>
        </InnerContainer>
      </Container>
    );
  }
}

export default Chat;
