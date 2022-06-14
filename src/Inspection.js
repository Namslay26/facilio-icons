import * as React from "react";

const SvgInspection = ({ title, titleId, ...props }) => (
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
      <style>{".Inspection_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Inspection_svg__trim_area" data-name="trim area">
      <path
        className="Inspection_svg__cls-1"
        d="M99.94 60H43.87a4 4 0 1 1 0-8h56.07a4 4 0 0 1 0 8ZM100.49 108h-56.1a4 4 0 0 1 0-8h56.1a4 4 0 0 1 0 8ZM72.53 132h-28.1a4 4 0 0 1 0-8h28.1a4 4 0 1 1 0 8Z"
      />
      <path
        d="M148 120a8.16 8.16 0 0 0-8.14 7.92h16.29A8.16 8.16 0 0 0 148 120Z"
        style={{
          fill: "none",
        }}
      />
      <path
        className="Inspection_svg__cls-1"
        d="M178.28 184a6 6 0 0 1-4.24-1.75l-21-21.05a6 6 0 0 1 8.48-8.49l21.05 21a6 6 0 0 1-4.29 10.29Z"
      />
      <path
        className="Inspection_svg__cls-1"
        d="M136.64 113.5a23.14 23.14 0 1 1-23.14 23.14 23.17 23.17 0 0 1 23.14-23.14m0-12a35.14 35.14 0 1 0 35.15 35.14 35.14 35.14 0 0 0-35.15-35.14ZM120 84H43.87a4 4 0 1 1 0-8H120a4 4 0 0 1 0 8Z"
      />
      <path
        className="Inspection_svg__cls-1"
        d="M87.92 177.75a6 6 0 0 0-6-6H27.35c-4 0-7.17-3.58-7.17-8V27.92c0-4.41 3.22-8 7.17-8h107c4 0 7.17 3.59 7.17 8v49.92a6 6 0 0 0 6 6 6 6 0 0 0 6-6V27.92c0-11-8.58-20-19.17-20h-107c-10.59 0-19.17 9-19.17 20v135.83c0 11.05 8.58 20 19.17 20h54.57a6 6 0 0 0 6-6Z"
      />
    </g>
  </svg>
);

export default SvgInspection;
