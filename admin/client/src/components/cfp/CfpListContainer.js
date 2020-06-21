import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  CfpListContainer,
  TalkStatus,
  TalkTitle,
  SpeakerContent,
  SpeakerTag,
  SpeakerName,
  TalkModal,
  TalkDetails,
  TalkHeading,
  TalkDescription,
  TalkTags,
  TalkTag,
  TalkActivity,
  TalkActivityTopContainer,
  TalkActivityIcon,
  TalkActivityHeading,
  TalkActivityFlex,
  TalkComments,
  TalkOtherDetails
} from "./styles/Cfp";
// For Modal
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faStream } from "@fortawesome/free-solid-svg-icons";

// Trim the talk title to a specific length
const getString = string => {
  let y = string.substring(0, 80);
  let new_string;
  new_string = string.length <= 80 ? string : y + "...";
  return new_string;
};

// Modal styles
const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func
};

function ListContainer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Draggable draggableId={props.talk.id} index={props.index}>
      {/* These props are applied to the component that is to be moved around and to control the entire component */}
      {(provided, snapshot) => (
        <CfpListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div>
            <TalkStatus isOpen={props.talk.status}>
              {props.talk.status === true ? "Open" : "Closed"}
            </TalkStatus>
            <TalkTitle>{getString(props.talk.content)}</TalkTitle>
            <SpeakerContent>
              <SpeakerTag>{props.talk.speaker[0]}</SpeakerTag>
              <SpeakerName>{props.talk.speaker}</SpeakerName>
            </SpeakerContent>
            <TalkModal onClick={handleOpen}>
              <span />
              <span />
              <span />
            </TalkModal>
            <Modal
              aria-labelledby="spring-modal-title"
              aria-describedby="spring-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500
              }}
            >
              <Fade in={open}>
                <div className={classes.paper} id="cfpModal">
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    size="3x"
                    aria-hidden="true"
                    className="close_icon"
                    onClick={handleClose}
                  />
                  <TalkDetails>
                    <TalkHeading>{props.talk.content}</TalkHeading>
                    <TalkDescription>
                      "{props.talk.description}"
                    </TalkDescription>
                    <TalkTags>
                      {props.talk.tags.map((tag, index) => {
                        return (
                          <TalkTag key={index} index={index}>
                            {tag}
                          </TalkTag>
                        );
                      })}
                    </TalkTags>
                  </TalkDetails>
                  <TalkActivity>
                    <TalkActivityTopContainer>
                      <TalkActivityIcon>
                        <FontAwesomeIcon icon={faStream} aria-hidden="true" />
                      </TalkActivityIcon>
                      <TalkActivityHeading>ACTIVITY</TalkActivityHeading>
                    </TalkActivityTopContainer>
                    <TalkActivityFlex>
                      <TalkComments />
                      <TalkOtherDetails />
                    </TalkActivityFlex>
                  </TalkActivity>
                </div>
              </Fade>
            </Modal>
          </div>
        </CfpListContainer>
      )}
    </Draggable>
  );
}

export default ListContainer;
