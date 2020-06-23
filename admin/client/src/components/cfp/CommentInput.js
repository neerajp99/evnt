import React from "react";
import PropTypes from "prop-types";
import { CommentInputField } from "./styles/Cfp";

function CommentInput(props) {
  return (
    <CommentInputField
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  );
}

CommentInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};
CommentInput.defaultProps = {
  type: "text"
};

export default CommentInput;
