import React from "react";
import PropTypes from "prop-types";
import { ALERT_CLASS } from "./constant";
import Button from "@elements/Button";
import Icon from "@assets/Icon/Icon";
export default function Alert(props) {
  const { children, className, color, dismissible, icon, title, action, id } =
    props;
  return (
    <div
      className={
        (dismissible
          ? "hs-removing:translate-x-5 hs-removing:opacity-0 "
          : "") +
        "transition duration-300 rounded-md p-4 border " +
        ALERT_CLASS[color] +
        className
      }
      id={id}
      role="alert"
    >
      <div className="flex items-start">
        {!!icon && <div className="flex-shrink-0 mr-2">{icon}</div>}
        <div>
          <div className="subtitle-5 dark:text-white">{title}</div>
          {children}
        </div>
        <div className={"pl-2 ml-auto flex"}>
          {action.map(({ name, props }, i) => (
            <Button
              className="px-1"
              color={color}
              fluid={true}
              key={i}
              variant="text"
              {...props}
            >
              {name}
            </Button>
          ))}
          {dismissible && (
            <Button
              className="p-0.5"
              color={color}
              data-hs-remove-element={`#${id}`}
              fluid={true}
              variant="text"
            >
              <span className="sr-only">Dismiss</span>
              <Icon name="X" size={18} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

Alert.propTypes = {
  action: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  className: PropTypes.string,
  color: PropTypes.oneOf(["blue", "gray", "green", "red", "purple", "yellow"]),
  dismissible: PropTypes.bool,
  icon: PropTypes.element,
  id: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

Alert.defaultProps = {
  action: [],
  color: "blue",
  dismissible: false,
};
