import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BADGE_CLASS } from "./constant";

export default function Badge({ children, ping, className, color }) {
  const otherElementRef = useRef(null);
  const [size, setSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const width = otherElementRef.current.getBoundingClientRect().width;
    const height = otherElementRef.current.getBoundingClientRect().height;
    return setSize({ height, width });
  }, [children]);

  return (
    <span
      className={
        (children
          ? " inline-flex items-center py-0.5 px-1.5 body-7 "
          : " w-3.5 h-3.5 ") +
        " absolute top-0 right-0 rounded-full transform -translate-y-1/2 translate-x-1/2 text-white " +
        BADGE_CLASS[color] +
        className
      }
      ref={otherElementRef}
    >
      {children}
      {ping && (
        <span
          className={
            (children ? "" : "w-3.5 h-3.5 ") +
            " absolute top-0 right-0 rounded-full bg-rose-500 animate-ping" +
            BADGE_CLASS[color]
          }
          style={{ height: size.height, width: size.width }}
        />
      )}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  className: PropTypes.string,
  color: PropTypes.oneOf(["blue", "gray", "green", "red", "purple", "yellow"]),
  ping: PropTypes.bool,
};

Badge.defaultProps = {
  color: "blue",
  ping: false,
};
