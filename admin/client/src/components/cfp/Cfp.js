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
import { fetchCfp } from "../../actions/cfpActions";
import { connect } from "react-redux";

// Insert into a specific index in an array 
Array.prototype.insert = function ( index, item ) {
  this.splice( index, 0, item );
};  

// Remove a value from a specific index in an array
Array.prototype.remove = function ( index ) {
  this.splice(index, 1)
}

function Cfp(props) {
  // Initial state as the initial data
  const [state, setState] = useState(initialData);
  const [allTalks, setAllTalks] = useState([])
  const [shortlistedTalks, setShortlistedTalks] = useState([])
  const [selectedTalks, setSelectedTalks] = useState([])
  const [cfpState, setCfpState] = useState(null)
  const [eventID, setEventID] = useState(null)

  const { fetchCfp, cfp } = props;

  useEffect(
    () => {
      fetchCfp();
    },
    [fetchCfp]
  );

  // Check for state change 
  if (typeof(cfp) !== 'undefined') {
    if (cfp !== cfpState && Object.keys(cfp.cfp).length > 0){ 
      setCfpState(cfp);
      setEventID(cfp.cfp[0]._id)
      const cfpAll = cfp.cfp[0].all
      const cfpShortlisted = cfp.cfp[0].shortlisted
      const cfpFinal = cfp.cfp[0].final 
      setAllTalks(cfpAll)
      setShortlistedTalks(cfpShortlisted)
      setSelectedTalks(cfpFinal)
    }
  }

  // Remove from the state at a specific index 
  const removeFromState = (valueString, index) => {
    if (valueString == "shortlisted") {
      let temp = shortlistedTalks;
      temp.remove(index)
      setShortlistedTalks(temp)
    }
    if (valueString == "all") {
      let temp = allTalks;
      temp.remove(index)
      setAllTalks(temp)
    }
    if (valueString == "final") {
      let temp = selectedTalks;
      temp.remove(index)
      setSelectedTalks(temp)
    }
  }

  // Insert into a specific index of the state
  const insertIntoState = (valueString, index, value) => {
    if (valueString == "shortlisted") {
      let temp = shortlistedTalks;
      temp.insert(index, value)
      setShortlistedTalks(temp)
    }
    if (valueString == "all") {
      let temp = allTalks;
      temp.insert(index, value)
      setAllTalks(temp)
    }
    if (valueString == "shortlisted") {
      let temp = selectedTalks;
      temp.insert(index, value)
      setSelectedTalks(temp)
    }
  }

  // onDragEnd function to reorder the three columns
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    // If there is no destination, we don't have to do anything
    if (!destination) {
      return;
    }

    // If the conditions are true, drop it back to it's initial position
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

    console.log('ID', draggableId)
    console.log('Source: ', source)
    console.log('Destination', destination)

    // Remove item from source list at a specified index
    const sourceVal = removeFromState(source.droppableId, source.index)
    // Insert item to the destination list at a specified index 
    const destinationVal = insertIntoState(destination.droppableId, destination.index, draggableId)

    // Updated object
    const updatedTalks = {
      all: allTalks,
      shortlisted: shortlistedTalks,
      final: selectedTalks,
      eventID: eventID
    }
    


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

const mapStateToProps = state => ({
  cfp: state.cfp
});

export default connect(
  mapStateToProps,
  { fetchCfp }
)(Cfp);
