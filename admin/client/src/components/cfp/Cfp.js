import React, { useState, useEffect } from "react";
import { Container, InnerContainer } from "../../styles/Commons";
import Side from "../sidebar/Sidebar";
import { DragDropContext } from "react-beautiful-dnd";
import {
  CfpContainer,
  CfpContainerTop,
  CfpContainerBottom,
  CfpListContainer,
  CfpList,
  CfpHeader
} from "./styles/Cfp";
import CfpContainerElement from "./CfpContainerElement";
import initialData from "./dummy_data";

function Cfp() {
  // Initial state as the inital data
  const [state, setState] = useState(initialData);

  // onDragEnd function to reorder the three columns
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    // If there is no destination, we don't have to do anything
    if (!destination) {
      return;
    }

    // If the conditions are true, drop it back to it's initial postitionif (
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // For moving within one column : use only source else destination
    const column = state.columns[source.droppableId];
    const startColumn = state.columns[source.droppableId];
    const finishColumn = state.columns[destination.droppableId];

    // If the start column and finish column are the same
    if (startColumn === finishColumn) {
      const newTalksId = Array.from(column.talksId);
      newTalksId.splice(source.index, 1);
      newTalksId.splice(destination.index, 0, draggableId);
      

      // Create the update column
      const newColumn = {
        ...column,
        talksId: newTalksId
      };

      // const newState = {
      //   ...state,
      //   columns: {
      //     [newColumn.id]: newColumn
      //   }
      // };

      // Adding the new state
      setState(state => ({
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn
        }
      }));
      return;
    }
    
    // When the starting column is different than the destination column
    // Moving items from one column to the other column
    //
    // New array for the starting talks id's
    const startTalksIds = Array.from(startColumn.talksId);
    startTalksIds.splice(source.index, 1);
    // New start column
    const newStartColumn = {
      ...startColumn,
      talksId: startTalksIds
    };

    // New array for the finished talks id's
    const finishedTalksIds = Array.from(finishColumn.talksId);

    finishedTalksIds.splice(destination.index, 0, draggableId);
    // New Finished column
    const newFinishedColumn = {
      ...finishColumn,
      talksId: finishedTalksIds
    };
    
    // New state object
    setState(state => ({
      ...state,
      columns: {
        ...state.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishedColumn.id]: newFinishedColumn
      }
    }));
  };

  // onDragStart function
  const onDragStart = () => {};

  // onDragUpdate function
  const onDragUpdate = () => {};

  return (
    <Container>
      <Side />
      <InnerContainer>
        <CfpContainer>
          <CfpContainerTop />
          <DragDropContext
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
          >
            <CfpContainerBottom>
              {state.columnOrder.map(columnId => {
                const column = state.columns[columnId];
                const talks = column.talksId.map(talkId => state.talks[talkId]);
                console.log(state);
                return (
                  <CfpContainerElement
                    heading={column.title}
                    talks={talks}
                    column={column}
                    key={column.id}
                  />
                );
              })}
            </CfpContainerBottom>
          </DragDropContext>
        </CfpContainer>
      </InnerContainer>
    </Container>
  );
}
export default Cfp;
