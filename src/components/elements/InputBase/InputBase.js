import React from "react";
import PropTypes from "prop-types";

export default function InputBase(props) {
  const {
    label,
    id,
    error,
    className,
    icon,
    iconPosition,
    addOn,
    addOnPosition,
    ...inputProps
  } = props;

  const iconRight = iconPosition === "right";
  const addOnRight = addOnPosition === "right";

  const renderAddOn = () => {
    return (
      <div
        className={
          (addOnRight
            ? " border-l-0 rounded-r-md "
            : " border-r-0 rounded-l-md ") +
          " px-4 inline-flex items-center min-w-fit border border-default bg-gray-100 dark:bg-gray-800 "
        }
      >
        <span className="body-5 text-gray-500">{addOn}</span>
      </div>
    );
  };

  return (
    <div className="relative flex">
      {addOn && !addOnRight && renderAddOn()}
      <input
        className={
          (error
            ? "border-red-500/50 focus:border-red-500  focus:ring-red-500"
            : "border-default focus:border-blue-500 focus:ring-blue-500") +
          " py-3 px-4 block w-full body-5 bg-transparent dark:bg-gray-900 invalid:border-red-500/50 invalid:focus:border-red-500  invalid:focus:ring-red-500 disabled:bg-gray-800/10 dark:disabled:bg-gray-800 " +
          (icon ? (iconRight ? " pr-11 " : " pl-11 ") : " ") +
          (addOn
            ? addOnRight
              ? " rounded-l-md "
              : " rounded-r-md "
            : " rounded-md ") +
          className
        }
        id={id}
        label={label}
        {...inputProps}
      />

      {icon && (
        <div
          className={
            (iconRight ? " right-0 pr-4 " : " left-0 pl-4 ") +
            "absolute inset-y-0 flex items-center pointer-events-none z-20"
          }
        >
          {icon}
        </div>
      )}
      {addOn && addOnRight && renderAddOn()}
    </div>
  );
}

InputBase.propTypes = {
  addOn: PropTypes.string,
  addOnPosition: PropTypes.oneOf(["right", "left"]),
  className: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  iconPosition: PropTypes.oneOf(["right", "left"]),
  id: PropTypes.string,
  label: PropTypes.string,
};

InputBase.defaultProps = {
  error: "",
  iconPosition: "left",
  id: "",
  label: "",
};
