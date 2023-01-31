import React from "react";
import PropTypes from "prop-types";
import FormControl from "@elements/FormControl";

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
      <input
        className={
          (error
            ? "border-red-500/50 focus:border-red-500  focus:ring-red-500"
            : "border-default focus:border-blue-500 focus:ring-blue-500") +
          " py-3 px-4 block w-full rounded-md body-5 bg-transparent dark:bg-gray-900 invalid:border-red-500/50 invalid:focus:border-red-500  invalid:focus:ring-red-500 disabled:bg-gray-800/10 dark:disabled:bg-gray-800 "
        }
        id={id}
        label={label}
        {...inputProps}
      />
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
