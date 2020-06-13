import React from "react";
import PropTypes from "prop-types";
import { Container, TextArea, Label } from "./styles/EventForm";

const EventTextArea = ({
  name,
  value,
  placeholder,
  onChange,
  type,
  label,
  error
}) => {
  return (
    <Container>
      <Label htmlFor="label">{label}</Label>
      <TextArea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </Container>
  );
};

EventTextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

EventTextArea.defaultProps = {
  type: "text"
};

export default EventTextArea;
