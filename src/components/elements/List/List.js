import React from "react";
import PropTypes from "prop-types";

export default function List(props) {
  const { component: Component, className, children, ...listProps } = props;

  return (
    <Component
      className={
        "inline-flex items-center gap-x-2 py-3 px-4 bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800/50 border-default dark:text-white " +
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
  component: PropTypes.element,
};

List.defaultProps = {
  className: "",
  component: "li",
};
