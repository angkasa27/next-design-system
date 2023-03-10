import React from "react";
import PropTypes from "prop-types";
import Button from "@elements/Button";
import Icon from "@assets/Icon/Icon";

export default function Acordion(props) {
  const { className, items, id, bordered, alwaysOpen, color } = props;
  return (
    <div
      className={"hs-accordion-group w-full " + className}
      data-hs-accordion-always-open={alwaysOpen}
    >
      {items.map((item, i) => (
        <div
          className={
            (bordered
              ? " border-group-default bg-white dark:bg-gray-800 "
              : "") + " hs-accordion overflow-hidden "
          }
          id={`${id}-heading-${i + 1}`}
          key={i}
        >
          <Button
            aria-controls={`${id}-collapse-${i + 1}`}
            className={
              (bordered ? "py-4 px-5 " : "") +
              " hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:hover:text-gray-400 justify-between focus:ring-0"
            }
            color={color}
            fluid
            rounded="none"
            variant="text"
          >
            {item.title}

            <Icon
              className="hs-accordion-active:hidden block w-4 h-4"
              name="ChevronDown"
            />
            <Icon
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              name="ChevronUp"
            />
          </Button>
          <div
            aria-labelledby={`${id}-heading-${i + 1}`}
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 "
            id={`${id}-collapse-${i + 1}`}
          >
            <div className={bordered ? "pb-4 px-5" : "py-2"}>{item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

Acordion.propTypes = {
  alwaysOpen: PropTypes.bool,
  bordered: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(["blue", "gray", "green", "red", "purple", "yellow"]),
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

Acordion.defaultProps = {
  alwaysOpen: false,
  bordered: false,
  color: "blue",
  items: [],
};
