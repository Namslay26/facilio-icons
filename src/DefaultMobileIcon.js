import * as React from "react";

const SvgDefaultmobileicon = ({ title, titleId, ...props }) => (
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
      <style>{".Default_mobile_icon_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Default_mobile_icon_svg__trim_area" data-name="trim area">
      <path
        className="Default_mobile_icon_svg__cls-1"
        d="M151.09 163.83Zm-15.95 19.43H52.75a15.72 15.72 0 0 1-15.7-15.71V23.61A15.72 15.72 0 0 1 52.75 7.9h82.39a15.72 15.72 0 0 1 15.7 15.71v143.94a15.72 15.72 0 0 1-15.7 15.71ZM52.75 19.9a3.71 3.71 0 0 0-3.7 3.71v143.94a3.71 3.71 0 0 0 3.7 3.71h82.39a3.71 3.71 0 0 0 3.7-3.71V23.61a3.71 3.71 0 0 0-3.7-3.71Z"
      />
      <circle
        className="Default_mobile_icon_svg__cls-1"
        cx={95.5}
        cy={154.25}
        r={8.03}
      />
      <path
        style={{
          fill: "none",
        }}
        d="M-.25-.21h192v192h-192z"
      />
      <circle
        className="Default_mobile_icon_svg__cls-1"
        cx={78.12}
        cy={34.9}
        r={5.18}
      />
      <path
        className="Default_mobile_icon_svg__cls-1"
        d="M112.66 39.9H98.92a5 5 0 0 1 0-10h13.74a5 5 0 0 1 0 10Z"
      />
    </g>
  </svg>
);

export default SvgDefaultmobileicon;
