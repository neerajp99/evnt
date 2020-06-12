import React, {Component} from 'react'
import {
    Container,
    InnerContainer
} from "../../styles/Commons"
import Side from "../sidebar/Sidebar"

class Event extends Component {
    render() {
        return (
            <Container>
              <Side />
              <InnerContainer>Wowowow</InnerContainer>
            </Container>
        )
    }
}

export default Event
