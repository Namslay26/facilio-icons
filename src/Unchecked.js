import * as React from "react";

const SvgUnchecked = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 192"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M151.94 20.15a20 20 0 0 1 20 20v111.68a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V40.15a20 20 0 0 1 20-20h111.9m0-12H40a32 32 0 0 0-32 32v111.68a32 32 0 0 0 32 32h111.9a32 32 0 0 0 32-32V40.15a32 32 0 0 0-32-32Z"
      style={{
        fill: "#334056",
      }}
      data-name="trim area"
    />
  </svg>
);

export default SvgUnchecked;
