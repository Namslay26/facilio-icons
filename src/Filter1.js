import * as React from "react";

const SvgFilter1 = ({ title, titleId, ...props }) => (
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
        d="M109.56 182.55a9.27 9.27 0 0 1-2.75-.42l-31.63-10a9.09 9.09 0 0 1-6.38-8.71v-58.77l-61.61-77a6.48 6.48 0 0 1-.76-6.8 6.32 6.32 0 0 1 5.73-3.6h166.11a6.4 6.4 0 0 1 4.9 10.48l-64.46 77v68.68a9.15 9.15 0 0 1-9.15 9.14ZM80.8 161.3l25.91 8.21v-65.65a9.62 9.62 0 0 1 2.29-6.17l57.28-68.41H23.85L78.69 97.8a9.68 9.68 0 0 1 2.11 6Z"
        style={{
          fill: "#334056",
        }}
      />
      <path
        style={{
          fill: "none",
        }}
        d="M.02-.03h192v192H.02z"
      />
    </g>
  </svg>
);

export default SvgFilter1;
