import * as icons from "lucide-react";

export default function Icon(props) {
  const { name, className, size, strokeWidth, ...iconProps } = props;
  // eslint-disable-next-line import/namespace
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      {...iconProps}
    />
  );
}
import PropTypes from "prop-types";

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

Icon.defaultProps = {
  className: "",
  name: "",
  size: 18,
  strokeWidth: 2,
};
