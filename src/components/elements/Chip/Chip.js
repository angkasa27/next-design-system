import React from "react";
import PropTypes from "prop-types";
import Button from "@elements/Button";
import { CHIP_CLASS } from "./constant";
import Icon from "@assets/Icon/Icon";

export default function Chip({ children, onClose, className, color }) {
  return (
    <span
      className={
        (onClose ? " pl-3 pr-2 " : " px-3 ") +
        " inline-flex items-center gap-1 py-1.5 rounded-full subtitle-7 " +
        CHIP_CLASS[color] +
        className
      }
    >
      {children}
      {!!onClose && (
        <Button color={color} fluid rounded="full" variant="text">
          <Icon name="X" size={12} />
        </Button>
      )}
    </span>
  );
}

Chip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["blue", "gray", "green", "red", "purple", "yellow"]),
  onClose: PropTypes.func,
};

Chip.defaultProps = {
  color: "blue",
};
