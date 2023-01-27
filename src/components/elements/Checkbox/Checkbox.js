import React from "react";
import PropTypes from "prop-types";

export default function Checkbox(props) {
  const { onChange, checked, label, description, name, disabled, className } =
    props;
  return (
    <div
      className={
        (disabled ? "opacity-40" : "") +
        " relative flex items-start w-full " +
        className
      }
    >
      <div className="flex items-center h-5">
        <input
          checked={checked}
          className="border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          disabled={disabled}
          id={name}
          name={name}
          onChange={onChange}
          type="checkbox"
        />
      </div>
      <label className="ml-2 w-full" htmlFor={name}>
        <span
          className={
            (description ? "subtitle-6" : "body-6") +
            " block text-gray-800 dark:text-gray-300 "
          }
        >
          {label}
        </span>
        {!!description && (
          <span
            className={"block body-6 text-default-secondary"}
            id="hs-checkbox-delete-description"
          >
            {description}
          </span>
        )}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  checked: false,
  className: "",
  description: "",
  disabled: false,
  label: "",
  name: "",
  onChange: () => {},
};
