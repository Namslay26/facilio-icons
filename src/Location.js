import * as React from "react";

const SvgLocation = ({ title, titleId, ...props }) => (
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
      <style>{".Location_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Location_svg__trim_area" data-name="trim area">
      <path
        className="Location_svg__cls-1"
        d="M96 59.94a9.94 9.94 0 1 1-9.93 9.94A9.94 9.94 0 0 1 96 59.94m0-12a21.94 21.94 0 1 0 21.93 21.94A21.94 21.94 0 0 0 96 47.94Z"
      />
      <path
        className="Location_svg__cls-1"
        d="M96 20.46a49.48 49.48 0 0 1 49.42 49.42c0 28.8-30.33 72.12-49.42 95.56C76.91 142 46.58 98.67 46.58 69.88A49.48 49.48 0 0 1 96 20.46m0-12a61.38 61.38 0 0 0-61.42 61.42C34.58 115.94 96 183.94 96 183.94s61.42-68 61.42-114.06A61.38 61.38 0 0 0 96 8.46Z"
      />
    </g>
  </svg>
);

export default SvgLocation;
