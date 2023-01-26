import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox";

export default function CheckboxGroup(props) {
  const {
    className,
    getOptionDescription,
    getOptionLabel,
    getOptionDisabled,
    isChecked,
    onChange,
    value,
    options,
  } = props;

  return (
    <ul className={"flex flex-col " + className}>
      {options.map((option, i) => (
        <li
          className="inline-flex items-center gap-x-2 py-3 px-4 bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800/50 dark:border-gray-700 dark:text-white"
          key={i}
        >
          <Checkbox
            checked={isChecked(option, value)}
            description={getOptionDescription(option)}
            disabled={getOptionDisabled(option)}
            label={getOptionLabel(option)}
            onChange={() => onChange(option, value)}
          />
        </li>
      ))}
    </ul>
  );
}

CheckboxGroup.propTypes = {
  className: PropTypes.string,
  getOptionDescription: PropTypes.func,
  getOptionDisabled: PropTypes.func,
  getOptionLabel: PropTypes.func,
  isChecked: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.array,
};

CheckboxGroup.defaultProps = {
  className: "",
  getOptionDescription: () => {},
  getOptionDisabled: () => {},
  getOptionLabel: () => {},
  isChecked: () => {},
  onChange: () => {},
  options: [],
  value: [],
};
