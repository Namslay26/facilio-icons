import * as React from "react";

const SvgTermsandconditions = ({ title, titleId, ...props }) => (
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
      <style>{".Termsandconditions_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Termsandconditions_svg__trim_area" data-name="trim area">
      <path
        className="Termsandconditions_svg__cls-1"
        d="M142.71 125.6a23.15 23.15 0 1 1-23.15 23.15 23.17 23.17 0 0 1 23.15-23.15m0-12a35.15 35.15 0 1 0 35.14 35.15 35.15 35.15 0 0 0-35.14-35.15Z"
      />
      <path
        className="Termsandconditions_svg__cls-1"
        d="M153.89 55.85a9.18 9.18 0 0 0-2.75-6.36l-.36-.35c-.16-.18-.32-.37-.49-.55l-30.54-30.5-5.75-5.82c-.38-.38-.78-.73-1.19-1.07a12 12 0 0 0-5.92-2.79 13.52 13.52 0 0 0-2.85-.3H94v.12H36.64c-12.42 0-22.49 9.33-22.49 20.85V163c0 11.52 10.07 20.85 22.49 20.85H87.9a6 6 0 0 0 6-6 6 6 0 0 0-6-6H36.64c-5.78 0-10.49-4-10.49-8.85V29c0-4.88 4.71-8.85 10.49-8.85H94v24.23a23.82 23.82 0 0 0 23.86 23.82h23.94V94a6 6 0 0 0 6 6 6 6 0 0 0 6-6V68.2h.09Zm-36 .35A11.83 11.83 0 0 1 106 44.38v-23l5.2 5.21 11 11.11 18.65 18.5ZM137.42 161.46l-10.25-9.83a4 4 0 1 1 5.54-5.77l4.71 4.52 13.8-13.25a4 4 0 0 1 5.54 5.78Z"
      />
      <path
        className="Termsandconditions_svg__cls-1"
        d="M97.93 84H41.87a4 4 0 1 1 0-8h56.06a4 4 0 0 1 0 8ZM118 108.05H41.87a4 4 0 1 1 0-8H118a4 4 0 0 1 0 8ZM97.93 132.05H41.87a4 4 0 1 1 0-8h56.06a4 4 0 0 1 0 8Z"
      />
    </g>
  </svg>
);

export default SvgTermsandconditions;
