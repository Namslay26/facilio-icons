import * as React from "react";

const SvgApps = ({ title, titleId, ...props }) => (
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
      <clipPath id="Apps_svg__clip-path">
        <path
          d="M1205.1-1879.63v-45c0-27.67-14.77-50.82-40.54-57v-6.13a13.5 13.5 0 0 0-13.52-13.51 13.49 13.49 0 0 0-13.51 13.51v6.13c-25.86 6.13-40.55 29.19-40.55 57v45l-18 18v9h144.16v-9Zm-54.1 54.06a18.07 18.07 0 0 0 18-18h-36a18 18 0 0 0 18 18Z"
          style={{
            clipRule: "evenodd",
            fill: "none",
          }}
        />
      </clipPath>
      <style>{".Apps_svg__cls-3{fill:#334056}"}</style>
    </defs>
    <g id="Apps_svg__trim_area" data-name="trim area">
      <path
        className="Apps_svg__cls-3"
        d="M68.35 76.15h-36.5A11.77 11.77 0 0 1 20.1 64.4V27.9a11.76 11.76 0 0 1 11.75-11.75h36.5A11.76 11.76 0 0 1 80.1 27.9v36.5a11.77 11.77 0 0 1-11.75 11.75Zm-36.25-12h36v-36h-36ZM160.54 76.15H124a11.77 11.77 0 0 1-11.71-11.75V27.9A11.76 11.76 0 0 1 124 16.15h36.5a11.76 11.76 0 0 1 11.79 11.75v36.5a11.77 11.77 0 0 1-11.75 11.75Zm-36.25-12h36v-36h-36ZM68.41 169.9h-36.5a11.76 11.76 0 0 1-11.75-11.75v-36.5a11.76 11.76 0 0 1 11.75-11.75h36.5a11.77 11.77 0 0 1 11.75 11.75v36.5a11.77 11.77 0 0 1-11.75 11.75Zm-36.25-12h36v-36h-36ZM160.6 169.9h-36.51a11.77 11.77 0 0 1-11.75-11.75v-36.5a11.77 11.77 0 0 1 11.75-11.75h36.51a11.76 11.76 0 0 1 11.74 11.75v36.5a11.76 11.76 0 0 1-11.74 11.75Zm-36.26-12h36v-36h-36Z"
      />
      <path
        style={{
          fill: "none",
        }}
        d="M0-.06h192v192H0z"
      />
    </g>
  </svg>
);

export default SvgApps;
