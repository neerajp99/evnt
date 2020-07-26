import React from "react";
import PropTypes from "prop-types";
import { Container, TextArea, Label, LabelBottom } from "./styles/talk";

const TalkAreaField = ({
  name,
  value,
  placeholder,
  onChange,
  type,
  label,
  error,
  limit
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
      {limit && (
        <LabelBottom limit={limit} length={value.length} htmlFor="label">
          {value.length} / {limit}
        </LabelBottom>
      )}
    </Container>
  );
};

TalkAreaField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

TalkAreaField.defaultProps = {
  type: "text"
};

export default TalkAreaField;
