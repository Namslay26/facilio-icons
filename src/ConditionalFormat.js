import * as React from "react";

const SvgConditionalformat = ({ title, titleId, ...props }) => (
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
      <style>{".conditional_format_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="conditional_format_svg__trim_area" data-name="trim area">
      <path
        className="conditional_format_svg__cls-1"
        d="M96.83 35a9.89 9.89 0 0 0-1.21-1l58.71 58.55Z"
      />
      <path
        className="conditional_format_svg__cls-1"
        d="M154.33 92.53 95.62 34 76.93 15.33a3.4 3.4 0 0 0-4.81 0L68.45 19a3.41 3.41 0 0 0 0 4.82L79.86 35.2 22.53 92.53a11.88 11.88 0 0 0 0 16.8L80 166.83a11.9 11.9 0 0 0 16.8 0l.17-.17 57.33-57.33a11.88 11.88 0 0 0 0-16.8Zm-123.23 8.4 57.26-57.26.07-.07 57.33 57.33Z"
      />
      <path
        className="conditional_format_svg__cls-1"
        d="m142.16 97.33-53.8-53.66.07-.07 53.73 53.73zm30.15 58.47c-1.59 6-7 14.5-14.5 14.5s-12.92-8.47-14.5-14.5c-2.66-10.1 3.06-22 14.5-29.93 11.44 7.9 17.19 19.83 14.5 29.93Z"
      />
      <path
        style={{
          fill: "none",
        }}
        d="M0 0h192v192H0z"
      />
    </g>
  </svg>
);

export default SvgConditionalformat;
