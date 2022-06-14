import * as React from "react";

const SvgSearch = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 192"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g data-name="trim area">
      <path
        style={{
          fill: "none",
        }}
        d="M0 0h192v192H0z"
      />
      <path
        d="M38 34.34a56.66 56.66 0 0 0 75.67 84.15l40.06 40.06a6 6 0 0 0 8.49-8.48L122.18 110A56.66 56.66 0 0 0 38 34.34ZM109.68 106a44.67 44.67 0 1 1 0-63.17 44.72 44.72 0 0 1 0 63.17Z"
        style={{
          fill: "#334056",
        }}
      />
    </g>
  </svg>
);

export default SvgSearch;
