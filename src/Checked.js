import * as React from "react";

const SvgChecked = ({ title, titleId, ...props }) => (
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
      <style>{".Checked_svg__cls-2{fill:#334056}"}</style>
    </defs>
    <g id="Checked_svg__trim_area" data-name="trim area">
      <path
        className="Checked_svg__cls-2"
        d="M151.94 20.15a20 20 0 0 1 20 20v111.68a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V40.15a20 20 0 0 1 20-20h111.9m0-12H40a32 32 0 0 0-32 32v111.68a32 32 0 0 0 32 32h111.9a32 32 0 0 0 32-32V40.15a32 32 0 0 0-32-32Z"
      />
      <path
        className="Checked_svg__cls-2"
        d="M77.4 138.2a10 10 0 0 1-7.07-2.92l-27.21-27.22a10 10 0 0 1 14.14-14.14l20.14 20.14 57.34-57.33a10 10 0 1 1 14.14 14.14l-64.4 64.41a10 10 0 0 1-7.08 2.92Z"
      />
    </g>
  </svg>
);

export default SvgChecked;
