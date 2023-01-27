import React from "react";
import PropTypes from "prop-types";
import Button from "@elements/Button";

export default function Acordion(props) {
  const { className, items, id, bordered, alwaysOpen } = props;
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
            rounded="none"
            size="fluid"
            variant="text"
          >
            {item.title}
            <svg
              className="hs-accordion-active:hidden  block w-3 h-3"
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
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
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

Acordion.defaultProps = {
  alwaysOpen: false,
  bordered: false,
  items: [],
};
