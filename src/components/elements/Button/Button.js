import React from "react";
import PropTypes from "prop-types";
import { BUTTON_CLASS, DEFAULT_BUTTON_CLASS } from "./constant";

export default function Button(props) {
  const {
    component: Component,
    size,
    className,
    children,
    variant,
    color,
    pill,
    loading,
    disabled,
    ...buttonProps
  } = props;

  const sizeClass = () => {
    switch (size) {
      case "small":
        return " py-2 px-3 ";
      case "large":
        return " py-3 px-4 sm:p-5 ";
      case "fluid":
        return "";
      default:
        return " py-3 px-4 ";
    }
  };

  const variantClass = () => {
    switch (variant) {
      case "outline":
        return " border-2 " + BUTTON_CLASS.OUTLINE[color];
      case "text":
        return " border border-transparent " + BUTTON_CLASS.TEXT[color];
      case "soft":
        return " border border-transparent " + BUTTON_CLASS.SOFT[color];
      default:
        return " border border-transparent " + BUTTON_CLASS.SOLID[color];
    }
  };

  const borderRadius = pill ? " rounded-full " : " rounded-md ";

  return (
    <Component
      className={
        sizeClass() +
        variantClass() +
        DEFAULT_BUTTON_CLASS +
        borderRadius +
        className
      }
      disabled={disabled || loading}
      {...buttonProps}
    >
      {loading && (
        <>
          <span className="sr-only">Loading...</span>
          <span
            aria-label="loading"
            className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent rounded-full"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </span>
        </>
      )}
      {children}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["blue", "red", "green", "yellow"]),
  component: PropTypes.oneOfType([
    PropTypes.oneOf(["button", "Link", "a"]),
    PropTypes.element,
  ]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  pill: PropTypes.bool,
  size: PropTypes.oneOf(["fluid", "small", "medium", "large"]),
  variant: PropTypes.oneOf(["solid", "outline", "text", "soft"]),
};

Button.defaultProps = {
  color: "blue",
  component: "button",
  disabled: false,
  loading: false,
  pill: false,
  size: "medium",
  variant: "solid",
};
