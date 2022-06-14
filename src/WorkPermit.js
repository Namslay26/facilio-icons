import * as React from "react";

const SvgWorkpermit = ({ title, titleId, ...props }) => (
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
      <style>{".Work_permit_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Work_permit_svg__trim_area" data-name="trim area">
      <path
        className="Work_permit_svg__cls-1"
        d="M142 117.52A28.46 28.46 0 1 1 113.53 146 28.49 28.49 0 0 1 142 117.52m0-9.48A37.94 37.94 0 1 0 179.93 146 37.94 37.94 0 0 0 142 108Z"
      />
      <path
        className="Work_permit_svg__cls-1"
        d="M142 124.6a21.38 21.38 0 1 0 21.37 21.4A21.4 21.4 0 0 0 142 124.6Zm11.77 16.74-15.4 14.76-8.16-7.82a3.18 3.18 0 1 1 4.41-4.59l3.75 3.59 11-10.54a3.19 3.19 0 0 1 4.41 4.6ZM105.24 60H49.18a4 4 0 0 1 0-8h56.06a4 4 0 0 1 0 8ZM125.36 84h-76.1a4 4 0 0 1 0-8h76.1a4 4 0 1 1 0 8ZM85.36 108.06h-36.1a4 4 0 1 1 0-8h36.1a4 4 0 1 1 0 8Z"
      />
      <path
        className="Work_permit_svg__cls-1"
        d="M91.82 177.92a6 6 0 0 0-6-6H31.24c-3.95 0-7.17-3.59-7.17-8V28.08c0-4.41 3.22-8 7.17-8h107c4 0 7.17 3.59 7.17 8V78a6 6 0 0 0 6 6 6 6 0 0 0 6-6V28.08c0-11-8.58-20-19.17-20h-107c-10.58 0-19.17 9-19.17 20v135.84c0 11 8.59 20 19.17 20h54.58a6 6 0 0 0 6-6Z"
      />
      <circle
        className="Work_permit_svg__cls-1"
        cx={37.26}
        cy={55.98}
        r={4.04}
      />
      <circle
        className="Work_permit_svg__cls-1"
        cx={37.21}
        cy={79.98}
        r={4.04}
      />
      <circle
        className="Work_permit_svg__cls-1"
        cx={37.29}
        cy={103.99}
        r={4.04}
      />
    </g>
  </svg>
);

export default SvgWorkpermit;
