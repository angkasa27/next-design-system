import React from "react";
import PropTypes from "prop-types";

export default function InputBase(props) {
  const { label, id, error, className, ...inputProps } = props;
  return (
    <input
      className={
        (error
          ? "border-red-500/50 focus:border-red-500  focus:ring-red-500"
          : "border-default focus:border-blue-500 focus:ring-blue-500") +
        " py-3 px-4 block w-full rounded-md body-5 bg-transparent dark:bg-gray-900 invalid:border-red-500/50 invalid:focus:border-red-500  invalid:focus:ring-red-500 disabled:bg-gray-800/10 dark:disabled:bg-gray-800 " +
        className
      }
      id={id}
      label={label}
      {...inputProps}
    />
  );
}

InputBase.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};

InputBase.defaultProps = {
  error: "",
  id: "",
  label: "",
};
