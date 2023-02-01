import React from "react";
import PropTypes from "prop-types";

export default function InputBase(props) {
  const { label, id, error, className, icon, iconPosition, ...inputProps } =
    props;

  const iconRight = iconPosition === "right";

  return (
    <div className="relative flex rounded-md">
      <input
        className={
          (error
            ? "border-red-500/50 focus:border-red-500  focus:ring-red-500"
            : "border-default focus:border-blue-500 focus:ring-blue-500") +
          " py-3 px-4 block w-full rounded-md body-5 bg-transparent dark:bg-gray-900 invalid:border-red-500/50 invalid:focus:border-red-500  invalid:focus:ring-red-500 disabled:bg-gray-800/10 dark:disabled:bg-gray-800 " +
          (icon ? (iconRight ? " pr-11 " : " pl-11 ") : " ") +
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
    </div>
  );
}

InputBase.propTypes = {
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
