import * as React from "react";

const SvgDashboard = ({ title, titleId, ...props }) => (
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
      <style>{".Dashboard_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Dashboard_svg__trim_area" data-name="trim area">
      <path
        className="Dashboard_svg__cls-1"
        d="M162.05 20a10 10 0 0 1 10 10v132a10 10 0 0 1-10 10H30a10 10 0 0 1-10-10V30a10 10 0 0 1 10-10h132m0-12H30A22 22 0 0 0 8 30v132a22 22 0 0 0 22 22h132a22 22 0 0 0 22-22V30a22 22 0 0 0-22-22Z"
      />
      <rect
        className="Dashboard_svg__cls-1"
        x={32.05}
        y={123.97}
        width={27.98}
        height={35.97}
        rx={5}
      />
      <rect
        className="Dashboard_svg__cls-1"
        x={82.05}
        y={112.05}
        width={27.93}
        height={47.89}
        rx={5}
      />
      <rect
        className="Dashboard_svg__cls-1"
        x={131.93}
        y={88.11}
        width={28}
        height={71.85}
        rx={5}
      />
      <path
        className="Dashboard_svg__cls-1"
        d="M156.86 32.08h-25.73a3 3 0 0 0-2.13 5.11l10 10.14-43.13 43.15-17.63-17.63a4 4 0 0 0-5.66 0l-37.34 37.34a4 4 0 0 0 5.66 5.66l34.51-34.51L93 99a4 4 0 0 0 5.66 0l46-46 10.08 10.18a3 3 0 0 0 5.13-2.11v-26a3 3 0 0 0-3.01-2.99Z"
      />
    </g>
  </svg>
);

export default SvgDashboard;
