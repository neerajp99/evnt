import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CfpListContainer } from "./styles/Cfp";

function ListContainer(props) {
  return (
    <Draggable draggableId={props.talk.id} index={props.index}>
      {/* These props are applied to the component that is to be moved around and to control the entire component */}
      {(provided, snapshot) => (
        <CfpListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging = {snapshot.isDragging}
        >
          {props.talk.content}
        </CfpListContainer>
      )}
    </Draggable>
  );
}

export default ListContainer;
