import * as React from "react";

const SvgWorkorder = ({ title, titleId, ...props }) => (
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
      <style>{".Work_order_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Work_order_svg__trim_area" data-name="trim area">
      <path
        className="Work_order_svg__cls-1"
        d="M87 183.91H38.34c-14.45 0-26.22-11.41-26.22-25.44V33.53c0-14 11.77-25.44 26.22-25.44h85.11c14.45 0 26.21 11.41 26.21 25.44V92a6 6 0 1 1-12 0V33.53c0-7.41-6.38-13.44-14.21-13.44H38.34c-7.84 0-14.22 6-14.22 13.44v124.94c0 7.41 6.38 13.44 14.22 13.44H87a6 6 0 1 1 0 12Z"
      />
      <rect
        className="Work_order_svg__cls-1"
        x={40.2}
        y={95.73}
        width={12}
        height={43.96}
        rx={4}
      />
      <rect
        className="Work_order_svg__cls-1"
        x={68.13}
        y={75.75}
        width={12}
        height={56.05}
        rx={4}
      />
      <rect
        className="Work_order_svg__cls-1"
        x={96.18}
        y={51.72}
        width={12}
        height={68.07}
        rx={4}
      />
      <path
        className="Work_order_svg__cls-1"
        d="M144.73 125.58a23.14 23.14 0 1 1-23.14 23.14 23.17 23.17 0 0 1 23.14-23.14m0-12a35.14 35.14 0 1 0 35.15 35.14 35.14 35.14 0 0 0-35.15-35.14Z"
      />
      <path className="Work_order_svg__cls-1" d="M139.6 135.32h8v19.91h-8z" />
      <path
        className="Work_order_svg__cls-1"
        transform="rotate(90 147.57 151.24)"
        d="M143.57 143.26h8v15.95h-8z"
      />
    </g>
  </svg>
);

export default SvgWorkorder;
