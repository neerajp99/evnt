import React from "react";
import PropTypes from "prop-types";
import { Container, Input, Label } from "./styles/EventForm";

const EventInputField = ({
  name,
  value,
  placeholder,
  onChange,
  type,
  label,
  error,
  classname
}) => {
  return (
    <Container>
      <Label htmlFor="label">{label}</Label>
      <Input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className={classname ? classname : ""}
      />
    </Container>
  );
};

EventInputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

EventInputField.defaultProps = {
  type: "text"
};

export default EventInputField;
