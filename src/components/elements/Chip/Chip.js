import React from "react";
import PropTypes from "prop-types";
import Button from "@elements/Button";
import { CHIP_CLASS } from "./constant";

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
          <svg
            className="h-4 w-4"
            fill="currentColor"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
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
