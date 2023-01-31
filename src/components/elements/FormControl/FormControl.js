import React from "react";
import PropTypes from "prop-types";

export default function FormControl(props) {
  const { label, optional, id, error, hint, children, className } = props;

  const renderHelper = () => {
    console.log(hint);
    const helperText = error || hint;
    return (
      <div className="min-h-[20px] mt-2">
        <p
          className={
            (error ? "text-red-500" : "text-default-secondary") + " body-6"
          }
        >
          {helperText}
        </p>
      </div>
    );
  };

  return (
    <div className={className}>
      {label && (
        <label
          className="block body-5 font-medium mb-2 dark:text-white"
          htmlFor={id}
        >
          {label}
          {optional && (
            <span className="ml-2 text-default-secondary">
              {typeof optional === "string" ? optional : `(Opsional)`}
            </span>
          )}
        </label>
      )}
      {children}
      {renderHelper()}
    </div>
  );
}

FormControl.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  className: PropTypes.string,
  error: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  optional: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

FormControl.defaultProps = {
  error: "",
  hint: "",
  id: "",
  label: "",
  optional: false,
};
