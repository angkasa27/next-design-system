import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
  const {
    component: Component,
    className,
    children,
    fluid,
    transparent,
    ...cardProps
  } = props;

  return (
    <Component
      className={
        (transparent ? "" : "bg-white dark:bg-gray-800/50 ") +
        (fluid ? "" : "py-3 px-4 ") +
        " border -mt-px rounded-lg border-default " +
        className
      }
      {...cardProps}
    >
      {children}
    </Component>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  component: PropTypes.string,
  fluid: PropTypes.bool,
  transparent: PropTypes.bool,
};

Card.defaultProps = {
  className: "",
  component: "div",
  fluid: false,
  transparent: false,
};
