import * as React from "react";

const SvgVisitscopy2 = ({ title, titleId, ...props }) => (
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
      <style>{".Visits_copy_2_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Visits_copy_2_svg__trim_area" data-name="trim area">
      <path
        className="Visits_copy_2_svg__cls-1"
        d="M96 20c27.25 0 49.42 22.63 49.42 49.88 0 28.8-30.33 72.12-49.42 95.56C76.91 142 46.58 98.67 46.58 69.88 46.58 42.63 68.75 20 96 20m0-12C62.05 8 34.58 35.92 34.58 69.88 34.58 115.94 96 183.94 96 183.94s61.42-68 61.42-114.06C157.42 35.92 130 8 96 8Z"
      />
      <path
        className="Visits_copy_2_svg__cls-1"
        d="M110 96a6 6 0 0 1-4.24-1.76L85.7 74.11a6 6 0 0 1-1.7-4.25V46.38a6 6 0 0 1 12 0v21l18.27 18.32A6 6 0 0 1 110 96Z"
      />
    </g>
  </svg>
);

export default SvgVisitscopy2;
