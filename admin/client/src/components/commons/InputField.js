import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputField = ({
  name,
  value,
  placeholder,
  onChange,
  icon,
  type,
  id,
  label,
  error
}) => {
  return (
    <Container>
      <small className="form-text text-left small form-label">{label}</small>
      <input
        className="input_common"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        id={error ? "error-css" : ""}
      />
      {error && <small className="form-error-text text-left">{error}</small>}
    </Container>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

InputField.defaultProps = {
  type: "text"
};

export default InputField;

const Container = styled.div`
  width: 100%;
`;
