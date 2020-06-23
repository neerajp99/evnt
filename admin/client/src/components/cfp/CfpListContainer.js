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
  TalkOtherDetails,
  CommentAuthorIcon,
  CommentButtons,
  CommentButton,
  CommentHeader,
  CommentContent,
  OtherComments,
  CommentAuthorName,
  CommentAgo,
  CommentApprove,
  TopHr,
  CommentParagraph,
  CommentTool,
  ReplyButton,
  CommentReply
} from "./styles/Cfp";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faStream,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import CommentInput from "./CommentInput";
import { CSSTransition } from "react-transition-group";

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
  const [visible, setVisible] = React.useState(false);
  const [currentComment, setCurrentComment] = React.useState([{ value: null }]);
  const [comment, setComment] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  const onChange = event => {
    setComment(event.target.value);
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
                      <TalkActivityHeading>Activity</TalkActivityHeading>
                    </TalkActivityTopContainer>
                    <TalkActivityFlex>
                      <TalkComments>
                        <CommentAuthorIcon>NP</CommentAuthorIcon>
                        <CommentInput
                          placeholder="Type your comment..."
                          type="text"
                          value={comment}
                          name="add_comment"
                          onChange={onChange}
                        />
                        <CommentButtons>
                          <CommentButton>Cancel</CommentButton>
                          <CommentButton>Submit Comment</CommentButton>
                        </CommentButtons>
                        <div>
                          <OtherComments>
                            <CommentHeader>
                              <TopHr />
                              <CommentAuthorIcon>NP</CommentAuthorIcon>
                              <CommentAuthorName>
                                Neeraj Pandey{" "}
                              </CommentAuthorName>
                              <CommentAgo>28 mins ago</CommentAgo>
                              <CommentApprove>
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  aria-hidden="true"
                                />{" "}
                                56
                              </CommentApprove>
                            </CommentHeader>
                            <CommentContent>
                              <CommentParagraph>
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit, urna consequat felis vehicula
                                class ultricies mollis dictumst, aenean non a in
                                donec nulla. Phasellus ante pellentesque erat
                                cum risus consequat imperdiet aliquam, integer
                                placerat et turpis mi eros nec lobortis taciti,
                                vehicula nisl litora tellus ligula porttitor
                                metus.
                              </CommentParagraph>
                              <CommentTool>
                                <ReplyButton
                                  onClick={handleClick}
                                  visible={visible}
                                >
                                  {" "}
                                  {visible ? "Remove" : "Reply"}{" "}
                                </ReplyButton>
                              </CommentTool>

                              {/*<CSSTransition
                              in={visible}
                              timeout={500}
                              classNames="reply"
                              id="slide_down"
                            >
                              <React.Fragment>
                                {visible && (
                                  <div className="panel">
                                    {visible ? "Hello world" : null}
                                  </div>
                              )}
                              </React.Fragment>
                            </CSSTransition>*/}
                            </CommentContent>
                            <CommentReply
                              className={
                                visible ? "toggle_open" : "toggle_close"
                              }
                            >
                              <CommentAuthorIcon>NP</CommentAuthorIcon>
                              <CommentInput
                                id="reply_comment_input"
                                placeholder="Type your comment..."
                                type="text"
                                value={comment}
                                name="add_comment"
                                onChange={onChange}
                              />
                              <CommentButtons id="reply_comment_buttons">
                                <CommentButton>Cancel</CommentButton>
                                <CommentButton>Reply</CommentButton>
                              </CommentButtons>
                            </CommentReply>
                          </OtherComments>
                        </div>
                      </TalkComments>
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
