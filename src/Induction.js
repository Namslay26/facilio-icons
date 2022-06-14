import * as React from "react";

const SvgInduction = ({ title, titleId, ...props }) => (
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
      <clipPath id="Induction_svg__clip-path">
        <path
          d="M95-1179.47v-45c0-27.66-14.77-50.82-40.54-57v-6.12a13.5 13.5 0 0 0-13.52-13.52 13.49 13.49 0 0 0-13.51 13.52v6.12c-25.86 6.13-40.55 29.2-40.55 57v45l-18 18v9H113v-9Zm-54.06 54.06a18.07 18.07 0 0 0 18-18h-36a18 18 0 0 0 18 18Z"
          style={{
            clipRule: "evenodd",
            fill: "none",
          }}
        />
      </clipPath>
      <style>{".Induction_svg__cls-3{fill:#334056}"}</style>
    </defs>
    <g id="Induction_svg__trim_area" data-name="trim area">
      <path
        className="Induction_svg__cls-3"
        d="M108.5 101.19a16.86 16.86 0 1 0-24.22 0 23.51 23.51 0 0 0-15.39 22v3.49a11 11 0 0 0 11 11h33.1a11 11 0 0 0 11-11v-3.49a23.51 23.51 0 0 0-15.49-22ZM96.38 82.32a7.16 7.16 0 1 1-7.15 7.16 7.17 7.17 0 0 1 7.15-7.16Zm17.8 44.41a1.24 1.24 0 0 1-1.24 1.25h-33.1a1.24 1.24 0 0 1-1.25-1.25v-3.49a13.79 13.79 0 0 1 13.77-13.78h8a13.79 13.79 0 0 1 13.78 13.78Z"
      />
      <path
        className="Induction_svg__cls-3"
        d="M168.32 27.46h-48.79a24.27 24.27 0 0 1 1 7.06 23.66 23.66 0 0 1-.51 4.94h48.25a4 4 0 0 1 4 4v95.64a4 4 0 0 1-4 4H24.55a4 4 0 0 1-4-4V43.47a4 4 0 0 1 4-4H72.7a23.66 23.66 0 0 1-.51-4.94 24.27 24.27 0 0 1 1-7.06H24.55a16 16 0 0 0-16 16v95.63a16 16 0 0 0 16 16h143.77a16 16 0 0 0 16-16V43.47a16 16 0 0 0-16-16.01Z"
      />
      <path
        className="Induction_svg__cls-3"
        d="M119.53 27.46a24.2 24.2 0 0 0-47.34 7.06 23.66 23.66 0 0 0 .51 4.94 24.19 24.19 0 0 0 47.37 0 23.66 23.66 0 0 0 .51-4.94 24.27 24.27 0 0 0-1.05-7.06Zm-23.15-5.13a12.23 12.23 0 0 1 12.2 12.19 12 12 0 0 1-1 4.94 12.18 12.18 0 0 1-22.29 0 12 12 0 0 1-1-4.94 12.21 12.21 0 0 1 12.09-12.19Z"
      />
      <circle className="Induction_svg__cls-3" cx={96.39} cy={34.52} r={4.23} />
      <path
        className="Induction_svg__cls-3"
        d="M124.39 179.24h-56a6 6 0 1 1 0-12h56a6 6 0 0 1 0 12Z"
      />
      <path
        style={{
          fill: "none",
        }}
        d="M.25.46h192v192H.25z"
      />
    </g>
  </svg>
);

export default SvgInduction;
