import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import {TalkUpdateButton} from "./styles/MyTalk"
import { useSpring, animated } from "react-spring/web.cjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faStream,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import UpdateTalk from "./UpdateTalkModal"

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

function TalkModal(props) {
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
          <div>
            <TalkUpdateButton onClick={handleOpen}>EDIT TALK</TalkUpdateButton>

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
          <UpdateTalk talkID = { props.talkdId } />

                </div>
              </Fade>
            </Modal>
          </div>
  );
}

export default TalkModal;