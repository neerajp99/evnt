import React from "react";
import { CfpContainerBottomContainer, CfpList, CfpHeader } from "./styles/Cfp";
import { Droppable } from "react-beautiful-dnd";
import ListContainer from "./CfpListContainer";

function CfpContainerElement(props) {
  return (
    <CfpContainerBottomContainer>
      <CfpHeader>{props.heading}</CfpHeader>
      {/* Uses a render props items, and expects it's child to be a function. Returns a react components*/}
      <Droppable droppableId={props.column.id}>
        {/* This is done so that this package does not create DOM nodes, and we can manipulate it accoringly*/}
        {(provided, snapshot) => (
          <CfpList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {props.talks.map((talk, index) => (
              <ListContainer key={talk.id} talk={talk} index={index} />
            ))}
            {provided.placeholder}
          </CfpList>
        )}
      </Droppable>
    </CfpContainerBottomContainer>
  );
}

export default CfpContainerElement;
