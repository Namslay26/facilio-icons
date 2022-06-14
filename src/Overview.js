import * as React from "react";

const SvgOverview = ({ title, titleId, ...props }) => (
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
      <style>{".Overview_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Overview_svg__trim_area" data-name="trim area">
      <circle className="Overview_svg__cls-1" cx={95.97} cy={95.9} r={11.88} />
      <path
        className="Overview_svg__cls-1"
        d="M96 67.93a28 28 0 1 1-28 28 28 28 0 0 1 28-28m0-12a40 40 0 1 0 40 40 40 40 0 0 0-40-40Z"
      />
      <path
        className="Overview_svg__cls-1"
        d="M147.47 20.15c6.75 0 12.46 4.05 12.46 8.85v134c0 4.8-5.71 8.85-12.46 8.85H44.53c-6.75 0-12.46-4-12.46-8.85V29c0-4.8 5.71-8.85 12.46-8.85h102.94m0-12H44.53C31 8.15 20.07 17.48 20.07 29v134c0 11.52 11 20.85 24.46 20.85h102.94c13.51 0 24.46-9.33 24.46-20.85V29c0-11.52-11-20.85-24.46-20.85Z"
      />
    </g>
  </svg>
);

export default SvgOverview;
