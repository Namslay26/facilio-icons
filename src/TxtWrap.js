import * as React from "react";

const SvgTxtwrap = ({ title, titleId, ...props }) => (
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
        d="M172 51.26H20a6 6 0 1 1 0-12h152a6 6 0 0 1 0 12ZM96 151.67H20a6 6 0 0 1 0-12h76a6 6 0 0 1 0 12Zm77-31.19a31 31 0 0 1-31 31 6 6 0 0 1 0-12 19 19 0 0 0 0-38H20a6 6 0 0 1 0-12h122a31 31 0 0 1 31 31Z"
        style={{
          fill: "#324056",
        }}
      />
      <path
        style={{
          fill: "none",
        }}
        d="M0-.05h192v192H0z"
      />
    </g>
  </svg>
);

export default SvgTxtwrap;
