import * as React from "react";

const SvgOccupant = ({ title, titleId, ...props }) => (
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
      <clipPath id="Occupant_svg__clip-path">
        <path
          d="M973-1879.63v-45c0-27.67-14.78-50.82-40.54-57v-6.13a13.5 13.5 0 0 0-13.52-13.51 13.5 13.5 0 0 0-13.52 13.51v6.13c-25.86 6.13-40.54 29.19-40.54 57v45l-18 18v9H991v-9Zm-54.06 54.06a18.07 18.07 0 0 0 18-18h-36a18 18 0 0 0 17.96 18Z"
          style={{
            clipRule: "evenodd",
            fill: "none",
          }}
        />
      </clipPath>
      <style>{".Occupant_svg__cls-3{fill:#334056}"}</style>
    </defs>
    <g id="Occupant_svg__trim_area" data-name="trim area">
      <path
        className="Occupant_svg__cls-3"
        d="M71.87 183.8a14.59 14.59 0 0 0 1.76.11h44.75a14.59 14.59 0 0 0 1.76-.11ZM183.85 84.64A20 20 0 0 0 178 70.53L109.91 14a20 20 0 0 0-28.29 0l-67.7 56.12a20 20 0 0 0-5.85 14.15v79.53a20 20 0 0 0 20 20h135.87a20 20 0 0 0 20-20Zm-63.79 84.46a1.68 1.68 0 0 1-1.68 1.69H73.63A1.68 1.68 0 0 1 72 169.1v-4.73a18.65 18.65 0 0 1 18.61-18.63h10.87a18.65 18.65 0 0 1 18.63 18.63Zm-33.73-50.36A9.67 9.67 0 1 1 96 128.4a9.69 9.69 0 0 1-9.67-9.66Zm83.27 50.71a7.92 7.92 0 0 1-5.66 2.35h-31a14.2 14.2 0 0 0 .25-2.7v-4.73a31.78 31.78 0 0 0-20.81-29.8 22.79 22.79 0 1 0-32.74 0 31.79 31.79 0 0 0-20.8 29.8v4.73a14.2 14.2 0 0 0 .25 2.7h-31a8 8 0 0 1-8-8V84.27a8 8 0 0 1 2-5.35l67.19-55.74.43-.35.4-.4a8 8 0 0 1 11.31 0l.39.39.43.36 67.56 56.15a7.9 7.9 0 0 1 2 5.32l.09 79.14a8 8 0 0 1-2.29 5.66Z"
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

export default SvgOccupant;