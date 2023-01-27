import React from "react";
import PropTypes from "prop-types";

export default function List(props) {
  const {
    component: Component,
    className,
    children,
    fluid,
    ...listProps
  } = props;

  return (
    <Component
      className={
        (fluid ? "" : "py-3 px-4 ") +
        " inline-flex items-center gap-x-2 bg-white dark:bg-gray-800/50 border-group-default " +
        className
      }
      {...listProps}
    >
      {children}
    </Component>
  );
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  component: PropTypes.string,
  fluid: PropTypes.bool,
};

List.defaultProps = {
  className: "",
  component: "li",
  fluid: false,
};
