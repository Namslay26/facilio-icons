import * as React from "react";

const SvgClose = ({ title, titleId, ...props }) => (
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
        d="m106.69 96.93 53.53 53.53a3.13 3.13 0 0 1 0 4.42l-2 2-2 2a3.13 3.13 0 0 1-4.42 0l-53.59-53.47a3.13 3.13 0 0 0-4.42 0l-53.53 53.53a3.13 3.13 0 0 1-4.42 0l-2-2-2-2a3.13 3.13 0 0 1 0-4.42l53.47-53.59a3.13 3.13 0 0 0 0-4.42L31.78 39a3.14 3.14 0 0 1 0-4.42l2-2 2-2a3.13 3.13 0 0 1 4.42 0L93.79 84a3.13 3.13 0 0 0 4.42 0l53.53-53.5a3.13 3.13 0 0 1 4.42 0l2 2 2 2a3.14 3.14 0 0 1 0 4.42l-53.47 53.59a3.13 3.13 0 0 0 0 4.42Z"
        style={{
          fill: "#334056",
        }}
      />
      <path
        style={{
          fill: "none",
        }}
        d="M0 0h192v192H0z"
      />
    </g>
  </svg>
);

export default SvgClose;
