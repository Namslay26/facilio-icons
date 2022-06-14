import * as React from "react";

const SvgFloors = ({ title, titleId, ...props }) => (
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
      <style>{".Floors_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Floors_svg__trim_area" data-name="trim area">
      <path
        className="Floors_svg__cls-1"
        d="M96 100.76a6 6 0 0 1-2.62-.6L11.61 59.71a6 6 0 0 1 0-10.78L93.35 8.66a6 6 0 0 1 5.3 0l81.77 40.27a6 6 0 0 1 .05 10.74l-81.74 40.45a6.13 6.13 0 0 1-2.73.64ZM27.88 54.28 96 88.06l68.34-33.68L96 20.73Z"
      />
      <path
        className="Floors_svg__cls-1"
        d="M96 140.11a6 6 0 0 1-2.62-.6L11.61 99.06a6 6 0 0 1 5.25-10.79L96 127.42l79.08-39.11A6 6 0 1 1 180.47 99l-81.74 40.47a6 6 0 0 1-2.73.64Z"
      />
      <path
        className="Floors_svg__cls-1"
        d="M96 184a6 6 0 0 1-2.62-.6l-81.77-40.5a6 6 0 1 1 5.25-10.79L96 171.26l79.08-39.11a6 6 0 1 1 5.41 10.71l-81.76 40.45A6 6 0 0 1 96 184Z"
      />
    </g>
  </svg>
);

export default SvgFloors;
