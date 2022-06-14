import * as React from "react";

const SvgInductionTemp = ({ title, titleId, ...props }) => (
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
      <clipPath id="Induction_Temp_svg__clip-path">
        <path
          d="M95-1411v-45c0-27.66-14.77-50.82-40.54-57v-6.12a13.5 13.5 0 0 0-13.52-13.52 13.49 13.49 0 0 0-13.51 13.52v6.12c-25.86 6.13-40.55 29.2-40.55 57v45l-18 18v9H113v-9Zm-54.06 54.06a18.07 18.07 0 0 0 18-18h-36a18 18 0 0 0 18 18.03Z"
          style={{
            clipRule: "evenodd",
            fill: "none",
          }}
        />
      </clipPath>
      <style>{".Induction_Temp_svg__cls-3{fill:#334056}"}</style>
    </defs>
    <g id="Induction_Temp_svg__trim_area" data-name="trim area">
      <path
        className="Induction_Temp_svg__cls-3"
        d="M92.19 55.62H36.12a4 4 0 0 1 0-8h56.07a4 4 0 0 1 0 8ZM112.23 87.62H36.12a4 4 0 0 1 0-8h76.11a4 4 0 1 1 0 8ZM92.19 119.62H36.12a4 4 0 0 1 0-8h56.07a4 4 0 0 1 0 8Z"
      />
      <path
        className="Induction_Temp_svg__cls-3"
        d="M80.9 177.51a6 6 0 0 0-6-6H30.33c-3.95 0-7.17-3.59-7.17-8V27.67c0-4.41 3.22-8 7.17-8h107c3.95 0 7.17 3.59 7.17 8V67.6a6 6 0 0 0 6 6 6 6 0 0 0 6-6V27.67c0-11-8.58-20-19.17-20h-107c-10.59 0-19.17 9-19.17 20v135.84c0 11 8.58 20 19.17 20H74.9a6 6 0 0 0 6-6Z"
      />
      <path
        className="Induction_Temp_svg__cls-3"
        d="M163.32 134.25a22.79 22.79 0 1 0-32.74 0 31.78 31.78 0 0 0-20.81 29.8v4.72a14.83 14.83 0 0 0 14.81 14.82h44.74a14.83 14.83 0 0 0 14.81-14.82v-4.72a31.78 31.78 0 0 0-20.81-29.8Zm-16.38-25.51a9.67 9.67 0 1 1-9.66 9.68 9.69 9.69 0 0 1 9.66-9.68Zm24.07 60a1.7 1.7 0 0 1-1.69 1.7h-44.74a1.7 1.7 0 0 1-1.69-1.7v-4.72a18.65 18.65 0 0 1 18.62-18.63h10.87A18.66 18.66 0 0 1 171 164.05Z"
      />
      <path
        style={{
          fill: "none",
        }}
        d="M.25 0h192v192H.25z"
      />
    </g>
  </svg>
);

export default SvgInductionTemp;
