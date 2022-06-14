import * as React from "react";

const SvgSummary = ({ title, titleId, ...props }) => (
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
      <style>{".Summary__svg__cls-2{fill:#334056}"}</style>
    </defs>
    <g id="Summary__svg__trim_area" data-name="trim area">
      <path
        d="M184.27 96.4a4 4 0 0 0-1.17-2.83l-16.8-16.79a4 4 0 0 0-2.83-1.17 4 4 0 0 0-2.83 1.18l-12.88 12.93v-66.2c0-8.49-6.28-15.4-14-15.4H34.24c-7.72 0-14 6.91-14 15.4v145c0 8.49 6.28 15.4 14 15.4h99.52c7.72 0 14-6.91 14-15.4v-34l35.34-35.29a4 4 0 0 0 1.17-2.83Zm-44.51 72.17c0 3.64-2.69 6.6-6 6.6H34.24c-3.31 0-6-3-6-6.6v-145c0-3.64 2.69-6.6 6-6.6h99.52c3.31 0 6 3 6 6.6v74.18l-33.57 33.72a4 4 0 0 0-1.8 3.36V151.85a4 4 0 0 0 4 4h16.4a4 4 0 0 0 2.83-1.17l12.12-12.13Zm-16.61-20.71H112.4v-11.28l51.09-51.31 11.12 11.13Z"
        style={{
          stroke: "#334056",
          strokeMiterlimit: 10,
          strokeWidth: 4,
          fill: "#334056",
        }}
      />
      <path
        className="Summary__svg__cls-2"
        d="M124 40H44.07a4 4 0 1 1 0-8H124a4 4 0 0 1 0 8ZM124.24 60H44.16a4 4 0 0 1 0-8h80.08a4 4 0 1 1 0 8ZM92.07 156.06H44a4 4 0 0 1 0-8h48.07a4 4 0 0 1 0 8Z"
      />
    </g>
  </svg>
);

export default SvgSummary;
