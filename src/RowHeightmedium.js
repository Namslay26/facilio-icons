import * as React from "react";

const SvgRowheightmedium = ({ title, titleId, ...props }) => (
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
      <style>{".row_heightmedium_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="row_heightmedium_svg__trim_area" data-name="trim area">
      <path className="row_heightmedium_svg__cls-1" d="M151.09 163.83Z" />
      <rect
        className="row_heightmedium_svg__cls-1"
        x={10}
        y={20.29}
        width={104}
        height={48}
        rx={5.07}
      />
      <rect
        className="row_heightmedium_svg__cls-1"
        x={10}
        y={90.99}
        width={104}
        height={12}
        rx={2.94}
      />
      <rect
        className="row_heightmedium_svg__cls-1"
        x={10}
        y={125.7}
        width={104}
        height={12}
        rx={2.95}
      />
      <rect
        className="row_heightmedium_svg__cls-1"
        x={10}
        y={160.28}
        width={104}
        height={12}
        rx={2.96}
      />
      <path
        style={{
          fill: "none",
        }}
        d="M0 0h192v192H0z"
      />
      <path
        className="row_heightmedium_svg__cls-1"
        d="m172.71 143.17-17.08 17.08V34l17.08 17a3.88 3.88 0 0 0 5.49-5.49L155.64 23a6.47 6.47 0 0 0-9.14 0l-22.56 22.55a3.88 3.88 0 1 0 5.49 5.45l17.08-17v126.3l-17.08-17.08a3.88 3.88 0 0 0-5.49 5.48l22.56 22.56a6.47 6.47 0 0 0 9.14 0l22.56-22.56a3.88 3.88 0 0 0-5.49-5.48Zm-21.64 21.48ZM151.09 164.65Z"
      />
    </g>
  </svg>
);

export default SvgRowheightmedium;
