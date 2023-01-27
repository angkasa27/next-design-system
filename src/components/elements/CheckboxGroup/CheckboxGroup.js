import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox";
import List from "../List";

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
        <List key={i}>
          <Checkbox
            checked={isChecked(option, value)}
            description={getOptionDescription(option)}
            disabled={getOptionDisabled(option)}
            label={getOptionLabel(option)}
            onChange={() => onChange(option, value)}
          />
        </List>
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
