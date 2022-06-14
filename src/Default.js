import * as React from "react";

const SvgDefault = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 192"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <style>
        {
          ".Default__svg__cls-1{fill:none;stroke:#334056;stroke-miterlimit:10;stroke-width:2px;stroke-linecap:round}"
        }
      </style>
    </defs>
    <g id="Default__svg__trim_area" data-name="trim area">
      <path
        className="Default__svg__cls-1"
        d="m30.88 18.96 133.14 155.49M162.48 17.58 29.33 173.07"
      />
      <path
        d="M147.47 20.15c6.75 0 12.46 4.05 12.46 8.85v134c0 4.8-5.71 8.85-12.46 8.85H44.53c-6.75 0-12.46-4-12.46-8.85V29c0-4.8 5.71-8.85 12.46-8.85h102.94m0-12H44.53C31 8.15 20.07 17.48 20.07 29v134c0 11.52 11 20.85 24.46 20.85h102.94c13.51 0 24.46-9.33 24.46-20.85V29c0-11.52-11-20.85-24.46-20.85Z"
        style={{
          fill: "#334056",
        }}
      />
      <ellipse
        cx={95.93}
        cy={96.28}
        rx={40.6}
        ry={39.12}
        style={{
          fill: "none",
          stroke: "#334056",
          strokeMiterlimit: 10,
          strokeWidth: 2,
        }}
      />
    </g>
  </svg>
);

export default SvgDefault;
