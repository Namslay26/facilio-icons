import * as React from "react";

const SvgHome = ({ title, titleId, ...props }) => (
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
      <style>{".Home_svg__cls-1{fill:#334056}"}</style>
    </defs>
    <g id="Home_svg__trim_area" data-name="trim area">
      <path
        className="Home_svg__cls-1"
        d="M95.76 20.15a7.94 7.94 0 0 1 5.46 2.15L169 98.56l.23.26.25.25a8 8 0 0 1 2.35 5.64l.09 59.13a8 8 0 0 1-8 8H28.06a8 8 0 0 1-8-8v-59.52a8 8 0 0 1 2.35-5.66l.25-.25.23-.26L90.3 22.3a8 8 0 0 1 5.46-2.15m0-12A19.93 19.93 0 0 0 81.62 14l-67.7 76.18a20 20 0 0 0-5.86 14.14v59.53a20 20 0 0 0 20 20h135.88a20 20 0 0 0 20-20l-.09-59.12A20 20 0 0 0 178 90.58L109.9 14a19.93 19.93 0 0 0-14.14-5.85Z"
      />
      <path
        className="Home_svg__cls-1"
        d="M104 135.79a8 8 0 0 1 8 8v27.44H79.64v-27.44a8 8 0 0 1 8-8H104m0-12H87.64a20 20 0 0 0-20 20v39.44H124v-39.44a20 20 0 0 0-20-20Z"
      />
    </g>
  </svg>
);

export default SvgHome;
