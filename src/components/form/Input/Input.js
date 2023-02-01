import React from "react";
import PropTypes from "prop-types";
import FormControl from "@elements/FormControl";
import InputBase from "@elements/InputBase";

export default function Input(props) {
  const { label, optional, id, error, hint, className, ...inputProps } = props;
  return (
    <FormControl
      className={className}
      error={error}
      hint={hint}
      id={id}
      label={label}
      optional={optional}
    >
      <InputBase id={id} label={label} {...inputProps} error={!!error} />
    </FormControl>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  optional: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Input.defaultProps = {
  error: "",
  hint: "",
  id: "",
  label: "",
  optional: false,
};
