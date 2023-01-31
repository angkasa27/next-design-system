import React from "react";
import PropTypes from "prop-types";

export default function FormControl(props) {
  const { label, optional, id, error, hint, children } = props;

  const renderHelper = () => {
    const helperText = error || hint;
    <div className="min-h-4">
      <p className="body-6 .text-default-secondary mt-2">{helperText}</p>
    </div>;
  };

  return (
    <div>
      {label && (
        <label className="block subtitle-5 mb-2 dark:text-white" htmlFor={id}>
          {label}
          {optional && (
            <span className="ml-2 .text-default-secondary">
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
